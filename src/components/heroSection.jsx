"use client";

import { Github, Linkedin, Mail} from "lucide-react";
import { useEffect, useState } from "react";
import Resume from '../constants/Usman Khalid - Software Engineer - Resume.pdf'

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

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Usman Khalid - Software Engineer - Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background digital-rain pt-20 relative overflow-hidden matrix-grid">
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-sm matrix-rain"
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
          <div className="mb-8 relative group">
            <div className="w-32 h-32 mx-auto bg-card border border-green-500/30 rounded-md relative font-mono text-xs flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/15 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
              <div className="text-green-400 matrix-flicker z-10">
                {">"} LOADING...
                <br />
                {">"} USER_FOUND
                <br />
                {">"} STATUS: ONLINE
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 text-green-400 matrix-glow">
            USMAN KHALID
          </h1>

          <div className="text-xl md:text-2xl font-mono mb-6 text-green-300 matrix-flicker slide-in-right">
            {">"} {displayText}
            <span className="text-green-400 animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-green-300/80 font-mono leading-relaxed">
            Fresh graduate passionate about creating innovative solutions
            through code. Ready to level up your team with modern web
            technologies and creative problem-solving.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-mono text-lg px-8 py-3 bg-green-500 text-black border border-green-400 shadow-md transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              {">"} VIEW_PROJECTS
            </button>
            <button
              onClick={downloadResume}
              className="font-mono text-lg px-8 py-3 neon-border matrix-hover hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative overflow-hidden bg-accent/10 hover:bg-accent/20"
            >
              {"> DOWNLOAD_RESUME"}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-lg px-8 py-3 border-2 border-green-500 text-green-400 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
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
              className="p-2 hover:text-green-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-green-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:uksiddiqui99@gmail.com.com"
              className="p-2 hover:text-green-400"
            >
              <Mail className="h-6 w-6" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
