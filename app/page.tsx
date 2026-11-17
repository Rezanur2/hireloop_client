import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
    </main>
  )
}
