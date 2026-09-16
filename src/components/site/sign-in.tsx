"use client"

import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { Field, FieldGroup, FieldSet } from "../ui/field"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { FaGoogle, FaGithub, FaArrowLeft } from "react-icons/fa"

const SignUpComponent = () => {
    return (
        <div className="w-full max-w-sm flex flex-col">
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "w-fit -ml-4 mb-2 text-muted-foreground hover:bg-transparent hover:text-foreground")}>
                <FaArrowLeft className="mr-2 h-4 w-4" />
                Back to home
            </Link>
            <FieldSet className="w-full">
                <h1 className="text-xl font-semibold tracking-tight leading-tight">Sign In to Invariant</h1>
                <FieldGroup>
                    <Field>
                        <Input placeholder="Email" />
                    </Field>
                    <Field>
                        <Input placeholder="Password" />
                    </Field>
                </FieldGroup>
                <Button>Sign in</Button>
                <Separator className="my-2" />
                <div className="flex flex-col gap-2">
                    <Button variant="outline" size={"lg"} className="flex items-center justify-center font-semibold gap-2">
                        <FaGoogle /> Continue with Google
                    </Button>
                    <Button variant="outline" size={"lg"} className="flex items-center justify-center font-semibold gap-2">
                        <FaGithub /> Continue with GitHub
                    </Button>
                </div>
                <div className="my-2">
                    <Button variant="link" className="text-center w-full">Don't have an account? <Link href="/sign-up">Sign up</Link></Button>
                </div>
            </FieldSet>
        </div>
    )
}

export default SignUpComponent