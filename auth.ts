import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const googleConfig = GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const credentialsConfig = CredentialsProvider({
    name: "Credentials",
    credentials: {
        username: {
            label: "User Name",
        },
        password: {
            label: "Password",
            type: "password",
        },
    },

    // credentials: {
    //     email: { label: "Email", type: "text", placeholder: "이메일" },
    //     password: { label: "Password", type: "password" },
    // },

    // async authorize(credentials, req) {
    //     if (!credentials?.email || !credentials.password) {
    //         return null;
    //     }
    //     try {
    //         const input = {
    //             email: credentials?.email,
    //             password: credentials?.password
    //         }
    //         const user = await loginAction(input)
    //         if (user === 'password do not match' || user === 'user not registered') {
    //             throw new Error('password do not match or user not registered')
    //         }
    //         return user
    //     } catch (error) {
    //         throw new Error(JSON.stringify(error))
    //     }
    //     return null
    // },

    async authorize(credentials) {
        // if (credentials?.password || credentials?.username) {
        //     return null;
        // }
        console.log(credentials)
        // try {
        //     const input = {
        //         email: credentials?.username,
        //         password: credentials?.password
        //     }
        //     const user = await loginAction(credentials)
        //     if (user === 'password do not match' || user === 'user not registered') {
        //         throw new Error('password do not match or user not registered')
        //     }
        //     return user.name;
        // } catch (error) {
        //     console.log('authorize error: ', error)
        //     return null;
        // }
        if (credentials.username === "sk" && credentials.password === "123")
            return {
                name: "sk",
            };
        else return null;
    },
});

const config = {
    providers: [googleConfig],
    // providers: [credentialsConfig, GoogleProvider],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            if (pathname === "/middlewareProtected") return !!auth;
            return true;
        },
    },
    // pages: {
    //     signIn: '/auth/login'
    // }
} satisfies NextAuthConfig;



export const { handlers: { GET, POST }, auth, signIn, signOut, } = NextAuth(config);
// export const {
//     handlers: { GET, POST }, auth, signIn, signOut, } = NextAuth({
//         providers: [
//             GoogleProvider({
//                 clientId: process.env.GOOGLE_CLIENT_ID,
//                 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             })],
//     });