import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, surname, mail, phone, object, message } = await request.json();

    // Validation des champs requis
    if (!name || !surname || !mail || !object || !message) {
      return NextResponse.json({ error: 'Tous les champs requis ne sont pas remplis.' }, { status: 400 });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Utilisation de la variable d'environnement
        pass: process.env.EMAIL_PASS, // Utilisation de la variable d'environnement
      },
    });

    // Définition de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rudy.frassin@gmail.com',
      subject: object,
      text: `Vous avez un nouveau message de ${name} ${surname} (${mail}, ${phone}):\n\n${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès'); // Journalisation pour le terminal
    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    // Journalisation améliorée pour la production
    console.error('Erreur lors de l\'envoi de l\'email:', {
      message: error.message,
      stack: error.stack,
    });
    // Réponse générique pour éviter d'exposer des détails sensibles
    return NextResponse.json({ error: 'Une erreur est survenue lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' }, { status: 500 });
  }
}
