import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <p className="text-muted-foreground">
        Authentication is not configured yet.
      </p>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Back to site
      </Link>
    </main>
  )
}