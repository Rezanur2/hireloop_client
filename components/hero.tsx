import Image from "next/image"
import { Search, MapPin, Briefcase, BarChart3, Users, Star } from "lucide-react"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: BarChart3, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfication Rate" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-20 pb-12 text-center sm:pt-28 sm:pb-16 md:pt-32">
      {/* Top subtle ambient violet glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-95 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(147,51,234,0.18),rgba(0,0,0,0))] sm:h-125" />

      {/* 1. Header & Search Bar Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Top Badge with accent wings */}
        <div className="mb-5 flex items-center justify-center gap-2 sm:mb-6 sm:gap-3">
          <div className="h-px w-6 bg-linear-to-r from-transparent to-zinc-700 sm:w-16" />
          <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-[#18181b]/90 px-3 py-1 text-[11px] text-zinc-400 shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
            <Image
              src="/images/hero-icon.png"
              alt=""
              width={16}
              height={16}
              className="h-3.5 w-3.5 object-contain sm:h-4 sm:w-4"
            />
            <span className="font-semibold text-white">50,000+</span>
            <span className="tracking-wide">NEW JOBS THIS MONTH</span>
          </div>
          <div className="h-px w-6 bg-linear-to-l from-transparent to-zinc-700 sm:w-16" />
        </div>

        {/* Heading */}
        <h1 className="mb-3 px-2 text-3xl font-bold tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-6 max-w-2xl px-2 text-xs leading-relaxed text-zinc-400 sm:mb-10 sm:text-sm md:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <form className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-zinc-800/90 bg-[#121214]/90 p-1.5 shadow-2xl backdrop-blur sm:flex-row sm:p-2">
          <div className="flex w-full flex-1 items-center gap-3 px-3 py-2 sm:py-2">
            <Search className="h-4 w-4 shrink-0 text-zinc-500" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
            />
          </div>

          <div className="my-0.5 h-px w-full bg-zinc-800 sm:mx-1 sm:my-0 sm:h-6 sm:w-px" />

          <div className="flex w-full flex-1 items-center gap-3 px-3 py-2 sm:py-2">
            <MapPin className="h-4 w-4 shrink-0 text-zinc-500" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-1 flex h-10 w-full shrink-0 items-center justify-center rounded-xl bg-[#5b54f6] text-white transition-colors hover:bg-[#4f46e5] sm:mt-0 sm:h-11 sm:w-11"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        {/* Trending Positions */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500 sm:mt-4">
          <span>Trending Position</span>
          {trendingPositions.map((pos) => (
            <span
              key={pos}
              className="cursor-pointer rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white sm:text-xs"
            >
              {pos}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Globe Graphic */}
      <div className="relative mx-auto -mt-2 w-full max-w-5xl px-2 sm:px-4 md:-mt-20">
        <div className="relative">
          <Image
            src="/images/globe-v2.png"
            alt="HireLoop Global Reach"
            width={1440}
            height={750}
            className="pointer-events-none h-auto w-full object-contain select-none"
            priority
          />

          {/* Text on globe */}
          <div className="pointer-events-none absolute inset-x-0 top-[55%] z-10 px-4 text-center">
            <p className="mx-auto max-w-70 text-[15px] font-light leading-snug tracking-tight text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:max-w-md sm:text-lg md:max-w-lg md:text-2xl lg:text-3xl">
              Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
              <br />
              find their dream positions.
            </p>
          </div>

          {/* Soft bottom fade blending into the page */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black via-black/60 to-transparent sm:h-24 md:h-32" />
        </div>
      </div>

      {/* 3. The 4 Stats Cards (overlapping the bottom of the globe) */}
      <div className="relative z-10 container mx-auto -mt-6 max-w-5xl px-4 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex h-36.25 flex-col justify-between rounded-xl border border-zinc-800/80 bg-[#121214]/95 p-4 text-left shadow-2xl backdrop-blur transition-all hover:border-zinc-700 sm:h-43.75 sm:rounded-2xl sm:p-6 md:h-47.5"
              >
                <div className="text-zinc-400">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white leading-none sm:text-3xl md:text-4xl">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-normal text-zinc-400 sm:mt-2 sm:text-xs md:text-sm">
                    {item.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
