"use client"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="hover:bg-transparent aria-expanded:bg-transparent">
          <UserButton
            showName
            appearance={{
              elements: {
                rootBox: "w-full",
                userButtonTrigger: "w-full flex-row-reverse justify-between hover:bg-muted rounded-lg transition-colors p-1.5",
                userButtonOuterIdentifier: "text-sm font-medium text-foreground mr-auto ml-0",
              }
            }}
          />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
