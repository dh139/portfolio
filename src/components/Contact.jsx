import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'

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

    // Using EmailJS to send email directly to Gmail
    try {
      // You need to install EmailJS: npm install @emailjs/browser
      // And set up your EmailJS account with service ID, template ID, and public key
      const emailjs = await import('@emailjs/browser')
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'gajjardhrumil264@gmail.com'
      }

      await emailjs.send(
        'service_j2gr0d8', // Replace with your EmailJS service ID
        'template_qxz5mkq', // Replace with your EmailJS template ID
        templateParams,
        'TGlogZd6dtFKkLeqn' // Replace with your EmailJS public key
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
      title: "Email",
      value: "gajjardhrumil264@gmail.com",
      action: () => window.open('mailto:gajjardhrumil264@gmail.com'),
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      isClickable: true
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dh139", // Replace with your GitHub username
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-white/10 hover:bg-white/20 border border-white/10"
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden flex flex-col justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PaperAirplaneIcon className="h-6 w-6 text-indigo-400" />
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-20">
          {/* Contact Information Card */}
          <div className="animate-fade-in-up w-full max-w-2xl" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              </div>
              
              <div className="space-y-6 text-slate-300 leading-relaxed mb-8">
                <p>
                  I'm always interested in hearing about new opportunities, whether it's a 
                  <span className="font-semibold text-indigo-400"> full-stack web application</span>, 
                  <span className="font-semibold text-emerald-400"> bot automation project</span>, 
                  or any innovative idea you'd like to bring to life.
                </p>
                <p>
                  Let's discuss your project requirements and explore how my expertise in 
                  <span className="font-semibold text-purple-400"> MERN stack</span>, 
                  <span className="font-semibold text-orange-400"> Laravel</span>, and 
                  <span className="font-semibold text-pink-400"> API integrations</span> can help achieve your goals.
                </p>
              </div>
            
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ${info.isClickable ? 'cursor-pointer hover:bg-white/10 hover:border-white/10 hover:shadow-md' : ''}`}
                    onClick={info.action}
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{info.title}</p>
                      <p className={`text-slate-400 transition-colors ${info.isClickable ? 'group-hover:text-indigo-400' : ''}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                     <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact