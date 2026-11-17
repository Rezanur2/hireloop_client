"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Building2,
  Calendar,
  ChevronDown,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"]

const JOB_CATEGORIES = [
  "Engineering & Tech",
  "Design & Creative",
  "Product Management",
  "Marketing & Communications",
  "Sales & Business Dev",
  "Finance & Operations",
  "Customer Support",
]

const FREQUENCIES = ["per hour", "per month", "per year"]

export default function NewJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "HirePulse Network",
    category: "Engineering & Tech",
    jobType: "Full-time",
    isRemote: true,
    location: "New York, USA",
    deadline: "2025-05-30",
    minSalary: "25",
    maxSalary: "40",
    frequency: "per hour",
    responsibilities:
      "Showcase your commitment to delivering exceptional user interfaces and digital experiences. You will collaborate directly with systems designers and backend engineers to craft responsive, micro-interaction rich products.",
    qualifications:
      "• 3+ years of experience with React, TypeScript, and modern state architectures\n• Solid understanding of DOM performance and component-driven designs\n• Experience partnering closely with product teams and UI/UX designers",
  })

  const [submitted, setSubmitted] = useState(false)

  // Simple handler to update fields
  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Submit and collect all data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Collected New Job Data:", formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black/95 text-zinc-100 p-6 md:p-10 max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header with Breadcrumb and Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
          <div>
            <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
              <Link
                href="/dashboard/recruiter/jobs"
                className="hover:text-zinc-200 transition-colors"
              >
                Manage Jobs
              </Link>
              <span className="text-zinc-600">&gt;</span>
              <span className="text-indigo-400 font-medium">Create New Listing</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Post a New Job
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 mt-1">
              Fill in the position specifications to attract qualified talent across our network.
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="p-4 rounded-xl w-auto border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 flex items-center gap-3">
            <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />
            <div className="text-sm">
              <span className="font-semibold">Job post collected successfully!</span>
            </div>
          </div>
        )}

        {/* Section 1: Basic Information */}
        <div className="space-y-5 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-6">
          <div className="flex items-center gap-2 text-base font-semibold text-white">
            <span className="size-2 rounded-full bg-indigo-500 inline-block" />
            <span>1. Basic Information</span>
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-zinc-300">
              Job Title <span className="text-indigo-400">*</span>
            </Label>
            <Input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Frontend Developer"
              className="h-11 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Company Name & Job Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Company Name <span className="text-indigo-400">*</span>
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                <Input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  placeholder="HirePulse Network"
                  className="h-11 pl-10 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Job Category <span className="text-indigo-400">*</span>
              </Label>
              <div className="relative">
                <select
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-sm text-zinc-100 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer"
                >
                  {JOB_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-zinc-900 text-zinc-100">
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Type Segmented Group */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-zinc-300">
              Job Type <span className="text-indigo-400">*</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {JOB_TYPES.map((type) => {
                const isSelected = formData.jobType === type
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleChange("jobType", type)}
                    className={cn(
                      "h-11 rounded-xl text-sm font-medium transition-all cursor-pointer border flex items-center justify-center",
                      isSelected
                        ? "border-indigo-500/80 bg-zinc-800/90 text-white shadow-sm"
                        : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                    )}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Section 2: Location, Compensation & Timeline */}
        <div className="space-y-5 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-6">
          <div className="flex items-center gap-2 text-base font-semibold text-white">
            <span className="size-2 rounded-full bg-indigo-500 inline-block" />
            <span>2. Location, Compensation & Timeline</span>
          </div>

          {/* Remote Work Allowed Card Banner */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-zinc-800/70 flex items-center justify-center text-zinc-300 shrink-0">
                <Globe className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Remote Work Allowed (isRemote)
                </p>
                <p className="text-xs text-zinc-400">
                  Enable worldwide or distributed candidate applications
                </p>
              </div>
            </div>

            {/* Switch Toggle */}
            <button
              type="button"
              role="switch"
              aria-checked={formData.isRemote}
              onClick={() => handleChange("isRemote", !formData.isRemote)}
              className={cn(
                "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                formData.isRemote ? "bg-indigo-600" : "bg-zinc-700"
              )}
            >
              <span
                className={cn(
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
                  formData.isRemote ? "translate-x-5" : "translate-x-0"
                )}
              />
            </button>
          </div>

          {/* Job Location & Application Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-medium text-zinc-300">
                  Job Location
                </Label>
                <span className="text-[11px] text-zinc-500">Required</span>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                <Input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="New York, USA"
                  className="h-11 pl-10 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Application Deadline
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                <Input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleChange("deadline", e.target.value)}
                  className="h-11 pl-10 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Compensation: Min, Max & Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Min Salary / Rate
              </Label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 font-medium pointer-events-none">
                  $
                </span>
                <Input
                  type="number"
                  value={formData.minSalary}
                  onChange={(e) => handleChange("minSalary", e.target.value)}
                  placeholder="25"
                  className="h-11 pl-8 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Max Salary / Rate
              </Label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 font-medium pointer-events-none">
                  $
                </span>
                <Input
                  type="number"
                  value={formData.maxSalary}
                  onChange={(e) => handleChange("maxSalary", e.target.value)}
                  placeholder="40"
                  className="h-11 pl-8 rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium text-zinc-300">
                Frequency
              </Label>
              <div className="relative">
                <select
                  value={formData.frequency}
                  onChange={(e) => handleChange("frequency", e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-sm text-zinc-100 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer"
                >
                  {FREQUENCIES.map((freq) => (
                    <option key={freq} value={freq} className="bg-zinc-900 text-zinc-100">
                      {freq}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Responsibilities & Requirements */}
        <div className="space-y-5 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 p-6">
          <div className="flex items-center gap-2 text-base font-semibold text-white">
            <span className="size-2 rounded-full bg-indigo-500 inline-block" />
            <span>3. Responsibilities & Requirements</span>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-zinc-300">
              Key Responsibilities <span className="text-indigo-400">*</span>
            </Label>
            <Textarea
              required
              rows={4}
              value={formData.responsibilities}
              onChange={(e) => handleChange("responsibilities", e.target.value)}
              placeholder="Showcase your commitment to delivering exceptional user interfaces and digital experiences..."
              className="rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500 leading-relaxed"
            />
          </div>

          {/* Qualifications & Requirements */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-zinc-300">
              Qualifications & Requirements <span className="text-indigo-400">*</span>
            </Label>
            <Textarea
              required
              rows={5}
              value={formData.qualifications}
              onChange={(e) => handleChange("qualifications", e.target.value)}
              placeholder="• 3+ years of experience with React, TypeScript..."
              className="rounded-xl bg-zinc-900/70 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-500 leading-relaxed"
            />
          </div>
        </div>

        {/* Bottom Publish Button */}
        <div className="flex sm:justify-center pt-2 pb-10">
          <Button
            type="submit"
            className="h-11 px-6 max-sm:w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <span>Publish Job</span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
