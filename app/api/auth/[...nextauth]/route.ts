import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Google client ID and/or client secret not defined in environment variables.");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret
    }),
  ],
});

export { handler as GET, handler as POST };
