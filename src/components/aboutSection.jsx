"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4 relative inline-block bg-background px-6">
            <span className="animate-pulse">&gt;</span> ABOUT_ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4 animate-pulse" />
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              bg-card/70 border border-green-500/20 backdrop-blur-sm rounded-lg 
              hover:border-green-400 transition-all duration-500 relative overflow-hidden group
            "
          >
            {/* Hover scan effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/12 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-900" />
            </div>

            <div className="p-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Player Stats */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-green-400">
                    PLAYER_STATS:
                  </h3>
                  <div className="space-y-3 font-mono text-green-300">
                    <div className="flex justify-between">
                      <span>NAME:</span>
                      <span className="text-green-400">Usman Khalid</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLASS:</span>
                      <span className="text-green-400">Software Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXPERIENCE:</span>
                      <span className="text-green-400">{"< 1 year"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span className="text-green-400">Karachi, Pakistan</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-green-400 animate-pulse">
                        SEEKING_OPPORTUNITIES
                      </span>
                    </div>
                  </div>
                </div>

                {/* Backstory */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-green-400">
                    BACKSTORY:
                  </h3>
                  <p className="text-green-300 font-mono leading-relaxed">
                    Software Engineer skilled in MERN and PERN stacks, with
                    hands-on experience building full-stack applications, REST
                    APIs, and interactive dashboards. Strong foundation in
                    SQL/NoSQL databases, authentication, and Agile workflows.
                  </p>
                  <p className="text-green-300 font-mono leading-relaxed mt-4">
                    When I'm not coding, you'll find me exploring new
                    technologies, watching cute cat videos, and enjoying
                    animated media.
                  </p>
                </div>
              </div>
            </div>
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
