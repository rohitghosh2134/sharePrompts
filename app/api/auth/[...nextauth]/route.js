import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import User from "@models/user";
import { connectToDB } from "@utils/database";



const handler = NextAuth(
    {
        providers: [
            GoogleProvider(
                {
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_SECRET,
                }
            )
        ],
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn({ profile }) {
            try {
                await connectToDB()
                //User exists or not?

                const userExists = await User.findOne({
                    email: profile.email
                })

                if (!userExists) {
                    await User.create({
                        emaol: profile.email,
                        username: profile.username.replace(" ", "").toLowerCase(),
                        image: profile.image
                    })
                }

                return true
            } catch (error) {
                console.log.apply(error)
                return false
            }
        }
    }
)

export { handler as GET, handler as POST }