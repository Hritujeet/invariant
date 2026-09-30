"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { schema } from "./data-table"

export function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
  const isMobile = useIsMobile()
  const title = item.title || item.name || "Untitled"

  return (
    <Drawer swipeDirection={isMobile ? "down" : "right"}>
      <DrawerTrigger
        render={
          <Button
            variant="link"
            className="w-fit px-0 text-left text-foreground"
          />
        }
      >
        {title}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1 my-4">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm pb-2">
          <form className="flex flex-col gap-4">

            {/* Generic Title/Name */}
            {item.name !== undefined ? (
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={item.name} />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={item.title} />
              </div>
            )}

            {/* Common Status */}
            {item.status !== undefined && (
              <div className="flex flex-col gap-3">
                <Label htmlFor="status">Status</Label>
                <Select
                  defaultValue={item.status}
                  items={[
                    { label: "Published", value: "Published" },
                    { label: "Draft", value: "Draft" },
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ]}
                >
                  <SelectTrigger id="status" className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Published">Published</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Blog specific */}
            {item.type === "Blog" && (
              <>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="img">Cover Image Path</Label>
                  <Input id="img" defaultValue={item.img} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="content">Content Excerpt</Label>
                  <Textarea id="content" defaultValue={item.content} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="views">Views</Label>
                  <Input id="views" type="number" defaultValue={item.views} />
                </div>
              </>
            )}

            {/* Derivations specific */}
            {item.type === "Derivation" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" defaultValue={item.slug} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="pdf">PDF Path</Label>
                    <Input id="pdf" defaultValue={item.pdf} />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="expression">Math Expression (LaTeX)</Label>
                  <Input id="expression" defaultValue={item.expression} className="font-mono text-xs" />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue={item.description} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="content">Content Notes</Label>
                  <Textarea id="content" defaultValue={item.content} />
                </div>
              </>
            )}


            {/* Simulations specific */}
            {item.type === "Simulation" && (
              <>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="link">URL Path</Label>
                  <Input id="link" defaultValue={item.link} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="image">Thumbnail Image</Label>
                  <Input id="image" defaultValue={item.image} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue={item.description} />
                </div>
              </>
            )}

            {/* Users specific */}
            {item.type === "User" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={item.email} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select
                      defaultValue={item.role}
                      items={[
                        { label: "Admin", value: "Admin" },
                        { label: "Reader", value: "Reader" },
                      ]}
                    >
                      <SelectTrigger id="role" className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Reader">Reader</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="joinedAt">Joined At</Label>
                  <Input id="joinedAt" defaultValue={item.joinedAt} />
                </div>
              </>
            )}

            {/* Common Timestamps */}
            {item.createdAt !== undefined && (
              <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mt-2">
                <div>Created: {item.createdAt}</div>
                <div>Updated: {item.updatedAt}</div>
              </div>
            )}

          </form>
        </div>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
