"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { education, certifications, experiences, achievements } from "@/data/resume";
import { Download, GraduationCap, Award, Briefcase, Trophy } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedGroup
          preset="slide"
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Professional Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-300">
              Resume & Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My educational background, professional experience, and key achievements
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl">
                  <GraduationCap className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    Education
                  </h3>
                  <p className="text-muted-foreground">Academic journey</p>
                </div>
              </div>

              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="group relative p-8 rounded-2xl bg-card border hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground text-sm mb-3">
                          {edu.location} • {edu.period}
                        </p>
                        {edu.description && (
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience & Achievements */}
            <div className="space-y-8">
              {/* Experience */}
              {experiences.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl">
                      <Briefcase className="text-green-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
                        Experience
                      </h3>
                      <p className="text-muted-foreground">Professional background</p>
                    </div>
                  </div>

                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="group relative p-8 rounded-2xl bg-card border hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-green-600 font-semibold text-lg">{exp.company}</p>
                          </div>
                          <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 rounded-full border border-green-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 font-medium">
                          {exp.location} • {exp.period}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl">
                    <Trophy className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      Achievements
                    </h3>
                    <p className="text-muted-foreground">Key accomplishments</p>
                  </div>
                </div>

                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="group relative p-6 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Trophy className="text-orange-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold group-hover:text-orange-600 transition-colors">
                            {achievement.title}
                          </h4>
                          {achievement.category && (
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-700 rounded-full">
                              {achievement.category}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-2 leading-relaxed">
                          {achievement.description}
                        </p>
                        {achievement.date && (
                          <p className="text-muted-foreground text-sm font-medium">
                            {achievement.date}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              {certifications.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl">
                      <Award className="text-purple-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        Certifications
                      </h3>
                      <p className="text-muted-foreground">Professional credentials</p>
                    </div>
                  </div>

                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="group relative p-6 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover:scale-105"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="text-purple-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                            >
                              <span>View Credential</span>
                              <span className="text-xs">→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
