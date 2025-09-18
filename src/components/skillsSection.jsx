"use client"

import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Javascript", level: 80 },
      { name: "Python", level: 70 },
      { name: "C++", level: 65 },
      { name: "Dart", level: 65 },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "Reactjs", level: 80 },
      { name: "Next.js", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "ShadCN UI", level: 80 },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const [animatedLevels, setAnimatedLevels] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate category visibility
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCategories((prev) => [...prev, index])
            }, index * 200)
          })

          // Animate each skill gradually
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedLevels((prev) => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level,
                }))
              }, categoryIndex * 300 + skillIndex * 150)
            })
          })
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4 relative inline-block bg-background px-6">
            <span className="animate-pulse">&gt;</span> SKILL_TREE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4 animate-pulse" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`
                bg-card/70 border border-green-500/20 backdrop-blur-sm rounded-lg
                hover:border-green-400 hover:shadow-lg transition-all duration-500
                transform hover:scale-105 hover:-translate-y-2
                ${visibleCategories.includes(categoryIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                relative overflow-hidden group
              `}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Scanning line effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/12 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-900" />
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-300/40 group-hover:border-green-400 transition-colors" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-300/40 group-hover:border-green-400 transition-colors" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-300/40 group-hover:border-green-400 transition-colors" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-300/40 group-hover:border-green-400 transition-colors" />

              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Category Title */}
                <h3 className="font-mono text-xl font-bold text-green-400 text-center mb-6 group-hover:drop-shadow-lg transition-all">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const animatedLevel =
                      animatedLevels[`${categoryIndex}-${skillIndex}`] || 0

                    return (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="font-mono text-sm text-green-300">{skill.name}</span>
                          <span className="font-mono text-sm text-green-400">
                            {animatedLevel}%
                          </span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="w-full bg-green-950/30 border border-green-500/20 h-3 relative overflow-hidden rounded">
                          {/* Progress Bar Fill */}
                          <div
                            className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-300 transition-all duration-1000 ease-out relative"
                            style={{ width: `${animatedLevel}%` }}
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-green-400/30 animate-pulse" />
                            
                            {/* Moving highlight */}
                            <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" 
                                 style={{ 
                                   left: `${Math.max(0, animatedLevel - 20)}%`,
                                   animationDelay: `${skillIndex * 200}ms`
                                 }} 
                            />
                          </div>
                        </div>

                        {/* Skill level indicator dots */}
                        <div className="flex justify-end mt-1 space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                animatedLevel > (i + 1) * 25 
                                  ? 'bg-green-400 animate-pulse' 
                                  : 'bg-green-500/20'
                              }`}
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Floating code fragment on hover */}
                <div className="absolute -top-2 -right-2 text-green-400/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {`{skills_${categoryIndex}}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-green-300/70 font-mono text-sm">
            <span className="animate-pulse">[</span>
            <span>TECHNICAL_PROFICIENCY</span>
            <span className="animate-pulse">]</span>
          </div>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  )
}