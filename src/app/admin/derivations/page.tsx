import AdminHeader from "@/components/site/admin-header"
import { DataTable } from "@/components/data-table"
import { derivationsData } from "@/app/admin/data"
import { PlusIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function DerivationsPage() {
  return (
    <>
      <AdminHeader title="Derivations" breadcrumb="Content" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="flex items-center justify-between px-4 lg:px-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Derivations</h2>
                <p className="text-sm text-muted-foreground">
                  {derivationsData.length} total · {derivationsData.filter(d => d.status === "Published").length} published
                </p>
              </div>
              <Link href="/admin/derivations/new" className={buttonVariants({ size: "sm" })}>
                <PlusIcon />
                New Derivation
              </Link>
            </div>
            <DataTable data={derivationsData} />
          </div>
        </div>
      </div>
    </>
  )
}
