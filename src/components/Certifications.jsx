import React from 'react'
import { AcademicCapIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const Certifications = () => {
  const certifications = [
    {
      title: "Data Science Certification",
      issuer: "Scaler",
      description: "Comprehensive data science program covering statistical analysis, machine learning algorithms, and high-fidelity data visualization techniques.",
      url: "https://moonshot.scaler.com/s/sl/aA2WPndd_C?_gl=1*3n1jl7*_gcl_au*MTg5MzUzODMxMS4xNzUyOTkyOTg5LjQ0NjQyNDk0Ni4xNzUyOTkyOTk5LjE3NTI5OTI5OTg.*FPAU*MTg5MzUzODMxMS4xNzUyOTkyOTg5*_ga*OTA5MzkwMzAxLjE3NTI5OTI5ODk.*_ga_53S71ZZG1X*czE3NTI5OTI5OTkkbzEkZzEkdDE3NTI5OTMwMjQkajM1JGwwJGg0MDk3NTA4Njk",
      skills: ["Statistical Analysis", "Machine Learning", "Data Visualization", "Python"]
    }
  ]

  const currentLearning = [
    {
      title: "Flutter Development",
      description: "Expanding specialized skills into responsive, high-performance cross-platform mobile app development.",
      progress: "In Progress"
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-transparent border-t border-stone-200/50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-stone-400 font-bold text-xs uppercase tracking-widest">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-stone-950 mb-6 font-serif italic">
            Professional Growth
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-3xl mx-auto leading-relaxed font-light">
            Continuous technical expansion and skill verification through certified curriculums and structural self-studies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          {/* Left Column - Certifications */}
          <div className="glass-panel-neon p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center shadow-xs">
                  <AcademicCapIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-950 tracking-tight">Earned Degrees</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-stone-200/50 hover:border-stone-300 transition-all duration-305 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <AcademicCapIcon className="h-5 w-5 text-stone-800" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-950 text-base">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-semibold text-stone-400">
                            Issuer: <span className="text-stone-700">{cert.issuer}</span>
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                        {cert.description}
                      </p>

                      {/* Skills Acquired */}
                      <div className="mb-6">
                        <h5 className="text-xs font-semibold tracking-wider text-stone-400 uppercase mb-3">Acquired Competencies:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2.5 py-1 bg-stone-50 border border-stone-200 text-stone-600 rounded-lg text-[10px] font-semibold tracking-wide"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Verification Link */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-stone-200/60">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-700" />
                        <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Credentials Verified</span>
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-xl hover:bg-black transition-all duration-300 text-xs font-bold uppercase tracking-wider"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Current Learning */}
          <div className="glass-panel-neon p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center shadow-xs">
                  <BookOpenIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-950 tracking-tight">Active Studies</h3>
              </div>

              <div className="space-y-6">
                {currentLearning.map((learning, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-stone-200/50 hover:border-stone-300 transition-all duration-305 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpenIcon className="h-5 w-5 text-stone-800" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h4 className="font-bold text-stone-950 text-base">
                          {learning.title}
                        </h4>
                        <span className="px-2.5 py-1 bg-stone-100 text-stone-700 border border-stone-200 rounded-full text-[10px] font-bold tracking-wider uppercase">
                          {learning.progress}
                        </span>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed font-light">
                        {learning.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-stone-900 relative p-8 sm:p-16 rounded-3xl text-center overflow-hidden border border-stone-950 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-serif italic font-light mb-4 text-white">
              Committed to Systematic Growth
            </h3>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Always expanding, always adapting. My dedication to systematic development ensures that I deliver state-of-the-art architectures and pristine design standards to your products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full hover:bg-stone-100 transition-all duration-300 font-bold text-xs tracking-wider uppercase shadow-xs hover:scale-102 transform"
            >
              <span>Let's Discuss Your Project</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications