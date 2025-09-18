"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "INITIALIZING SOFTWARE_ENGINEER.exe";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background digital-rain pt-20 relative overflow-hidden matrix-grid">
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-sm matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Loading box */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-card matrix-border matrix-glow relative font-mono text-xs flex items-center justify-center">
              <div className="text-primary matrix-flicker">
                {">"} LOADING...
                <br />
                {">"} USER_FOUND
                <br />
                {">"} STATUS: ONLINE
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 text-primary matrix-glow matrix-text">
            USMAN KHALID
          </h1>

          <div className="text-xl md:text-2xl font-mono mb-6 text-accent matrix-flicker slide-in-right ">
            {">"} {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance text-muted-foreground">
            Fresh graduate passionate about creating innovative solutions
            through code. Ready to level up your team with modern web
            technologies and creative problem-solving.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-mono text-lg px-8 py-3 bg-primary text-primary-foreground matrix-shadow matrix-border transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              {">"} VIEW_PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-lg px-8 py-3 border-2 border-primary matrix-border matrix-shadow transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              {">"} CONTACT_ME
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent matrix-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent matrix-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-2 hover:text-accent matrix-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
