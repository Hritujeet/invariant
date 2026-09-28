import { DataTable } from "@/components/data-table";
import AdminHeader from "@/components/site/admin-header";
import { AdminSectionCards } from "@/components/site/admin-section-cards";
import { buttonVariants } from "@/components/ui/button";
import {
    ArrowRightIcon,
    BookOpenIcon,
    PlusIcon,
    ScrollTextIcon,
    UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { derivationsData, devlogsData, usersData } from "./data";

const sections = [
  {
    label: "Derivations",
    icon: <BookOpenIcon className="size-4" />,
    data: derivationsData,
    href: "/admin/derivations",
    newHref: "/admin/derivations/new",
    btnLabel: "New Derivation",
  },
  {
    label: "Devlogs",
    icon: <ScrollTextIcon className="size-4" />,
    data: devlogsData,
    href: "/admin/devlogs",
    newHref: "/admin/devlogs/new",
    btnLabel: "New Devlog",
  },
  {
    label: "Users",
    icon: <UsersIcon className="size-4" />,
    data: usersData,
    href: "/admin/users",
    newHref: "/admin/users/invite",
    btnLabel: "Invite User",
  },
];

export default function AdminPage() {
  return (
    <>
      <AdminHeader title="Overview" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-8 py-4 md:py-6">
            {/* Stats cards */}
            <AdminSectionCards />

            {/* Per-category tables */}
            {sections.map(({ label, icon, data, href, newHref, btnLabel }) => (
              <section key={label} className="flex flex-col gap-3">
                <div className="flex items-center justify-between px-4 lg:px-6">
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                  >
                    {icon}
                    <h2 className="text-base font-semibold tracking-tight">
                      {label}
                    </h2>
                    <span className="text-xs text-muted-foreground font-normal">
                      ({data.length})
                    </span>
                    <ArrowRightIcon className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <Link
                      href={href}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      View all
                    </Link>
                    <Link
                      href={newHref}
                      className={buttonVariants({ size: "sm" })}
                    >
                      <PlusIcon />
                      {btnLabel}
                    </Link>
                  </div>
                </div>
                <DataTable data={data.slice(0, 5)} />
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
