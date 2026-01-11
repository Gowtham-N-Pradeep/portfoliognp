'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { useScroll } from 'motion/react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection2() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
                    <div className="relative w-full pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 md:pb-12">

                        <div className="mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 0.5,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-base font-medium border border-primary/20">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Available for opportunities
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-lg md:text-xl font-medium text-primary">
                                                Hello, I'm
                                            </p>
                                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                                                Gowtham N Pradeep
                                            </h1>
                                            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                BCA Student & Cybersecurity Enthusiast
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-xl">
                                        Passionate about full-stack development, cybersecurity, and creating secure,
                                        impactful digital solutions. Currently pursuing my BCA while building projects
                                        that make a difference.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-3 sm:pt-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                            <Link href="#projects">
                                                <span>View My Work</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 text-base sm:text-lg font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                            <Link href="/resume.pdf" target="_blank">
                                                <span>Download Resume</span>
                                            </Link>
                                        </Button>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-3 sm:pt-4">
                                        <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span>Currently learning advanced cybersecurity</span>
                                        </div>
                                        <div className="hidden sm:block w-px h-6 bg-border"></div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm sm:text-base text-muted-foreground">Based in</span>
                                            <span className="font-medium text-sm sm:text-base">Ernakulam, Kerala</span>
                                        </div>
                                    </div>
                                </AnimatedGroup>

                                <div className="relative">
                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 1,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="relative"
                                    >
                                        <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-xl">
                                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                                            <div className="relative bg-card rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden">
                                                <img
                                                    className="w-full h-auto object-cover"
                                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                                                    alt="Professional coding workspace"
                                                    width="800"
                                                    height="600"
                                                />
                                                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                                                    <div className="flex items-center gap-2 text-white text-sm">
                                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                        <span>Building the next big thing</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <Link
                            href="#about"
                            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                            <span className="text-sm mb-2">Scroll to explore</span>
                            <ChevronDown size={24} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    'group fixed z-20 w-full border-b transition-all duration-300',
                    scrolled
                        ? 'bg-background/90 backdrop-blur-lg shadow-xl border-border/50'
                        : 'bg-background/70 backdrop-blur-md border-transparent'
                )}>
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 animate-fade-in">
                                <Logo />
                            </Link>
                        </div>

                        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                            <ul className="flex gap-8 text-sm animate-slide-down">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary font-medium relative group transition-colors duration-200 scroll-smooth"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.querySelector(item.href);
                                                target?.scrollIntoView({ behavior: 'smooth' });
                                            }}>
                                            <span>{item.name}</span>
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-3 lg:hidden hover:bg-muted/50 rounded-lg transition-colors duration-200 animate-fade-in">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                        </div>
                    </div>
            </nav>
        </header>
    )
}



const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent', className)}>
            GNP
        </div>
    )
}