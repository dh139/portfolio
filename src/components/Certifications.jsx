import React from 'react'
import { AcademicCapIcon, ArrowTopRightOnSquareIcon, SparklesIcon, CheckCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science Certification",
      issuer: "Scalar",
      description: "Comprehensive data science program covering statistical analysis, machine learning, and data visualization techniques.",
      url: "https://moonshot.scaler.com/s/sl/aA2WPndd_C?_gl=1*3n1jl7*_gcl_au*MTg5MzUzODMxMS4xNzUyOTkyOTg5LjQ0NjQyNDk0Ni4xNzUyOTkyOTk5LjE3NTI5OTI5OTg.*FPAU*MTg5MzUzODMxMS4xNzUyOTkyOTg5*_ga*OTA5MzkwMzAxLjE3NTI5OTI5ODk.*_ga_53S71ZZG1X*czE3NTI5OTI5OTkkbzEkZzEkdDE3NTI5OTMwMjQkajM1JGwwJGg0MDk3NTA4Njk",
      color: "from-purple-500 to-blue-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      skills: ["Statistical Analysis", "Machine Learning", "Data Visualization", "Python Programming"]
    }
  ]

  const currentLearning = [
    {
      title: "Flutter Development",
      description: "Expanding skills into cross-platform mobile app development",
      progress: "In Progress",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AcademicCapIcon className="h-6 w-6 text-purple-600" />
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Professional Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and skill enhancement through recognized certification programs and ongoing education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Earned Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${cert.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <AcademicCapIcon className={`h-6 w-6 ${cert.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-200 text-lg">
                          {cert.title}
                        </h4>
                        <p className="text-sm font-medium text-slate-600 mb-3">
                          Issued by: <span className="text-purple-600">{cert.issuer}</span>
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {cert.description}
                        </p>

                        {/* Skills Learned */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-slate-700 mb-2">Key Skills Acquired:</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Certificate Link */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <span className="text-sm text-green-600 font-medium">Verified Certificate</span>
                          </div>
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transform"
                          >
                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Current Learning */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <BookOpenIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Currently Learning</h3>
              </div>

              <div className="space-y-6">
                {currentLearning.map((learning, index) => (
                  <div 
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${learning.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <BookOpenIcon className={`h-6 w-6 ${learning.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-200 text-lg">
                            {learning.title}
                          </h4>
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            {learning.progress}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {learning.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

        
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Committed to Continuous Growth</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Always learning, always evolving. My dedication to professional development ensures I bring the latest knowledge and best practices to every project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Let's Discuss Your Project</span>
              <AcademicCapIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications