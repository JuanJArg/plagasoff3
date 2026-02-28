<?php
// Simple mail handler for contact/reservation forms.
header('Content-Type: text/plain; charset=UTF-8');

$MAIL_CONFIG = array(
    'to' => 'fumigadoraplagasoff@gmail.com',
    'from' =>'fumigadoraplagasoff@gmail.com',
    // Prefer smtpjs_token. If empty, host/user/pass will be used.
    'smtpjs_token' => '',
    'smtpjs_host' => 'smtp.gmail.com',
    'smtpjs_user' => '',
    'smtpjs_pass' => '',
    'smtpjs_port' => '587'
);

$configFile = __DIR__ . '/mail-config.php';
if (file_exists($configFile)) {
    // mail-config.php should set $MAIL_CONFIG overrides.
    include $configFile;
}

function sanitize($value) {
    return trim(str_replace(array("\r", "\n"), ' ', (string)$value));
}

$tipo = isset($_POST['tipoEmail']) ? sanitize($_POST['tipoEmail']) : '';
if ($tipo === '') {
    $tipo = isset($_POST['tipoMail']) ? sanitize($_POST['tipoMail']) : '';
}

$nombre = isset($_POST['nombre']) ? sanitize($_POST['nombre']) : '';
$email = isset($_POST['email']) ? sanitize($_POST['email']) : '';
$telefono = isset($_POST['telefono']) ? sanitize($_POST['telefono']) : '';
$mensaje = isset($_POST['mensaje']) ? sanitize($_POST['mensaje']) : '';
$fecha = isset($_POST['fecha']) ? sanitize($_POST['fecha']) : '';
$hora = isset($_POST['hora']) ? sanitize($_POST['hora']) : '';
$tipoServicio = isset($_POST['tipo']) ? sanitize($_POST['tipo']) : '';

$to = $MAIL_CONFIG['to'];
$baseSubject = ($tipo === 'reserva') ? 'Nueva solicitud de visita' : 'Nueva consulta desde el sitio';
$subject = $email !== '' ? ($baseSubject . ' - ' . $email) : $baseSubject;

$bodyLines = array(
    'Tipo: ' . ($tipo !== '' ? $tipo : 'contacto'),
    'Nombre: ' . $nombre,
    'Email: ' . $email,
    'Telefono: ' . $telefono,
    'Mensaje: ' . $mensaje
);

if ($tipo === 'reserva') {
    $bodyLines[] = 'Fecha: ' . $fecha;
    $bodyLines[] = 'Hora: ' . $hora;
    $bodyLines[] = 'Servicio/Plaga: ' . $tipoServicio;
}

$body = implode("\n", $bodyLines);

// Also produce an HTML body for nicer emails
$bodyHtmlLines = array_map(function($line){
    $parts = explode(": ", $line, 2);
    $k = isset($parts[0]) ? $parts[0] : '';
    $v = isset($parts[1]) ? htmlspecialchars($parts[1]) : '';
    return '<tr><td style="vertical-align:top;padding:6px 10px;border:1px solid #eee;"><strong>' . $k . '</strong></td><td style="padding:6px 10px;border:1px solid #eee;">' . $v . '</td></tr>';
}, $bodyLines);
$bodyHtml = '<h2>' . htmlspecialchars($baseSubject) . '</h2><table style="border-collapse:collapse;">' . implode("\n", $bodyHtmlLines) . '</table>';

$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';
$host = preg_replace('/:\\d+$/', '', $host);
if (strpos($host, 'www.') === 0) {
    $host = substr($host, 4);
}
$fromEmail = $MAIL_CONFIG['from'] !== ''
    ? $MAIL_CONFIG['from']
    : (($host !== '' && $host !== 'localhost') ? ('contacto@' . $host) : $MAIL_CONFIG['to']);
$headers = array(
    'From: ' . $fromEmail,
    'Reply-To: ' . ($email !== '' ? $email : $fromEmail),
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8'
);

$headerString = implode("\r\n", $headers);
$envelopeFrom = '-f' . $fromEmail;

function smtpjs_send($from, $to, $subject, $body, $cfg) {
    $payload = array(
        'From' => $from,
        'to' => $to,
        'Subject' => $subject,
        'Body' => $body
    );

    if (!empty($cfg['smtpjs_token'])) {
        $payload['SecureToken'] = $cfg['smtpjs_token'];
        $payload['Action'] = 'SendFromStored';
    } else {
        $payload['Host'] = $cfg['smtpjs_host'];
        $payload['Username'] = $cfg['smtpjs_user'];
        $payload['Password'] = $cfg['smtpjs_pass'];
        if (!empty($cfg['smtpjs_port'])) {
            $payload['Port'] = $cfg['smtpjs_port'];
        }
        $payload['Action'] = 'Send';
    }

    $query = http_build_query($payload);
    $url = 'https://smtpjs.com/v2/smtp.aspx?';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $resp = curl_exec($ch);
        curl_close($ch);
        return $resp;
    }

    $context = stream_context_create(array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => $query
        )
    ));
    return @file_get_contents($url, false, $context);
}

$sent = false;
$usedMethod = 'mail';
$smtpjsResponse = '';
if (!empty($MAIL_CONFIG['smtpjs_token']) || (!empty($MAIL_CONFIG['smtpjs_user']) && !empty($MAIL_CONFIG['smtpjs_pass']))) {
    $resp = smtpjs_send($fromEmail, $to, $subject, $body, $MAIL_CONFIG);
    $smtpjsResponse = trim((string)$resp);
    $sent = ($smtpjsResponse === 'OK');
    $usedMethod = 'smtpjs';
} else {
    $sent = @mail($to, $subject, $body, $headerString, $envelopeFrom);
}

$logEntry = date('c') . ' | host=' . $host . ' | from=' . $fromEmail . ' | to=' . $to . ' | method=' . $usedMethod . ' | sent=' . ($sent ? '1' : '0');
if ($usedMethod === 'smtpjs') {
    $logEntry .= ' | smtpjs=' . $smtpjsResponse;
}
$logEntry .= "\n";
@file_put_contents(__DIR__ . '/mail.log', $logEntry, FILE_APPEND);

if ($sent) {
    echo 'OK';
} else {
    echo 'ERROR';
}
?>
