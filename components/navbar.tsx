"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { signOut, useSession } from "@/lib/auth-client"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setIsOpen(false)
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut()
    close()
  }

  return (
    <header
      className="sticky top-0 z-50 -mb-20 w-full px-4 pt-5 sm:-mb-24 sm:px-8"
      onKeyDown={(e) => e.key === "Escape" && close()}
    >
      <div className="mx-auto mb-7 flex max-w-7xl items-center justify-between rounded-2xl border border-zinc-800/80 bg-[#18181b]/90 px-6 py-2.5 shadow-lg backdrop-blur">
        {/* Logo */}
        <Link href="/" onClick={close}>
          <Image
            src="/images/logo.png"
            alt="HireLoop"
            width={130}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "font-medium text-white underline decoration-zinc-400 underline-offset-8"
                    : "text-zinc-400 hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <span className="h-4 w-px bg-zinc-700/60" />

          {session?.user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-200">
                Welcome, <span className="font-medium text-white">{session.user.name}</span>
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-lg bg-[#5b54f6] px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#4f46e5]"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="rounded-lg bg-[#5b54f6] px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#4f46e5]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex rounded-xl border border-zinc-800 bg-[#18181b]/90 p-2 text-zinc-300 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 md:hidden" onClick={close} />

          <div className="relative z-50 mx-auto mt-3 max-w-7xl rounded-2xl border border-zinc-800 bg-[#18181b]/95 p-5 shadow-2xl backdrop-blur md:hidden">
            <nav className="flex flex-col gap-2 text-base font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={
                    pathname === link.href
                      ? "rounded-lg px-3 py-2 text-white underline decoration-zinc-400 underline-offset-4"
                      : "rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/60 hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="my-2 h-px w-full bg-zinc-800" />

            <div className="flex flex-col gap-2.5 pt-1">
              {session?.user ? (
                <>
                  <span className="px-3 py-1 text-sm text-zinc-200">
                    Welcome, <span className="font-semibold text-white">{session.user.name}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full rounded-lg bg-[#5b54f6] py-2.5 text-center text-sm font-medium text-white shadow-md transition-colors hover:bg-[#4f46e5]"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    onClick={close}
                    className="w-full rounded-lg px-3 py-2 text-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    onClick={close}
                    className="w-full rounded-lg bg-[#5b54f6] py-2.5 text-center text-sm font-medium text-white shadow-md transition-colors hover:bg-[#4f46e5]"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
