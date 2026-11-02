import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import noiseSvg from './assets/noise.svg'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff6b35] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#ff6b35] tracking-tight">U-Design</h1>
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#ff6b35] text-black font-semibold text-sm rounded-full hover:bg-[#ff8255] transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#ff6b35]/10 via-black to-black">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${noiseSvg})` }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#ff6b35] to-red-500 bg-clip-text text-transparent">
            Design Your Vision
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Premium design services for brands that demand excellence
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#ff6b35] text-black font-bold rounded-full text-lg hover:bg-[#ff8255] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About U-Design</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We craft exceptional digital experiences for brands that refuse to settle.
              </p>
              <p>
                Our team of creative professionals brings decades of expertise in design, development, and strategy.
              </p>
              <p>
                From concept to launch, we&apos;re with you every step of the way.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20">
              <h3 className="text-2xl font-bold text-[#ff6b35] mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To empower brands with world-class design that drives results and creates lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-xl font-bold text-[#ff6b35] mb-3">Web Design</h3>
              <p className="text-gray-400">
                Beautiful, responsive websites that convert visitors into customers
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-xl font-bold text-[#ff6b35] mb-3">Brand Identity</h3>
              <p className="text-gray-400">
                Logos, color systems, and visual guidelines that define your brand
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-xl font-bold text-[#ff6b35] mb-3">UI/UX Design</h3>
              <p className="text-gray-400">
                Intuitive interfaces that users love and businesses profit from
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-10">
            Ready to bring your vision to life? Get in touch with us today.
          </p>
          <a
            href="mailto:hello@u-design.com"
            className="inline-block px-8 py-4 bg-[#ff6b35] text-black font-bold rounded-full text-lg hover:bg-[#ff8255] transition-colors"
          >
            hello@u-design.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-neutral-800 text-center text-gray-500 text-sm">
        <p>© 2024 U-Design. All rights reserved.</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
