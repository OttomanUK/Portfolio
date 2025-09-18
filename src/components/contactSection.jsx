"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent! (This is a demo)")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-12 text-primary">
          {"> CONTACT_ME"}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="pixel-border retro-shadow bg-card p-6 rounded-lg">
            <h3 className="font-mono text-xl text-accent mb-4">GET_IN_TOUCH</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
            Lets connect and see if I can contribute to your project.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-mono">uksiddiqui99@gmail..com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-mono">Karachi, Pakistan</span>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-accent mb-4">SOCIAL_LINKS:</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/OttomanUK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-border bg-transparent p-2 rounded hover:bg-primary hover:text-background transition-colors border"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/usman-khalid-777759236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-border bg-transparent p-2 rounded hover:bg-primary hover:text-background transition-colors border"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:uksiddiqui99@gmail.com"
                  className="pixel-border bg-transparent p-2 rounded hover:bg-primary hover:text-background transition-colors border"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pixel-border retro-shadow bg-card p-6 rounded-lg">
            <h3 className="font-mono text-xl text-accent mb-4">SEND_MESSAGE</h3>
            <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact"/>
              <div>
                <label className="font-mono text-sm mb-2 block text-primary">
                  NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pixel-border font-mono p-2 rounded bg-background"
                  required
                />
              </div>

              <div>
                <label className="font-mono text-sm text-primary mb-2 block">
                  EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pixel-border font-mono p-2 rounded bg-background"
                  required
                />
              </div>

              <div>
                <label className="font-mono text-sm text-primary mb-2 block">
                  MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pixel-border font-mono p-2 rounded bg-background min-h-[120px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-mono retro-shadow bg-primary text-background py-2 rounded hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                SEND_MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-2 border-primary pixel-border ">
          <p className="font-mono text-primary txt">
            © 2025 Usman_Khalid.exe - Built with &lt;3 and lots of tea
          </p>
        </div>
      </div>
    </section>
  )
}