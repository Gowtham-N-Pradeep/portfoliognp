"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const categories = [
  "Programming Languages",
  "Cybersecurity",
  "Tools & Frameworks",
  "Soft Skills"
] as const;

export default function Skills() {
  const skillsByCategory = categories.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedGroup
          preset="slide"
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Skills & Expertise
            </div>
                <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300">
              Skills & Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to build modern, secure applications
            </p>
          </div>

          <div className="space-y-16">
            {skillsByCategory.map(({ category, items }) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-blue-50/30 dark:to-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-xl">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 group-hover:w-full transition-all duration-700"></div>
      <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

      {/* Tech-style corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-500/20 group-hover:border-t-blue-500/40 transition-colors duration-500"></div>

      <div className="relative p-6">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-blue-300/30 dark:border-blue-600/30">
              <SkillIcon name={skill.name} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                {skill.name}
              </h4>
              {skill.proficiency && (
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                  {skill.proficiency}% Proficiency
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
          {skill.description}
        </p>

        {/* Progress visualization */}
        {skill.proficiency && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">Skill Level</span>
              <span className="font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 h-2 rounded-full transition-all duration-1000 ease-out relative group-hover:shadow-lg group-hover:shadow-blue-500/30"
                style={{ width: `${skill.proficiency}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Floating tech particles */}
        <div className="absolute bottom-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-200"></div>
          <div className="w-1 h-1 bg-blue-700 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}

// Skill Icon Component
function SkillIcon({ name }: { name: string }) {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'c':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">
            C
          </div>
        );
      case 'c++':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            C++
          </div>
        );
      case 'java':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            ☕
          </div>
        );
      case 'python':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🐍
          </div>
        );
      case 'html':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            &lt;/&gt;
          </div>
        );
      case 'css':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            #CSS
          </div>
        );
      case 'mysql':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🗄️
          </div>
        );
      case 'windows':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            ⊞
          </div>
        );
      case 'cybersecurity fundamentals':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🛡️
          </div>
        );
      case 'computer fundamentals':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            💻
          </div>
        );
      case 'data structures':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            📊
          </div>
        );
      case 'quick learner':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🚀
          </div>
        );
      case 'logical thinking':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🧠
          </div>
        );
      case 'problem solving':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            🧩
          </div>
        );
      case 'self-motivated':
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xs">
            💪
          </div>
        );
      default:
        return (
          <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">
            {name.charAt(0)}
          </div>
        );
    }
  };

  return getIcon();
}
