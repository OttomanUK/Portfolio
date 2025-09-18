"use client";

import { Github, ExternalLink } from "lucide-react";
import anomaly from '../constants/anomaly.png'
import job from '../constants/job.jpg'
import finance from '../constants/finance.png'
import ecommerce from '../constants/ecommerce.png'

const projects = [
  {
    title: "Point of Sales Anomaly Detection using AI/ML ",
    description:
      "Responsive web application built with React and Redux, featuring interactive dashboards, API integration, and anomaly detection for invoice management.",
    tech: ["React", "PostgreSQL", "Python", "Django"],
    image: anomaly,
    github: "https://github.com/OttomanUK/srb-frontend",
    // demo: "https://demo.com",
  },
  {
    title: "Job Portal",
    description:
      "Full-stack job portal built with MERN, TailwindCSS, and ShadCN UI, featuring recruiter/job seeker roles, resume uploads, and RESTful APIs for job applications.",
    tech: ["MERN", "TailwindCSS", "ShadCN UI"],
    image: job,
    github: "https://github.com/OttomanUK/Job-Portal-Backend",
    // demo: "https://demo.com",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Finance tracking application built with PostgreSQL, Node.js, Express, and React, featuring secure authentication, analytics dashboards, and optimized queries for real-time insights.",
    tech: [
      "React",
      "PostgreSQL",
      "Node",
      "Express",
      "TailwindCSS",
      "ShadCN UI",
    ],
    image: finance,
    github: "https://github.com/OttomanUK/finance-tracker-app-backend",
    // demo: "https://demo.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "E-commerce platform built with MERN, TailwindCSS, and ShadCN UI, supporting vendor/customer roles, catalog and cart workflows, and secure authentication with file uploads.",
    tech: ["MERN", "Tailwind CSS", "ShadCN UI"],
    image: ecommerce,
    github: "https://github.com/OttomanUK/Clothing-Store-Frontend",
    // demo: "https://demo.com",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-[#000900]" // dark background
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-[#00ff41]">
          {"> PROJECTS"}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical glowing line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#00ff41] shadow-[0_0_10px_#00ff41] hidden md:block"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                {/* Dot marker for each project */}
                <div className="absolute left-2 top-6 w-4 h-4 bg-[#00ff41] rounded-full shadow-[0_0_10px_#00ff41] hidden md:block"></div>

                <div className="bg-[#0a1a0e]/70 border overflow-hidden border-green-500/20 backdrop-blur-sm rounded-2xl p-6 md:ml-12 hover:border-green-400 hover:shadow-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  {/* Project Image */}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 border border-green-500/20"
                  />

                  {/* Project Title */}
                  <h3 className="font-mono text-xl text-[#00ff41] mb-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-green-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#00ff41] text-black text-xs font-mono rounded-sm"
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
                      className="flex items-center gap-2 px-3 py-1 border border-[#00ff41] text-[#00ff41] font-mono text-sm rounded-md hover:bg-[#00ff41] hover:text-black transition"
                    >
                      <Github className="h-4 w-4" />
                      Github
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 bg-[#00ff41] text-black font-mono text-sm rounded-md hover:bg-[#00cc33] transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      DEMO
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
