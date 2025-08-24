import React, { useState, useEffect } from 'react';
import { Moon, Sun, Phone, Calendar, Shield, Zap, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ShadowSupportWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [retellClient, setRetellClient] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Toggle dark mode with smooth transition
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Track mouse for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load Retell AI SDK and initialize
  useEffect(() => {
    const loadRetellSDK = () => {
      const script = document.createElement('script');
      script.src = '/local-path-to-retell-web-sdk/index.js';
      script.onload = () => {
        try {
          const client = new window.RetellWebClient({
            apiKey: "YOUR_RETELL_API_KEY",
            agentId: "YOUR_AGENT_ID",
            enableDebug: true,
            enableRecording: true
          });
          
          setRetellClient(client);
          console.log("Retell AI initialized successfully!");
          
          client.on('call-started', () => {
            console.log('Call started');
            setIsCallActive(true);
          });
          
          client.on('call-ended', () => {
            console.log('Call ended');
            setIsCallActive(false);
          });
          
          client.on('error', (error) => {
            console.error('Retell AI error:', error);
            setIsCallActive(false);
          });
          
        } catch (error) {
          console.error("Error initializing Retell AI:", error);
        }
      };
      
      script.onerror = () => {
        console.error("Failed to load Retell AI SDK");
      };
      
      document.head.appendChild(script);
    };

    loadRetellSDK();
    
    return () => {
      const script = document.querySelector('script[src*="retell-web-sdk"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Start call with ShadowSupport
  const startCall = async () => {
    if (!retellClient) {
      alert("Retell AI is still loading. Please wait a moment and try again.");
      return;
    }
    
    try {
      setIsCallActive(true);
      await retellClient.startCall();
    } catch (error) {
      console.error("Error starting call:", error);
      setIsCallActive(false);
      alert("Error starting call. Please check your Retell AI configuration.");
    }
  };

  // End call
  const endCall = async () => {
    if (!retellClient) return;
    
    try {
      await retellClient.endCall();
      setIsCallActive(false);
    } catch (error) {
      console.error("Error ending call:", error);
      setIsCallActive(false);
    }
  };

  const features = [
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Intelligent Scheduling",
      description: "Seamlessly book appointments with advanced AI conversation flow and real-time calendar integration."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards ensure your data remains protected at all times."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Instant Synchronization",
      description: "Real-time data sync across all platforms with automated workflow integration and notifications."
    }
  ];

  const stats = [
    { number: "24/7", label: "Uptime Guarantee" },
    { number: "0.8s", label: "Response Time" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "∞", label: "Scalability" }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ease-in-out ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 text-slate-900'
    }`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-teal-400' : 'bg-teal-300'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className={`absolute w-80 h-80 rounded-full opacity-15 blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}
          style={{
            transform: `translate(${-mousePosition.x * 15 + 7}px, ${-mousePosition.y * 15 + 7}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
        <div 
          className={`absolute w-64 h-64 rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-300'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`,
            left: '60%',
            top: '60%',
          }}
        />
      </div>

      {/* Glassmorphism Header */}
      <header className={`backdrop-blur-xl border-b transition-all duration-500 sticky top-0 z-50 ${
        darkMode 
          ? 'bg-slate-900/30 border-teal-500/20 shadow-lg shadow-teal-900/10' 
          : 'bg-white/30 border-teal-200/30 shadow-lg shadow-teal-100/10'
      }`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 group">
              <div className="relative p-2 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-teal-300/20">
                <Shield className="w-7 h-7 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              </div>
              <div className="space-y-1">
                <h1 className={`text-2xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                  darkMode 
                    ? 'from-teal-300 via-blue-300 to-emerald-300' 
                    : 'from-teal-600 via-blue-600 to-emerald-600'
                }`}>
                  ShadowSupport
                </h1>
                <p className="text-xs opacity-60 font-medium tracking-wide">PHANTOMS ENTERPRISE</p>
              </div>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className={`group p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
                darkMode 
                  ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 border border-amber-400/20' 
                  : 'bg-slate-600/20 text-slate-600 hover:bg-slate-600/30 border border-slate-300/20'
              } backdrop-blur-sm shadow-lg`}
            >
              <div className="relative overflow-hidden">
                {darkMode ? (
                  <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Animation */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-300/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium opacity-80">Next-Generation AI Assistant</span>
            </div>
            
            <h2 className={`text-6xl md:text-8xl font-bold leading-tight tracking-tight transition-all duration-1000 ${
              darkMode 
                ? 'text-white drop-shadow-2xl' 
                : 'text-slate-900'
            }`}>
              Meet Your
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                darkMode 
                  ? 'from-teal-300 via-blue-300 to-emerald-300' 
                  : 'from-teal-500 via-blue-600 to-emerald-500'
              }`}>
                AI Concierge
              </span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 max-w-3xl mx-auto font-light">
            Experience the future of customer service with ShadowSupport's sophisticated AI agent. 
            Effortless appointment booking with enterprise-grade automation.
          </p>

          {/* Enhanced Call Button */}
          <div className="relative inline-block pt-8">
            <div className={`absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse ${
              isCallActive 
                ? 'bg-red-500' 
                : darkMode 
                  ? 'bg-gradient-to-r from-teal-400 to-blue-400' 
                  : 'bg-gradient-to-r from-teal-500 to-blue-500'
            }`}></div>
            
            <button
              onClick={isCallActive ? endCall : startCall}
              disabled={isCallActive && !retellClient}
              className={`group relative px-10 py-5 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 backdrop-blur-sm border ${
                isCallActive 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white border-red-400/50 shadow-2xl shadow-red-500/25' 
                  : darkMode
                    ? 'bg-gradient-to-r from-teal-500/90 to-blue-500/90 hover:from-teal-400/90 hover:to-blue-400/90 text-white border-teal-400/30 shadow-2xl shadow-teal-500/25'
                    : 'bg-gradient-to-r from-teal-600/90 to-blue-600/90 hover:from-teal-500/90 hover:to-blue-500/90 text-white border-teal-500/30 shadow-2xl shadow-teal-600/25'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Phone className={`w-6 h-6 transition-all duration-300 ${
                    isCallActive 
                      ? 'animate-pulse text-red-100' 
                      : 'group-hover:rotate-12 group-hover:scale-110'
                  }`} />
                  {!isCallActive && (
                    <div className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                  )}
                </div>
                <span className="tracking-wide">
                  {isCallActive ? 'End Conversation' : 'Start Conversation'}
                </span>
                {!isCallActive && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </div>
            </button>
            
            {isCallActive && (
              <div className="absolute -inset-8 border-2 border-red-400 rounded-full opacity-60 animate-ping"></div>
            )}
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-sm opacity-60 font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Instant Connection
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Crystal Clear Audio
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              Smart Scheduling
            </span>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className={`py-24 relative ${
        darkMode ? 'bg-slate-900/30' : 'bg-white/30'
      } backdrop-blur-xl border-y ${
        darkMode ? 'border-teal-500/10' : 'border-teal-200/20'
      }`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Choose 
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode 
                  ? 'from-teal-300 to-blue-300' 
                  : 'from-teal-600 to-blue-600'
              }`}>
                ShadowSupport
              </span>
              ?
            </h3>
            <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
              Experience unparalleled efficiency with our advanced AI-powered customer service platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-800/50 hover:bg-slate-800/70 border border-teal-500/20 hover:border-teal-400/40' 
                    : 'bg-white/60 hover:bg-white/80 border border-teal-200/30 hover:border-teal-300/50'
                } backdrop-blur-xl shadow-xl hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`inline-flex p-3 rounded-2xl mb-6 bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${
                  darkMode 
                    ? 'from-teal-500/20 to-blue-500/20 border border-teal-400/20' 
                    : 'from-teal-100 to-blue-100 border border-teal-200/30'
                }`}>
                  <div className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="opacity-80 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl backdrop-blur-sm border border-teal-300/10 hover:border-teal-400/30 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                darkMode ? 'bg-teal-400' : 'bg-teal-500'
              }`}></div>
              
              <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 ${
                darkMode 
                  ? 'from-teal-300 to-blue-300' 
                  : 'from-teal-600 to-blue-600'
              }`}>
                {stat.number}
              </div>
              <div className="text-base opacity-80 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`border-t transition-all duration-500 relative ${
        darkMode 
          ? 'border-teal-500/20 bg-slate-900/50' 
          : 'border-teal-200/30 bg-white/50'
      } backdrop-blur-xl`}>
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className={`p-2 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border ${
                darkMode ? 'border-teal-400/20' : 'border-teal-300/20'
              }`}>
                <Users className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-lg font-semibold tracking-wide">
                Crafted with Excellence by the Phantoms Team
              </span>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-sm opacity-70 font-medium">
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 border border-teal-300/10">
                <span>🤖</span>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 border border-teal-300/10">
                <span>📊</span>
                <span>Excel Integration</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 border border-teal-300/10">
                <span>⚡</span>
                <span>n8n Workflow</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 border border-teal-300/10">
                <span>🔒</span>
                <span>Enterprise Security</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-teal-300/10">
              <p className="text-xs opacity-50 tracking-wider">
                SHADOWSUPPORT © 2025 • POWERED BY RETELL AI • PHANTOMS ENTERPRISE SOLUTIONS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating Call Status */}
      {isCallActive && (
        <div className="fixed top-28 right-6 z-50 animate-in slide-in-from-right duration-500">
          <div className={`px-6 py-4 rounded-2xl flex items-center gap-4 backdrop-blur-xl border shadow-2xl ${
            darkMode 
              ? 'bg-red-900/80 border-red-500/30 shadow-red-900/20' 
              : 'bg-red-50/80 border-red-200/30 shadow-red-100/20'
          }`}>
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-40"></div>
            </div>
            <span className="text-red-600 font-semibold tracking-wide">
              Call Active
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShadowSupportWebsite;