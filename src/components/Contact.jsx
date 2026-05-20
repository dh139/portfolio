import React, { useState } from 'react'
import { EnvelopeIcon, PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const emailjs = await import('@emailjs/browser')
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'gajjardhrumil264@gmail.com'
      }

      await emailjs.send(
        'service_j2gr0d8', // EmailJS service ID
        'template_qxz5mkq', // EmailJS template ID
        templateParams,
        'TGlogZd6dtFKkLeqn' // EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email Me",
      value: "gajjardhrumil264@gmail.com",
      action: () => window.open('mailto:gajjardhrumil264@gmail.com'),
      isClickable: true
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dh139",
      icon: <i className="fa-brands fa-github text-xl"></i>
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhrumil-gajjar/",
      icon: <i className="fa-brands fa-linkedin-in text-xl"></i>
    }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent border-t border-stone-200/50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-stone-400 font-bold text-xs uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-stone-950 mb-6 font-serif italic">
            Let's Create Together
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to collaborate on your next project? Drop a message and let's turn your grand vision into clean, high-performance code.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex">
            <div className="glass-panel-neon w-full h-full p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 tracking-tight mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-6 text-stone-600 leading-relaxed font-light text-base mb-8">
                  <p>
                    I'm always looking forward to innovative, challenging opportunities, whether it's building a 
                    <span className="font-semibold text-stone-950"> MERN stack application</span>, 
                    setting up custom <span className="font-semibold text-stone-950"> bot automation</span>, 
                    or crafting pristine backends in <span className="font-semibold text-stone-950">Laravel & PHP</span>.
                  </p>
                  <p>
                    Let's schedule a chat to map out your system architecture, optimize user flow, and design an unmatched user experience.
                  </p>
                </div>
              
                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className={`group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200/60 transition-all duration-300 ${info.isClickable ? 'cursor-pointer hover:bg-stone-50 hover:border-stone-300' : ''}`}
                      onClick={info.action}
                    >
                      <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <info.icon className="h-5 w-5 text-stone-800" />
                      </div>
                      <div>
                        <p className="font-bold text-stone-900 mb-1">{info.title}</p>
                        <p className="text-stone-500 text-sm group-hover:text-black transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-stone-200/60">
                <h4 className="font-semibold tracking-wider text-xs uppercase text-stone-400 mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-black hover:bg-stone-50 hover:border-stone-300 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:shadow-xs"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Message Form */}
          <div className="lg:col-span-7 flex">
            <div className="glass-panel-neon w-full h-full p-8 sm:p-10 rounded-3xl border border-stone-200 hover:border-stone-300 transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 tracking-tight mb-6">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-5 py-4 bg-white border border-stone-200 focus:border-stone-800 rounded-2xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800/10 transition-all duration-300 hover:border-stone-300"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-5 py-4 bg-white border border-stone-200 focus:border-stone-800 rounded-2xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800/10 transition-all duration-300 hover:border-stone-300"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full px-5 py-4 bg-white border border-stone-200 focus:border-stone-800 rounded-2xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800/10 transition-all duration-300 hover:border-stone-300"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 bg-white border border-stone-200 focus:border-stone-800 rounded-2xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-800/10 transition-all duration-300 hover:border-stone-300 resize-none"
                  />
                </div>

                {/* Status Alerts */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm animate-fade-in">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-emerald-700" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-sm animate-fade-in">
                    <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0 text-rose-700" />
                    <span>Oops! Something went wrong while sending. Please try again or email me directly.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-stone-900 hover:bg-black text-white font-bold uppercase tracking-wider text-xs rounded-2xl active:scale-[0.98] transition-all duration-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact