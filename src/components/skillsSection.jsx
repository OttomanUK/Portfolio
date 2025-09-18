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
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
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
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-primary">
          {"> SKILL_TREE"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="pixel-border retro-shadow bg-card rounded-2xl p-6"
            >
              {/* Category Title */}
              <h3 className="font-mono text-xl text-accent text-center mb-6">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="font-mono text-sm text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted pixel-border h-4 relative overflow-hidden">
                      <div
                        className="h-full bg-primary pixel-glow transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
