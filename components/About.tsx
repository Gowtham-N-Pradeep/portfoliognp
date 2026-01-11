"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { GraduationCap, Target, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Pursuing BCA at De Paul Institute of Science and Technology"
  },
  {
    icon: Target,
    title: "Core Interests",
    description: "Cybersecurity, Software Development, Web Technologies"
  },
  {
    icon: Briefcase,
    title: "Career Focus",
    description: "Seeking opportunities to enhance technical skills"
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedGroup
          preset="slide"
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-2xl font-semibold text-foreground max-w-3xl mx-auto">
              Passionate BCA Student & Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused on cybersecurity and software development, building secure and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 flex items-center justify-center text-7xl font-bold border-4 border-primary/20 shadow-2xl">
                  <span className="bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent">
                    GNP
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm Gowtham N Pradeep, a motivated BCA student with a strong interest in computer applications
                  and cybersecurity. My journey in technology is driven by curiosity and a passion
                  for learning about emerging technologies, software development, and security practices.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm constantly working on improving my programming skills in C, C++, Java, Python,
                  and web technologies. I'm a quick learner with strong logical thinking and
                  problem-solving skills, always eager to take on new challenges.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Quick Learner", "Team Player", "Security Enthusiast"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-card/80 border border-border/50 hover:border-emerald-500/30 transition-all duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-colors duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon with animated background */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl scale-150 group-hover:scale-125 transition-transform duration-700"></div>
                      <div className="relative p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 group-hover:border-emerald-300 dark:group-hover:border-emerald-700 transition-colors duration-500">
                        <highlight.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-500">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-500">
                      {highlight.description}
                    </p>

                    {/* Animated bottom accent */}
                    <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700 mx-auto"></div>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
