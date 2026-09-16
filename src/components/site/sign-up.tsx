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
                <h1 className="text-xl font-semibold tracking-tight leading-tight">Create an account</h1>
                <FieldGroup>
                    <Field>
                        <Input placeholder="Name" />
                    </Field>
                    <Field>
                        <Input placeholder="Email" />
                    </Field>
                    <Field>
                        <Input placeholder="Password" />
                    </Field>
                    <Field>
                        <Input placeholder="Confirm Password" />
                    </Field>
                </FieldGroup>
                <Button>Sign Up</Button>
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
                    <Button variant="link" className="text-center w-full">Already have an account? <Link href="/sign-in">Sign in</Link></Button>
                </div>
            </FieldSet>
        </div>
    )
}

export default SignUpComponent