import React from 'react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import Link from 'next/link'
import { Mail } from 'lucide-react'

const AboutPage = () => {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto flex flex-col gap-12">
                <ScrollReveal delay={0.1}>
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">About Me</h1>
                    <div className="w-16 h-1 bg-primary mt-6 rounded-full" />
                </ScrollReveal>

                <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                    <ScrollReveal delay={0.2}>
                        <p>
                            I'm Hritujeet Sharma. I write code to build software that scales, and I study physics to understand how the universe scales.
                        </p>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.3}>
                        <p>
                            My background is deeply rooted in computer science. I've built portals, architected full-stack systems, and explored the intricacies of modern web frameworks. But I found myself continuously drawn back to the fundamentals of reality — classical mechanics, electromagnetism, and the mathematical beauty that governs them.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <p>
                            This website serves as my digital notebook and sandbox. When I derive a concept on paper, I want to see it move. So, I write the equations, and then I write the simulation. No black-box physics engines — just math translated directly into interactive code.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.5}>
                    <div className="pt-8 border-t border-border/50">
                        <h2 className="text-2xl font-semibold font-heading mb-6 text-foreground">Connect with me</h2>
                        <div className="flex gap-4 flex-wrap">


                            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors">
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default AboutPage