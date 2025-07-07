import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/generated/prisma";
import { sendEmail } from "./services/email.service";
import { passkey } from "better-auth/plugins/passkey";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, token, url }, request) => {
      await sendEmail({
        to: user.email,
        subject: "E-travel reset password",
        html: `<p>Bonjour,</p><p>Cliquez ici pour changer votre mot de passe :</p><a href="${url}">Vérifier</a>`,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    expiresIn: 3600,
    sendVerificationEmail: async ({ user, token, url }, request) => {
      await sendEmail({
        to: user.email,
        subject: "E-travel verify your email",
        html: `<p>Bonjour,</p><p>Cliquez ici pour vérifier votre adresse email :</p><a href="${url}">Vérifier</a>`,
      });
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
  },
  plugins: [passkey()],
});
