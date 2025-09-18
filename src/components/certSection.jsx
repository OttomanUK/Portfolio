"use client";

import { useState, useEffect } from "react";

const certifications = [
  {
    name: "Complete Web Developer",
    issuer: "Udemy",
    date: "Sept. 11, 2025",
    credentialId: " UC-496cb74a-ca73-47fb-a1e4-c91ed6df2c2e",
    status: "Active",
    description: "Zero to Hundred Web Development Mastery",
  },
];

export function CertificationsSection() {
  const [visibleCerts, setVisibleCerts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      certifications.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCerts((prev) => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4 relative inline-block bg-background px-6">
            <span className="animate-pulse">&gt;</span> CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4 animate-pulse" />
          <p className="text-green-300 font-mono mt-4 text-lg">
            Professional credentials and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`
                bg-card/70 border border-green-500/20 backdrop-blur-sm rounded-lg
                hover:border-green-400 hover:shadow-lg transition-all duration-500
                transform hover:scale-105 hover:-translate-y-2
                ${
                  visibleCerts.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                relative overflow-hidden group
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Scanning line effect (moves on hover) */}
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-mono font-bold text-green-400 mb-2 group-hover:drop-shadow-lg transition-all">
                      {cert.name}
                    </h3>
                    <p className="text-green-300 font-mono text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-green-300 font-mono text-xs">
                      Issued: {cert.date}
                    </p>
                  </div>

                  <span className="inline-flex items-center px-2 py-1 text-xs font-mono rounded border border-green-400/30 bg-green-400/6 text-green-300 animate-pulse">
                    {cert.status}
                  </span>
                </div>

                <p className="text-green-300 font-mono text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-green-400/10">
                  <span className="text-green-300 font-mono text-xs">
                    ID: {cert.credentialId}
                  </span>

                  <div className="flex space-x-2 items-center">
                    {/* small pulsing dots as visual status */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-green-400/50 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-green-400/10">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="font-mono px-1 py-1 bg-green-500 text-black border border-green-400 shadow-md transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    {">"} VIEW_PROJECTS
                  </button>
                </div>
                {/* Floating code fragment shown on hover */}
                <div className="absolute -top-2 -right-2 text-green-400/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {`{cert_${index}}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-green-300/70 font-mono text-sm">
            <span className="animate-pulse">[</span>
            <span>VERIFIED_CREDENTIALS</span>
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
  );
}
