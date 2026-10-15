"use client"

import * as React from "react"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  BookOpenIcon,
  ExternalLinkIcon,
} from "lucide-react"

const navMain = [
  { title: "Overview",     url: "/admin",             icon: <LayoutDashboardIcon /> },
  { title: "Derivations",  url: "/admin/derivations",  icon: <BookOpenIcon />       },
]

const navSecondary = [
  { title: "Back to Site", url: "/", icon: <ExternalLinkIcon /> },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const previewUser = {
    name: "Admin",
    email: "Local preview",
    avatar: "",
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/admin" />}
            >
              <span className="flex size-5 items-center justify-center rounded-sm bg-primary text-primary-foreground text-xs font-bold select-none">
                ∂
              </span>
              <span className="text-base font-semibold tracking-tight">invariant</span>
              <span className="ml-1 text-xs font-normal text-muted-foreground">admin</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={previewUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
