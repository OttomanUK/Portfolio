import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Point of Sales Anomaly Detection using AI/ML ",
    description:
      "Responsive web application built with React and Redux, featuring interactive dashboards, API integration, and anomaly detection for invoice management.",
    tech: ["React", "PostgreSQL", "Python", "Django"],
    image: "/ecommerce-website-mockup.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Job Portal",
    description:
      "Full-stack job portal built with MERN, TailwindCSS, and ShadCN UI, featuring recruiter/job seeker roles, resume uploads, and RESTful APIs for job applications.",
    tech: ["MERN", "TailwindCSS", "ShadCN UI"],
    image: "/task-management-dashboard.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Finance tracking application built with PostgreSQL, Node.js, Express, and React, featuring secure authentication, analytics dashboards, and optimized queries for real-time insights.",
    tech: ["React", "PostgreSQL", "Node", "Express", "TaildwindCSS", "ShadCN UI"],
    image: "/weather-api-dashboard.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "E-commerce platform built with MERN, TailwindCSS, and ShadCN UI, supporting vendor/customer roles, catalog and cart workflows, and secure authentication with file uploads.",
    tech: ["MERN", "TailwindCSS", "ShadCN UI"],
    image: "/fitness-app-interface.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-primary">
          {"> PROJECTS"}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pixel-border retro-shadow bg-card rounded-2xl p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              {/* Project Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover pixel-border mb-4 rounded-lg"
              />

              {/* Project Title */}
              <h3 className="font-mono text-xl text-primary mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent text-accent-foreground text-xs font-mono pixel-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-sm rounded-md hover:bg-primary hover:text-background transition"
                >
                  <Github className="h-4 w-4" />
                  CODE
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-primary text-background font-mono text-sm rounded-md hover:bg-primary/90 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
