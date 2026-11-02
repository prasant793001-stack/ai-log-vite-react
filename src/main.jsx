import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Simple landing page with U-Design branding
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter text-orange-500">
            U-Design
          </h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-sm transition-all hover:scale-105">
            Get Started
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Design Your Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Premium design services for brands that demand excellence
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg transition-all hover:scale-105">
              Start Your Project
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
              About U-Design
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-300">
                <p>We craft exceptional digital experiences for brands that refuse to settle.</p>
                <p>Our team of creative professionals brings decades of expertise in design, development, and strategy.</p>
                <p>From concept to launch, we're with you every step of the way.</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
                <p className="text-gray-300">To empower brands with world-class design that drives results and creates lasting impressions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Web Design', desc: 'Beautiful, responsive websites that convert visitors into customers' },
                { title: 'Brand Identity', desc: 'Logos, color systems, and visual guidelines that define your brand' },
                { title: 'UI/UX Design', desc: 'Intuitive interfaces that users love and businesses profit from' }
              ].map((service, i) => (
                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-orange-500">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-neutral-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black tracking-tighter mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Ready to bring your vision to life? Get in touch with us today.
            </p>
            <a href="mailto:hello@u-design.com" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg transition-all hover:scale-105">
              hello@u-design.com
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2024 U-Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
