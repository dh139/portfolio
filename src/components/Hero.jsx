import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('api');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const apiLogs = [
      'GET /api/v1/user/profile - 200 OK - 8ms',
      'POST /api/v1/auth/verify - 200 OK - 15ms',
      'PUT /api/v1/system/sync - 202 Accepted - 45ms',
      'GET /api/v1/billing/invoice - 200 OK - 12ms',
      'POST /api/v1/bot/webhook - 200 OK - 5ms',
    ];
    const botLogs = [
      '💬 WhatsApp: Lead from +91 987... captured',
      '⚡ Dispatcher: Enqueued catalog routing job',
      '🤖 Assistant: Sent interactive welcome deck',
      '🚀 Telegram: Dispatched webhook status to Admin',
      '🔥 Automation: Closed database connection pool',
    ];
    const jobLogs = [
      '📦 Queue: Dispatching data sync task #8194',
      '⏳ Laravel Kernel: cleaning expired sessions',
      '✔ Storage: Cleaned temporary buffer cache (42MB)',
      '⚡ Optimizer: Pre-compiled responsive imagery',
      '🚀 Pipeline: Deploying laravel-core v2.4.0 ... 100%',
    ];

    let currentLogs = apiLogs;
    if (activeTab === 'bots') currentLogs = botLogs;
    else if (activeTab === 'jobs') currentLogs = jobLogs;

    // Set initial logs with timestamps
    setLogs(currentLogs.map((log, index) => {
      const time = new Date(Date.now() - (4 - index) * 4000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      return `[${time}] ${log}`;
    }));

    // Add a interval to append a log line dynamically to make it look alive!
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = currentLogs[Math.floor(Math.random() * currentLogs.length)];
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return [...prev.slice(1), `[${time}] ${nextLog}`];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Structural grid lines (architectural/editorial theme) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E6E5E0_1px,transparent_1px),linear-gradient(to_bottom,#E6E5E0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Editorial Typography & CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200/80 bg-stone-100/50 backdrop-blur-sm mb-8 w-fit shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.95] mb-6 text-stone-950"
            >
              Building <br className="hidden sm:inline" />
              <span className="font-serif italic font-light text-stone-800 text-glow-none">
                scalable systems
              </span> <br />
              & automated code.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-stone-650 max-w-2xl mb-10 font-light leading-relaxed"
            >
              I'm <span className="text-stone-950 font-semibold">Dhrumil Gajjar</span>, a Full-Stack Engineer based in India specializing in clean <span className="font-medium text-stone-950">MERN stack</span> applications, high-performance <span className="font-medium text-stone-950">Laravel core architectures</span>, and intelligent <span className="font-medium text-stone-950">bot automation orchestrators</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-full bg-stone-900 hover:bg-black text-white font-bold tracking-wider uppercase text-[10px] transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-xs"
              >
                <span>Explore Projects</span>
                <svg className="h-3 w-3 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-bold tracking-wider uppercase text-[10px] transition-all flex items-center justify-center transform active:scale-95 shadow-xs"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive System Console & Live Automation Dashboard */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-full max-w-[440px] aspect-[4/5] rounded-3xl border border-stone-800 bg-[#0B0B0A] p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle top glare glow */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(120,113,108,0.15),transparent_100%)] pointer-events-none" />

              {/* Console Window Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-stone-800/80 pb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] font-mono text-stone-500 tracking-wider">dhrumil-core ~ bash</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[8px] font-mono font-bold text-emerald-500 uppercase tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Interactive Controller Tabs */}
              <div className="relative z-10 grid grid-cols-3 gap-1 bg-stone-900/60 p-1 rounded-xl border border-stone-800/60 my-4">
                {[
                  { id: 'api', name: 'API Router' },
                  { id: 'bots', name: 'Bot Webhooks' },
                  { id: 'jobs', name: 'Queue Engine' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-1.5 px-1 rounded-lg text-[9px] font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-stone-800 text-white font-bold border border-stone-700/50 shadow-xs'
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900/30 border border-transparent'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Real-time Streaming Logs Output */}
              <div className="relative z-10 flex-1 flex flex-col justify-between mb-4">
                <div className="w-full bg-black/60 rounded-2xl border border-stone-800/60 p-4 h-[135px] overflow-hidden flex flex-col justify-end font-mono text-[9px] leading-relaxed text-stone-300">
                  <AnimatePresence mode="popLayout">
                    {logs.map((log, idx) => (
                      <motion.div
                        key={log}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.25 }}
                        className="truncate select-none flex items-center gap-1.5"
                      >
                        <span className="text-emerald-500 font-bold select-none">&gt;</span>
                        <span className="text-stone-300">{log.substring(0, 11)}</span>
                        <span className="text-stone-100 font-medium">{log.substring(11)}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Dynamic SVG Visualizer Panel */}
                <div className="mt-4 bg-stone-950/40 rounded-2xl border border-stone-850 p-4 h-[120px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-3 text-[8px] font-mono text-stone-500 uppercase tracking-widest">
                    {activeTab === 'api' && 'Latency Monitor'}
                    {activeTab === 'bots' && 'Active Integrations'}
                    {activeTab === 'jobs' && 'System Resource Hub'}
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === 'api' && (
                      <motion.div 
                        key="api-viz"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full h-full flex flex-col justify-center"
                      >
                        <svg className="w-full h-full max-h-[75px]" viewBox="0 0 300 75" fill="none">
                          <path
                            d="M 0 50 Q 30 10 60 40 T 120 20 T 180 55 T 240 15 T 300 35"
                            stroke="#10B981"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                            className="stroke-dash-pattern"
                          >
                            <animate attributeName="strokeDashoffset" values="100;0" dur="5s" repeatCount="indefinite" />
                          </path>
                          <path
                            d="M 0 50 Q 30 10 60 40 T 120 20 T 180 55 T 240 15 T 300 35 L 300 75 L 0 75 Z"
                            fill="url(#emerald-gradient)"
                            opacity="0.1"
                          />
                          <defs>
                            <linearGradient id="emerald-gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#10B981" />
                              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="flex justify-between items-center px-2 mt-2 font-mono text-[7px] text-stone-500">
                          <span>AVG LATENCY: 14.5ms</span>
                          <span>STABILITY: 99.98%</span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'bots' && (
                      <motion.div 
                        key="bots-viz"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex items-center justify-around px-4"
                      >
                        {/* Server Central Node */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-[10px] text-white font-mono shadow-md">API</div>
                          <span className="text-[7px] text-stone-500 font-mono">Gateway</span>
                        </div>
                        {/* Connecting Line */}
                        <div className="flex-1 h-px bg-stone-800 relative mx-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-1/2 -translate-y-1/2 left-0">
                            <animate attributeName="left" values="0%;100%" dur="2s" repeatCount="indefinite" />
                          </div>
                        </div>
                        {/* WhatsApp Node */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-emerald-500 text-xs shadow-md">
                            <i className="fa-brands fa-whatsapp"></i>
                          </div>
                          <span className="text-[7px] text-stone-500 font-mono">WhatsApp</span>
                        </div>
                        {/* Connecting Line */}
                        <div className="flex-1 h-px bg-stone-800 relative mx-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-1/2 -translate-y-1/2 left-0">
                            <animate attributeName="left" values="0%;100%" dur="1.5s" repeatCount="indefinite" />
                          </div>
                        </div>
                        {/* Telegram Node */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-sky-400 text-xs shadow-md">
                            <i className="fa-brands fa-telegram"></i>
                          </div>
                          <span className="text-[7px] text-stone-500 font-mono">Telegram</span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'jobs' && (
                      <motion.div 
                        key="jobs-viz"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full h-full flex flex-col justify-center gap-3 px-2"
                      >
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between items-center text-[7px] font-mono text-stone-400 mb-1">
                              <span>Queue Dispatcher Core (Worker #1)</span>
                              <span>ACTIVE</span>
                            </div>
                            <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}>
                                <animate attributeName="width" values="10%;95%;85%" dur="4s" repeatCount="indefinite" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center text-[7px] font-mono text-stone-400 mb-1">
                              <span>Laravel Kernel cron scheduler</span>
                              <span>IDLE</span>
                            </div>
                            <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
                              <div className="h-full bg-stone-700 rounded-full" style={{ width: '40%' }}>
                                <animate attributeName="width" values="40%;45%;40%" dur="6s" repeatCount="indefinite" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Console Window Footer */}
              <div className="relative z-10 flex items-center justify-between border-t border-stone-850 pt-4 text-[9px] text-stone-500 font-mono">
                <span>SYS_STATUS: OPTIMIZED</span>
                <span>DB: CONNECTED</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;