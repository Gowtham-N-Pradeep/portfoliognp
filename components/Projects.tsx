"use client";

import { useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { Github, ExternalLink, X } from "lucide-react";

type ProjectCategory = "All" | "Web" | "Security" | "Academic";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ["All", "Web", "Security", "Academic"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedGroup
          preset="slide"
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 dark:text-rose-300">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my recent work and academic projects showcasing various technologies and skills
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-card text-muted-foreground hover:bg-card/80 border hover:shadow-md hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </AnimatedGroup>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="group relative p-6 rounded-2xl bg-card border hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-primary rounded-full border border-primary/20">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-primary rounded-full border border-primary/10 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-muted-foreground rounded-full border">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {project.title}
              </h2>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <div className="space-y-6 mb-8">
            {project.problem && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Problem</h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.outcome && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Outcome</h3>
                <p className="text-muted-foreground">{project.outcome}</p>
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
