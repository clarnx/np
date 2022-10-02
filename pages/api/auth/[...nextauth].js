import NextAuth from "next-auth";
import Providers from 'next-auth/providers'
import { connectToDB } from "../../../helpers/mongodb";
import { verifyPassword } from '../../../helpers/auth'

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const { email, password } = credentials

                const clientMongoDB = await connectToDB()
                const db = clientMongoDB.db()

                const user = await db.collection('users').findOne({ email: email })

                if (!user) {
                    clientMongoDB.close()
                    throw new Error('Utilisateur introuvable')
                }

                const valid = await verifyPassword(password, user.password)

                if (!valid) {
                    clientMongoDB.close()
                    throw new Error('Mot de passe incorrect')
                }

                clientMongoDB.close()
                return {
                    email: user.email,
                    name: user.pseudo,
                    image: user.photo,
                    id: user._id,
                }

            }
        })
    ],
    callbacks: {
        jwt: async (token, user) => {
            user && (token.user = user)
            return token
        },
        session: (session, user) => {
            session.user = user.user
            return user
        }
    }
}) 