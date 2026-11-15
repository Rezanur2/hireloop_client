import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | HireLoop",
  description: "Create an account to get started with HireLoop",
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
