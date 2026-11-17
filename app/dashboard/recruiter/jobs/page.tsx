"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Plus,
  Search,
  Code2,
  PenTool,
  Server,
  Megaphone,
  ShieldCheck,
  Globe,
  MapPin,
  Users,
  Eye,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface Job {
  id: string
  title: string
  category: string
  companyName: string
  location: string
  isRemote: boolean
  jobType: string
  compensation: string
  applicants: number
  status: "Active" | "Expired"
  deadline: string
  postedAt: string
  iconType: "code" | "design" | "infra" | "marketing" | "quality"
}

const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    category: "Engineering",
    companyName: "HirePulse Network",
    location: "Remote (New York, USA)",
    isRemote: true,
    jobType: "Full-time",
    compensation: "$25 – $40 / hr",
    applicants: 34,
    status: "Active",
    deadline: "May 30, 2025",
    postedAt: "Posted 4d ago",
    iconType: "code",
  },
  {
    id: "2",
    title: "Senior Product Designer",
    category: "Design",
    companyName: "HirePulse Labs",
    location: "London, UK (Hybrid)",
    isRemote: false,
    jobType: "Full-time",
    compensation: "$90k – $115k / yr",
    applicants: 19,
    status: "Active",
    deadline: "Jun 14, 2025",
    postedAt: "Posted 1w ago",
    iconType: "design",
  },
  {
    id: "3",
    title: "DevOps Specialist",
    category: "Infrastructure",
    companyName: "HirePulse Platform",
    location: "Berlin, Germany",
    isRemote: false,
    jobType: "Full-time",
    compensation: "$95k – $120k / yr",
    applicants: 12,
    status: "Active",
    deadline: "Jun 30, 2025",
    postedAt: "Posted 2w ago",
    iconType: "infra",
  },
  {
    id: "4",
    title: "Product Marketing Lead",
    category: "Marketing",
    companyName: "HirePulse Network",
    location: "Remote (EU/US)",
    isRemote: true,
    jobType: "Full-time",
    compensation: "$80k – $105k / yr",
    applicants: 27,
    status: "Active",
    deadline: "Jul 15, 2025",
    postedAt: "Posted 5d ago",
    iconType: "marketing",
  },
  {
    id: "5",
    title: "QA Automation Engineer",
    category: "Quality",
    companyName: "HirePulse Platform",
    location: "Dublin, Ireland (Hybrid)",
    isRemote: false,
    jobType: "Part-time",
    compensation: "$35 – $50 / hr",
    applicants: 8,
    status: "Expired",
    deadline: "May 01, 2025",
    postedAt: "Closed",
    iconType: "quality",
  },
]

