import prisma from "@/lib/prisma"
import { hash } from "bcryptjs"

export async function POST(req) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Champs requis manquants" }), {
      status: 400,
    })
  }

  const userExists = await prisma.user.findUnique({ where: { email } })

  if (userExists) {
    return new Response(JSON.stringify({ error: "Utilisateur déjà existant" }), {
      status: 400,
    })
  }

  const hashedPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: "FREE", // rôle par défaut
    },
  })

  return new Response(JSON.stringify({ success: true }), { status: 201 })
}
