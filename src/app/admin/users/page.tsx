import AdminHeader from "@/components/site/admin-header"
import { DataTable } from "@/components/data-table"
import { usersData } from "@/app/admin/data"

export default function UsersPage() {
  return (
    <>
      <AdminHeader title="Users" breadcrumb="Admin" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="flex items-center justify-between px-4 lg:px-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Users</h2>
                <p className="text-sm text-muted-foreground">
                  {usersData.length} total · {usersData.filter(d => d.status === "Active").length} active
                </p>
              </div>
            </div>
            <DataTable data={usersData} />
          </div>
        </div>
      </div>
    </>
  )
}
