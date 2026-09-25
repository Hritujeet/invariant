"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUpIcon, FileTextIcon, FlaskConicalIcon, BookOpenIcon, ScrollTextIcon, UsersIcon } from "lucide-react"
import Link from "next/link"
import { blogData, simulationsData, derivationsData, devlogsData, usersData } from "@/app/admin/data"

const stats = [
  {
    label: "Simulations",
    icon: <FlaskConicalIcon className="size-3.5" />,
    data: simulationsData,
    href: "/admin/simulations",
    footnote: "Interactive physics demos",
    renderer: "Canvas / WebGL",
  },
  {
    label: "Derivations",
    icon: <BookOpenIcon className="size-3.5" />,
    data: derivationsData,
    href: "/admin/derivations",
    footnote: "Handwritten + typeset notes",
    renderer: "LaTeX / PDF",
  },
  {
    label: "Devlogs",
    icon: <ScrollTextIcon className="size-3.5" />,
    data: devlogsData,
    href: "/admin/devlogs",
    footnote: "Build diaries",
    renderer: "Markdown",
  },
  {
    label: "Users",
    icon: <UsersIcon className="size-3.5" />,
    data: usersData,
    href: "/admin/users",
    footnote: "Registered accounts",
    renderer: "Clerk",
  },
]

export function AdminSectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-5 dark:*:data-[slot=card]:bg-card">
      {stats.map(({ label, icon, data, href, footnote, renderer }) => {
        const published = data.filter((d) => d.status === "Done").length
        const drafts = data.filter((d) => d.status === "In Process").length
        return (
          <Link key={label} href={href} className="block group">
            <Card className="@container/card h-full transition-colors hover:border-primary/40">
              <CardHeader>
                <CardDescription className="flex items-center gap-2">
                  {icon} {label}
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  {data.length}
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {drafts > 0 ? `${drafts} in draft` : "All published"}
                </div>
                <div className="text-muted-foreground">{footnote} · {renderer}</div>
              </CardFooter>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
