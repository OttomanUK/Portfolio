const experiences = [
  {
    title: "Product Owner Apprentice",
    company: "Shispare",
    period: "December 2024 - March 2025",
    description:
      "Assisted the product owner in managing the backlog, refining user stories, and prioritizing features to align with business goals. Collaborated with developers and stakeholders to ensure timely delivery of product enhancements.",
    achievements: [
      "Led Agile/Scrum development for a Warehouse Management System, improving sprint delivery by 25%",
      "Created user stories and acceptance criteria, conducted PO reviews, and improved dev client workflow — reduced rework by 15%",
      "Delivered client demos and managed sprint activities — boosted satisfaction by 20%.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#000900]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-[#00ff41]">
          {"› EXPERIENCE_LOG"}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-[#0a1a0e]/70 border border-green-500/20 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_15px_#00ff41] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-[#00ff41] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-green-300 font-mono">{exp.company}</p>
                  </div>
                  <div className="text-green-300 font-mono text-sm mt-2 md:mt-0 border border-green-500/20 px-2 py-1 rounded-md">
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-green-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div>
                  <h4 className="font-mono text-sm text-[#00ff41] mb-2">ACHIEVEMENTS:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-green-300 text-sm flex items-start"
                      >
                        <span className="text-[#00ff41] mr-2 font-mono">›</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

