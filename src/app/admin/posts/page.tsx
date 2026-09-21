import AdminHeader from "@/components/site/admin-header"
import { DataTable } from "@/components/data-table"
import { blogData } from "@/app/admin/data"
import { PlusIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function PostsPage() {
  return (
    <>
      <AdminHeader title="Blog Posts" breadcrumb="Content" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="flex items-center justify-between px-4 lg:px-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Blog Posts</h2>
                <p className="text-sm text-muted-foreground">
                  {blogData.length} total · {blogData.filter(d => d.status === "Published").length} published
                </p>
              </div>
              <Link href="/admin/posts/new" className={buttonVariants({ size: "sm" })}>
                <PlusIcon />
                New Post
              </Link>
            </div>
            <DataTable data={blogData} />
          </div>
        </div>
      </div>
    </>
  )
}
