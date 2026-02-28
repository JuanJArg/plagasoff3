// Cargar variables de entorno desde .env
require('dotenv').config();

const nodemailer = require('nodemailer');

async function run() {
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const to = process.env.TO_EMAIL || process.env.SMTP_USER;

  if (sendgridKey) {
    // Test via SendGrid API
    const sg = require('@sendgrid/mail');
    sg.setApiKey(sendgridKey);
    try {
      console.log('Enviando prueba con SendGrid...');
      const res = await sg.send({
        to: to,
        from: process.env.SENDER_EMAIL || process.env.SMTP_USER || 'no-reply@plagasoff.com',
        subject: 'Prueba SendGrid desde proyecto PlagasOff',
        text: 'Este es un correo de prueba enviado desde smtp-test.js usando SendGrid',
      });
      console.log('Enviado por SendGrid. Response status:', res && res[0] && res[0].statusCode);
      process.exit(0);
    } catch (err) {
      console.error('Error SendGrid:', err && err.message ? err.message : err);
      process.exit(2);
    }
  }

  // Fallback to SMTP
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error('Faltan variables de entorno: SMTP_USER y/o SMTP_PASS (o SENDGRID_API_KEY)');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    console.log('Verificando conexión SMTP...');
    await transporter.verify();
    console.log('Verificación OK. Enviando mail de prueba a', user);

    const info = await transporter.sendMail({
      from: `"Plagas Off" <${user}>`,
      to: user,
      subject: 'Prueba SMTP desde proyecto PlagasOff',
      text: 'Este es un correo de prueba enviado desde el script smtp-test.js',
    });

    console.log('Mail enviado. MessageId:', info.messageId || info.response);
    process.exit(0);
  } catch (err) {
    console.error('Error en SMTP:', err && err.message ? err.message : err);
    process.exit(2);
  }
}

run();
