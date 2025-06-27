// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import prisma from "@/lib/prisma"
// import { compare } from "bcryptjs"

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         })

//         if (!user || !user.password) return null

//         const isValid = await compare(credentials.password, user.password)
//         if (!isValid) return null

//         return user
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//      async jwt({ token, user }) {
//     if (user) {
//       token.id = user.id
//       token.role = user.role
//       token.premiumUntil = user.premiumUntil
//     } else {
//       // Si le token vient d'un session déjà établie, on le met à jour à partir de la DB
//       const dbUser = await prisma.user.findUnique({
//         where: { id: token.id },
//         select: { role: true, premiumUntil: true },
//       })

//       if (dbUser) {
//         token.role = dbUser.role
//         token.premiumUntil = dbUser.premiumUntil
//       }
//     }
//       return token
//     },
//     async session({ session, token }) {
//       session.user.id = token.id
//       session.user.role = token.role
//        session.user.premiumUntil = token.premiumUntil
//       return session
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// })

// export { handler as GET, handler as POST }


// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import { authOptions } from "./options"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
