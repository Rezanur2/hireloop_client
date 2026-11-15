import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | HireLoop",
  description: "Sign in to your HireLoop account",
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
