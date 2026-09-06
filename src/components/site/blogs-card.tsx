import img from "@/images/physics-handwritten-bg-1.jpeg"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

export function BlogsCard() {
  return (
    <div className="p-4 w-full h-full">
      <div className="h-full border border-border bg-card rounded-xl overflow-hidden transition-all hover:border-primary/20 duration-300 hover:-translate-y-1">
        <Image width={720} height={400} className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-mono text-muted-foreground mb-1 uppercase">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-foreground mb-3">The Catalyzer</h1>
          <p className="leading-relaxed mb-3 text-muted-foreground text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <div className="flex items-center flex-wrap">
            <Link className={buttonVariants({ variant: "default" })} href={"/blog/post1"}>Read More</Link>
            <span className="text-muted-foreground mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 py-1 border-r border-border">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsCard

