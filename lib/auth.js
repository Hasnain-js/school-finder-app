import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { getClient } from "./graphql/client/gqlClient";
import { createUserMutation, getUserQuery } from "./graphql/user";

export const authOptions = {
    callbacks: {
        async signIn({ account, profile }) {
            try {
                const socialUser = profile;

                if (!socialUser?.email_verified) {
                    return false;
                }

                const wpUser = await getClient().query({
                    query: getUserQuery,
                    variables: { email: socialUser.email },
                });

                let user = wpUser.data?.user;

                if (!user?.email) {
                    user = {
                        username: socialUser?.email,
                        firstName: socialUser?.given_name,
                        lastName: socialUser?.family_name,
                        displayName: socialUser?.name,
                        email: socialUser?.email,
                        locale: socialUser?.locale,
                        roles: ["customer"],
                    };

                    await getClient().mutate({
                        mutation: createUserMutation,
                        variables: user,
                    });
                }

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
    ]
};
