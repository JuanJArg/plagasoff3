import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { tipoEmail, nombre, email, telefono, mensaje, fecha, hora, tipo } = req.body || {};

  if (!nombre || !telefono || !email) {
    res.status(400).json({ error: 'Faltan campos requeridos' });
    return;
  }

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT || '587';
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const TO_EMAIL = process.env.TO_EMAIL || 'fumigadoraplagasoff@gmail.com';
  const SENDER_EMAIL = process.env.SENDER_EMAIL || SMTP_USER;


  // subject should display the sender's email address
  const subject = `Consulta ${email}`;

  let bodyText = '';
  bodyText += `Nombre: ${nombre}\n`;
  bodyText += `Email: ${email}\n`;
  bodyText += `Teléfono: ${telefono}\n`;
  bodyText += `Tipo de plaga/servicio seleccionado: ${tipo || 'No especificado'}\n`;
  if (mensaje) bodyText += `Mensaje: ${mensaje}\n`;
  if (fecha) bodyText += `Fecha: ${fecha}\n`;
  if (hora) bodyText += `Hora: ${hora}\n`;

  const bodyHtml = `
    <h2>Consulta</h2>
    <table border="0" cellpadding="6" style="border-collapse:collapse;">
      <tr><td><strong>Nombre</strong></td><td>${nombre || ''}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email || ''}</td></tr>
      <tr><td><strong>Teléfono</strong></td><td>${telefono || ''}</td></tr>
      <tr><td><strong>Tipo de plaga/servicio seleccionado</strong></td><td>${tipo || 'No especificado'}</td></tr>
      <tr><td><strong>Mensaje</strong></td><td>${mensaje || ''}</td></tr>
      ${fecha ? `<tr><td><strong>Fecha</strong></td><td>${fecha}</td></tr>` : ''}
      ${hora ? `<tr><td><strong>Hora</strong></td><td>${hora}</td></tr>` : ''}
    </table>
    <p>Este mensaje fue enviado desde el formulario del sitio.</p>
  `;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    res.status(500).json({ error: 'SMTP no configurado en variables de entorno' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: String(SMTP_PORT) === '465',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      // set a custom display name so recipient sees a meaningful sender
      from: `"Consulta/Form/Plagasoff" <${SENDER_EMAIL}>`,
      to: TO_EMAIL,
      subject: subject,
      text: bodyText,
      html: bodyHtml,
      replyTo: email || SENDER_EMAIL,
    });

    res.status(200).json({ status: 'OK' });
  } catch (err) {
    console.error('send-email error:', err && err.message ? err.message : err);
    res.status(500).json({ status: 'ERROR', error: err && err.message ? err.message : String(err) });
  }
}
