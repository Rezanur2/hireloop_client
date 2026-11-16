"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Users, User, Shield } from "lucide-react"
import { signIn, signUp } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const roles = [
  { id: "seeker", label: "Job Seeker", icon: Users },
  { id: "recruiter", label: "Recruiter", icon: User },
  { id: "admin", label: "Admin", icon: Shield },
] as const

export default function SignUpPage() {
  const router = useRouter()
  const [role, setRole] = useState<"seeker" | "recruiter" | "admin">("seeker")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries()) as {
      name: string
      email: string
      role: "seeker" | "recruiter" | "admin"
      password: string
      confirmPassword: string
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    const { data, error } = await signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      callbackURL: "/sign-in",
    })

    if (data) {
      router.push("/sign-in")
    }
    if (error) {
      console.error(error.message || "Registration failed")
    }
  }

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    })
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-24 pb-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(91,84,246,0.15),transparent_70%)]" />

      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <Image
            src="/images/logo.png"
            alt="HireLoop"
            width={120}
            height={32}
            className="mx-auto mb-3 h-7 w-auto object-contain"
            priority
          />
          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            Create your account
          </CardTitle>
          <CardDescription className="text-xs text-zinc-400 sm:text-sm">
            Three minutes to set up. Matches start arriving today.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full gap-2 rounded-lg border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 text-white"
          >
            <svg className="size-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Continue with Google
          </Button>

          <div className="relative my-4 text-center text-xs text-zinc-500">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <span className="relative bg-[#18181b] px-3 uppercase tracking-wider">or</span>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Role Selection UI matching user screenshot */}
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-zinc-300">Joining HireLoop as</Label>
              <div className="grid grid-cols-3 gap-2.5">
                {roles.map(({ id, label, icon: Icon }) => {
                  const isSelected = role === id
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setRole(id)}
                      className={`flex flex-col items-center justify-center gap-1.5 rounded-lg py-3 px-2 text-center transition-all ${
                        isSelected
                          ? "border-2 border-[#5b54f6] bg-[#5b54f6]/10 text-white shadow-sm shadow-[#5b54f6]/20"
                          : "border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <Icon className={`size-5 ${isSelected ? "text-[#5b54f6]" : "text-zinc-400"}`} />
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  )
                })}
              </div>
              <input type="hidden" name="role" value={role} />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-[#5b54f6] py-5 font-medium text-white shadow-md shadow-[#5b54f6]/25 hover:bg-[#4f46e5]"
            >
              Create account
            </Button>
          </form>

          <p className="pt-2 text-center text-xs text-zinc-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-[#5b54f6] hover:text-[#4f46e5] hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
