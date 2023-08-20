import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  callbacks: {
    async signIn({ account, profile }) {
      try {
        const socialUser = profile;

        if (!socialUser?.email_verified) {
          return false;
        }

        const user = {
          username: socialUser?.email,
          firstName: socialUser?.given_name,
          lastName: socialUser?.family_name,
          displayName: socialUser?.name,
          email: socialUser?.email,
          locale: socialUser?.locale,
          roles: ["customer"],
        };

        return { ...user, image: socialUser.picture }; // Do different verification for other providers that don't have `email_verified`
      } catch (e) {
        console.error("user login failed ===> ", e);
        return false;
      }
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
