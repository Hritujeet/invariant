import React from 'react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto flex flex-col gap-10">
                <ScrollReveal delay={0.1}>
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">Get in touch</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have a question about a derivation? Want to collaborate on a project? Or just want to say hi? I'd love to hear from you.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="bg-card/50 border border-border/50 rounded-xl p-6 sm:p-8">
                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={5}
                                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="What's on your mind?"
                                />
                            </div>
                            <Button type="button" className="mt-2 w-full sm:w-auto self-start gap-2">
                                <Send className="w-4 h-4" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/40 border border-border/40">
                        <div className="p-3 bg-background rounded-full border border-border/50">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Direct Email</p>
                            <p className="text-sm text-muted-foreground">hritujeet@invariant.dev</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default ContactPage