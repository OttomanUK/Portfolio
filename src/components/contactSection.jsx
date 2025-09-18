"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, CheckCircle, X } from "lucide-react";

export function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setShowModal(true);
        formElement.reset(); // Clear the form
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#000900] relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Hidden form for Netlify detection */}
        <form
          name="contact"
          netlify
          netlify-honeypot="bot-field"
          hidden
          style={{ display: 'none' }}
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="subject" />
          <textarea name="message"></textarea>
        </form>

        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#00ff41] mb-4 relative inline-block bg-[#000900] px-6">
            <span className="animate-pulse">&gt;</span> CONTACT_ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto mt-4 animate-pulse" />
          <p className="text-green-300 font-mono mt-4 text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-[#0a1a0e]/70 border border-green-500/20 backdrop-blur-sm rounded-lg p-6 hover:border-[#00ff41] hover:shadow-[0_0_15px_#00ff41] transition-all duration-300 relative overflow-hidden group">
            {/* Scanning line effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/12 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-900" />
            </div>

            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />

            <div className="relative z-10">
              <h3 className="font-mono text-xl text-[#00ff41] mb-4 group-hover:drop-shadow-lg transition-all">GET_IN_TOUCH</h3>
              <p className="text-green-300 leading-relaxed mb-6 font-mono text-sm">
                Let's connect and see if I can contribute to your project.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#00ff41]" />
                  <span className="font-mono text-green-300">uksiddiqui99@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#00ff41]" />
                  <span className="font-mono text-green-300">Karachi, Pakistan</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-sm text-[#00ff41] mb-4">SOCIAL_LINKS:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/OttomanUK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500/20 bg-transparent p-2 rounded hover:bg-[#00ff41]/10 hover:border-[#00ff41] hover:text-[#00ff41] text-green-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/usman-khalid-777759236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500/20 bg-transparent p-2 rounded hover:bg-[#00ff41]/10 hover:border-[#00ff41] hover:text-[#00ff41] text-green-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:uksiddiqui99@gmail.com"
                    className="border border-green-500/20 bg-transparent p-2 rounded hover:bg-[#00ff41]/10 hover:border-[#00ff41] hover:text-[#00ff41] text-green-300 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Status indicators */}
              <div className="flex justify-end mt-4 space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-[#00ff41]/50 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating code fragment */}
            <div className="absolute -top-2 -right-2 text-[#00ff41]/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {`{contact_info}`}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a1a0e]/70 border border-green-500/20 backdrop-blur-sm rounded-lg p-6 hover:border-[#00ff41] hover:shadow-[0_0_15px_#00ff41] transition-all duration-300 relative overflow-hidden group">
            {/* Scanning line effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/12 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-900" />
            </div>

            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-300/40 group-hover:border-[#00ff41] transition-colors" />

            <div className="relative z-10">
              <h3 className="font-mono text-xl text-[#00ff41] mb-4 group-hover:drop-shadow-lg transition-all">SEND_MESSAGE</h3>

              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Required for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot for spam protection */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="font-mono text-sm mb-2 block text-[#00ff41]">
                    NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-green-500/20 font-mono p-2 rounded bg-[#000900] text-green-300 focus:border-[#00ff41] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-sm text-[#00ff41] mb-2 block">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full border border-green-500/20 font-mono p-2 rounded bg-[#000900] text-green-300 focus:border-[#00ff41] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-sm text-[#00ff41] mb-2 block">
                    SUBJECT:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full border border-green-500/20 font-mono p-2 rounded bg-[#000900] text-green-300 focus:border-[#00ff41] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-sm text-[#00ff41] mb-2 block">
                    MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full border border-green-500/20 font-mono p-2 rounded bg-[#000900] min-h-[120px] text-green-300 focus:border-[#00ff41] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-mono py-2 rounded transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-green-500/20 text-green-400/50 cursor-not-allowed border border-green-500/20' 
                      : 'bg-[#00ff41]/10 border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/20 hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]'
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE'}
                </button>
              </form>
            </div>

            {/* Floating code fragment */}
            <div className="absolute -top-2 -right-2 text-[#00ff41]/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {`{message_form}`}
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0a1a0e]/90 border border-[#00ff41] max-w-md w-full p-8 rounded-lg relative backdrop-blur-sm">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-green-300 hover:text-[#00ff41] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-[#00ff41] mx-auto mb-4" />
                <h3 className="font-mono text-2xl text-[#00ff41] mb-4">
                  MESSAGE_SENT!
                </h3>
                <p className="text-green-300 mb-6 font-mono text-sm">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="font-mono bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] px-6 py-2 rounded hover:bg-[#00ff41]/20 hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-200"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-green-500/20">
          <div className="inline-flex items-center space-x-2 text-green-300/70 font-mono text-sm">
            <span className="animate-pulse">[</span>
            <span>© 2025 Usman_Khalid.exe - Built with &lt;3 and lots of tea</span>
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