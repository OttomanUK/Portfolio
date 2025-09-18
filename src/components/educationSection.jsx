"use client"

import { useState, useEffect } from "react"

export function EducationSection() {
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      education.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const education = [
    {
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "NED University of Engineering and Technology",
      period: "2019-2024",
      gpa: "3.5/4.0",
      subjects: [
        "Programming Fundamentals",
        "Object Oriented Programming",
        "Web Engineering",
        "Database Management Systems",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Design Patterns"
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4 relative inline-block bg-background px-6">
            <span className="animate-pulse">&gt;</span> EDUCATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4 animate-pulse" />
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical glowing line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-400 shadow-[0_0_10px_#22c55e] hidden md:block animate-pulse"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Animated dot marker */}
                <div className="absolute left-2 top-6 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_#22c55e] hidden md:block animate-pulse" 
                     style={{ animationDelay: `${index * 200}ms` }}></div>

                {/* Education Card */}
                <div
                  className={`
                    bg-card/70 border border-green-500/20 backdrop-blur-sm rounded-lg
                    hover:border-green-400 hover:shadow-lg transition-all duration-500
                    transform hover:scale-105 hover:-translate-y-2 md:ml-12
                    ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    relative overflow-hidden group
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-mono font-bold text-green-400 mb-2 md:mb-0 group-hover:drop-shadow-lg transition-all">
                        {edu.degree}
                      </h3>
                      <span className="text-green-300 font-mono text-sm border border-green-500/30 bg-green-400/6 px-3 py-1 rounded animate-pulse">
                        {edu.period}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-green-300 font-mono text-lg mb-2">{edu.institution}</p>
                      <p className="text-green-300 font-mono text-sm">
                        GPA: <span className="text-green-400 font-bold">{edu.gpa}</span>
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-green-400 font-mono text-sm font-bold mb-3 flex items-center">
                        <span className="mr-2">[</span>
                        ACHIEVEMENTS
                        <span className="ml-2">]</span>
                      </h4>
                      <ul className="space-y-2">
                        {edu.subjects.map((subject, subIndex) => (
                          <li key={subIndex} className="text-green-300 font-mono text-sm flex items-center group/item">
                            <span className="text-green-400 mr-3 group-hover/item:animate-pulse">›</span>
                            <span className="group-hover/item:text-green-400 transition-colors duration-200">
                              {subject}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status indicators */}
                    <div className="flex justify-end mt-4 space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-green-400/50 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating code fragment */}
                  <div className="absolute -top-2 -right-2 text-green-400/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {`{edu_${index}}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Summary */}


        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-green-300/70 font-mono text-sm">
            <span className="animate-pulse">[</span>
            <span>ACADEMIC_RECORDS</span>
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