export default function ManageJobsPage() {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS)
  const [search, setSearch] = useState("")

  const handleDelete = (id: string) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.companyName.toLowerCase().includes(search.toLowerCase()) ||
    job.category.toLowerCase().includes(search.toLowerCase())
  )

  const renderCategoryIcon = (iconType: Job["iconType"]) => {
    switch (iconType) {
      case "code":
        return (
          <div className="size-8 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-400 flex items-center justify-center shrink-0">
            <Code2 className="size-4" />
          </div>
        )
      case "design":
        return (
          <div className="size-8 rounded-lg bg-amber-950/40 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0">
            <PenTool className="size-4" />
          </div>
        )
      case "infra":
        return (
          <div className="size-8 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0">
            <Server className="size-4" />
          </div>
        )
      case "marketing":
        return (
          <div className="size-8 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-400 flex items-center justify-center shrink-0">
            <Megaphone className="size-4" />
          </div>
        )
      case "quality":
        return (
          <div className="size-8 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="size-4" />
          </div>
        )
    }
  }

  const getCategoryColor = (iconType: Job["iconType"]) => {
    switch (iconType) {
      case "code":
        return "text-blue-400"
      case "design":
        return "text-amber-400"
      case "infra":
        return "text-cyan-400"
      case "marketing":
        return "text-rose-400"
      case "quality":
        return "text-indigo-400"
    }
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8 space-y-6 text-zinc-100">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <nav className="text-xs text-zinc-400 mb-1">
            <span>Manage Jobs</span> &gt;{" "}
            <span className="text-indigo-400 font-medium">Job Listings &amp; Postings</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Manage Job Posts
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Review live listings, monitor applicants, and update job details across your organization.
          </p>
        </div>

        <Link href="/dashboard/recruiter/jobs/new">
          <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white gap-2 h-10 px-5 rounded-xl font-medium shadow-md shadow-indigo-600/25">
            <Plus className="size-4 stroke-[2.5]" />
            New Job Post
          </Button>
        </Link>
      </div>

      {/* Search bar and counter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
          <Input
            placeholder="Search jobs by title, company, dept..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 rounded-xl"
          />
        </div>
        <p className="text-xs text-zinc-400 self-start sm:self-auto">
          Total Listings: <span className="text-white font-semibold">{filteredJobs.length}</span>
        </p>
      </div>

      {/* Empty state */}
      {filteredJobs.length === 0 && (
        <div className="border border-zinc-800/80 rounded-2xl p-12 text-center text-zinc-500 bg-zinc-950/70">
          No job posts found matching your search.
        </div>
      )}

      {/* 1. Responsive Card Grid (active on screens < xl, e.g. Mobile, Tablet, and narrower Laptop viewports) */}
      {filteredJobs.length > 0 && (
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border border-zinc-800/80 rounded-xl p-4 bg-zinc-950/70 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  {renderCategoryIcon(job.iconType)}
                  <div>
                    <h3 className="font-semibold text-white text-sm">{job.title}</h3>
                    <p className={`text-xs font-medium ${getCategoryColor(job.iconType)}`}>
                      {job.category}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    job.status === "Active"
                      ? "gap-1 bg-emerald-950/40 text-emerald-400 border-emerald-900 font-normal text-xs px-2 py-0.5"
                      : "gap-1 bg-zinc-900 text-zinc-400 border-zinc-800 font-normal text-xs px-2 py-0.5"
                  }
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      job.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                    }`}
                  />
                  {job.status}
                </Badge>
              </div>

              <div className="text-xs text-zinc-400 space-y-1.5 border-t border-zinc-800/60 pt-2.5">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <span className="font-medium text-zinc-200">{job.companyName}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    {job.isRemote ? (
                      <Globe className="size-3 text-zinc-400 shrink-0" />
                    ) : (
                      <MapPin className="size-3 text-zinc-500 shrink-0" />
                    )}
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-medium text-zinc-100">{job.compensation}</span>
                  <Badge variant="outline" className="text-zinc-400 border-zinc-800 bg-zinc-900 text-[11px]">
                    {job.jobType}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-zinc-400 pt-0.5 text-[11px]">
                  <span className="text-indigo-400 font-medium">{job.applicants} Candidates</span>
                  <span>{job.deadline} ({job.postedAt})</span>
                </div>
              </div>

              {/* Action icon buttons styled as badges */}
              <div className="flex items-center justify-end gap-1.5 pt-2 border-t border-zinc-800/60">
                <Link href="/dashboard/recruiter/jobs/new">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-7 rounded-lg border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-zinc-700 transition-colors"
                    title="View Job"
                  >
                    <Eye className="size-3.5" />
                  </Button>
                </Link>
                <Link href="/dashboard/recruiter/jobs/new">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-7 rounded-lg border-indigo-900/50 bg-indigo-950/25 text-indigo-300 hover:text-white hover:bg-indigo-950/60 hover:border-indigo-800 transition-colors"
                    title="Edit Job"
                  >
                    <Pencil className="size-3.5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(job.id)}
                  className="size-7 rounded-lg border-red-900/50 bg-red-950/25 text-red-400 hover:text-red-300 hover:bg-red-950/60 hover:border-red-800 transition-colors"
                  title="Delete Job"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Desktop Table (screens >= xl, polished compact typography and spacing) */}
      {filteredJobs.length > 0 && (
        <div className="hidden xl:block w-full border border-zinc-800/80 rounded-2xl overflow-hidden bg-zinc-950/70 shadow-2xl">
          <div className="w-full overflow-x-auto">
            <Table className="w-full">
              <TableHeader className="bg-zinc-900/60 border-b border-zinc-800">
                <TableRow className="border-b border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-3.5">
                    JOB TITLE &amp; DEPT
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-3">
                    COMPANY &amp; LOCATION
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-2.5">
                    TYPE
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-3">
                    COMPENSATION
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-3">
                    APPLICANTS
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-2.5">
                    STATUS
                  </TableHead>
                  <TableHead className="text-zinc-400 font-semibold text-xs py-3.5 px-3">
                    DEADLINE
                  </TableHead>
                  <TableHead className="text-right text-zinc-400 font-semibold text-xs py-3.5 px-3.5">
                    ACTIONS
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-zinc-800/60">
                {filteredJobs.map((job) => (
                  <TableRow
                    key={job.id}
                    className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors"
                  >
                    {/* Job Title & Dept with Icon */}
                    <TableCell className="py-3 px-3.5">
                      <div className="flex items-center gap-2.5">
                        {renderCategoryIcon(job.iconType)}
                        <div className="min-w-0">
                          <div className="font-semibold text-white text-sm hover:text-indigo-300 transition-colors cursor-pointer truncate">
                            {job.title}
                          </div>
                          <div className={`text-xs font-medium ${getCategoryColor(job.iconType)}`}>
                            {job.category}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    {/* Company & Location */}
                    <TableCell className="py-3 px-3 whitespace-nowrap">
                      <div className="text-xs text-zinc-200 font-medium">
                        {job.companyName}
                      </div>
                      <div className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                        {job.isRemote ? (
                          <Globe className="size-3 text-zinc-400 shrink-0" />
                        ) : (
                          <MapPin className="size-3 text-zinc-500 shrink-0" />
                        )}
                        <span>{job.location}</span>
                      </div>
                    </TableCell>

                    {/* Type Badge */}
                    <TableCell className="py-3 px-2.5">
                      <Badge
                        variant="outline"
                        className="bg-zinc-900 text-zinc-300 border-zinc-700 font-normal text-xs px-2 py-0.5"
                      >
                        {job.jobType}
                      </Badge>
                    </TableCell>

                    {/* Compensation */}
                    <TableCell className="py-3 px-3 text-xs font-semibold text-zinc-100 whitespace-nowrap">
                      {job.compensation}
                    </TableCell>

                    {/* Applicants */}
                    <TableCell className="py-3 px-3 whitespace-nowrap">
                      <span className="text-xs font-medium text-indigo-400 flex items-center gap-1.5">
                        <Users className="size-3.5" />
                        {job.applicants} Candidates
                      </span>
                    </TableCell>

                    {/* Status with Dot */}
                    <TableCell className="py-3 px-2.5">
                      <Badge
                        variant="outline"
                        className={
                          job.status === "Active"
                            ? "gap-1.5 bg-emerald-950/40 text-emerald-400 border-emerald-900/50 font-medium text-xs px-2 py-0.5"
                            : "gap-1.5 bg-zinc-900 text-zinc-400 border-zinc-800 font-medium text-xs px-2 py-0.5"
                        }
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            job.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                          }`}
                        />
                        {job.status}
                      </Badge>
                    </TableCell>

                    {/* Deadline & Posted Age */}
                    <TableCell className="py-3 px-3 whitespace-nowrap">
                      <div className="text-xs text-zinc-200 font-medium">{job.deadline}</div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">{job.postedAt}</div>
                    </TableCell>

                    {/* Actions: Uniform badge-styled icon buttons */}
                    <TableCell className="py-3 px-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link href="/dashboard/recruiter/jobs/new">
                          <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-lg border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-zinc-700 transition-colors"
                            title="View"
                          >
                            <Eye className="size-3.5" />
                          </Button>
                        </Link>
                        <Link href="/dashboard/recruiter/jobs/new">
                          <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-lg border-indigo-900/50 bg-indigo-950/25 text-indigo-300 hover:text-white hover:bg-indigo-950/60 hover:border-indigo-800 transition-colors"
                            title="Edit"
                          >
                            <Pencil className="size-3.5" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(job.id)}
                          className="size-7 rounded-lg border-red-900/50 bg-red-950/25 text-red-400 hover:text-red-300 hover:bg-red-950/60 hover:border-red-800 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
                          title="More options"
                        >
                          <MoreVertical className="size-3.5" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  )
}
