import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/options" // adapte le chemin


export async function POST(req) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
    })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    })
  }

  if (user.role === "FREE" && user.clickCount >= 5) {
    return new Response(
      JSON.stringify({ error: "Click limit reached. Please upgrade." }),
      { status: 403 }
    )
  }

  // Incrémente clickCount
  await prisma.user.update({
    where: { id: user.id },
    data: { clickCount: { increment: 1 } },
  })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
