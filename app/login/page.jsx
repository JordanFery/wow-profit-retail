"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit faire au moins 6 caractères"),
})

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

const router = useRouter()

const onSubmit = async (values) => {
  const res = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: false,
  })

  if (res?.ok) {
    router.push("/") // ou "/dashboard" si tu veux
  } else {
    // ici tu peux afficher une erreur à l’utilisateur
    console.log("Erreur d'identifiants")
  }
}


  return (
    <main className="grid grid-cols-1 md:grid-cols-3 min-h-screen items-center justify-items-center">
  <section className="w-full max-w-md col-span-1 md:col-start-2">

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="adresse@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>
    </Form>
          </section>
          </main>
  )
}
