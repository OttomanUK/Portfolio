"use client"

import { useState, useEffect } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 px-4 relative bg-[#000900]">
      <div className="max-w-6xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
  
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#00ff41] mb-4 relative inline-block  px-6">
            ABOUT_ME
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`
              bg-card/70 border border-green-500/20 backdrop-blur-sm rounded-lg
              hover:border-green-400 hover:shadow-lg transition-all duration-500
              transform hover:scale-105 hover:-translate-y-2
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              relative overflow-hidden group
            `}
            style={{ transitionDelay: "100ms" }}
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

            <div className="p-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Player Stats */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-[#00ff41] group-hover:drop-shadow-lg transition-all">
                    PLAYER_STATS:
                  </h3>
                  <div className="space-y-3 font-mono text-[#00ff41]">
                    <div className="flex justify-between">
                      <span>NAME:</span>
                      <span className="text-green-300">Usman Khalid</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLASS:</span>
                      <span className="text-green-300">Software Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXPERIENCE:</span>
                      <span className="text-green-300">{"< 1 year"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span className="text-green-300">Karachi, Pakistan</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-green-300 animate-pulse">
                        SEEKING_OPPORTUNITIES
                      </span>
                    </div>
                  </div>
                </div>

                {/* Backstory */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-[#00ff41] group-hover:drop-shadow-lg transition-all">
                    BACKSTORY:
                  </h3>
                  <p className="text-[#00ff41] font-mono leading-relaxed">
                    Software Engineer skilled in MERN and PERN stacks, with
                    hands-on experience building full-stack applications, REST
                    APIs, and interactive dashboards. Strong foundation in
                    SQL/NoSQL databases, authentication, and Agile workflows.
                  </p>
                  <p className="text-[#00ff41] font-mono leading-relaxed mt-4">
                    When I'm not coding, you'll find me exploring new
                    technologies, watching cute cat videos, and enjoying
                    animated media.
                  </p>
                </div>
              </div>

              {/* Status indicators */}
              <div className="flex justify-end mt-6 space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-green-400/50 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating code fragment on hover */}
            <div className="absolute -top-2 -right-2 text-green-400/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {`{about_me}`}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-green-300/70 font-mono text-sm">
            <span className="animate-pulse">[</span>
            <span>PLAYER_PROFILE</span>
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