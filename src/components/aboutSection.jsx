export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-primary">
          {"> ABOUT_ME"}
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Replacing Card with a simple div */}
          <div className="pixel-border retro-shadow bg-card rounded-2xl shadow-md">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Player Stats */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-accent">
                    PLAYER_STATS:
                  </h3>
                  <div className="space-y-3 font-mono">
                    <div className="flex justify-between">
                      <span className="text">NAME:</span>
                      <span className="text-primary">Usman Khalid</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLASS:</span>
                      <span className="text-primary">Software Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXPERIENCE</span>
                      <span className="text-primary">{"< 1 year"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span className="text-primary">Karachi, Pakistan</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-accent pixel-pulse">
                        SEEKING_OPPORTUNITIES
                      </span>
                    </div>
                  </div>
                </div>

                {/* Backstory */}
                <div>
                  <h3 className="text-2xl font-bold font-mono mb-4 text-accent">
                    BACKSTORY:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Software Engineer skilled in MERN and PERN stacks, with hands-on experience building full-stack applications, 
                    REST APIs, and interactive dashboards. Strong foundation in SQL/NoSQL databases, authentication, and Agile workflows.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    When I'm not coding, you'll find me exploring different different technologies, looking at cute vidoes of cats 
                    and enjoying animated media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}