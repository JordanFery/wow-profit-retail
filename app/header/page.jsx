// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Header() {
//   return (
//     <header className="w-full bg-zinc-700 p-4">
//       <div className="max-w-7xl mx-auto flex justify-center">
//         <Link href="/">
//           <Button variant="outline" className="text-white border-white bg-zinc-800 cursor-pointer hover:bg-white hover:text-zinc-900">
//             Back to profession select
//           </Button>
//         </Link>
//       </div>
//     </header>
//   );
// }


"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { data: session } = useSession()
  const isLoggedIn = !!session?.user

  return (
    <header className="w-full bg-zinc-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Bouton central */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Button
              variant="outline"
              className="text-white border-white bg-zinc-800 cursor-pointer hover:bg-white hover:text-zinc-900"
            >
              Back to profession select
            </Button>
          </Link>
        </div>

        {/* Navigation à droite */}
        <div className="flex gap-2">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-zinc-600">
                  Sign in
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="ghost" className="text-white hover:bg-zinc-600">
                  Create account
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-white hover:bg-zinc-600"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
