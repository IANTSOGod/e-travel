import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_PROVIDER,
    pass: process.env.EMAIL_PASSWORD, // le mot de passe d’application Google
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  await transporter.sendMail({
    from: `"E-travel" <${process.env.EMAIL_PROVIDER}>`,
    to,
    subject,
    html,
  });
}
