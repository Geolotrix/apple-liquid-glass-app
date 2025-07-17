'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="apple-card p-8 md:p-12 mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-thin text-white mb-6 tracking-tight">
              Welcome to the
              <span className="block font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
              Experience the next generation of design with Apple's liquid glass aesthetics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="liquid-button px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="glass-morphism px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-4">
              Liquid Glass Design
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Immersive experiences with depth and clarity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "Beautiful glass morphism effects that create depth and visual hierarchy",
                icon: "✨"
              },
              {
                title: "Fluidity",
                description: "Smooth animations and transitions that feel natural and responsive",
                icon: "🌊"
              },
              {
                title: "Elegance",
                description: "Minimalist design language inspired by Apple's design principles",
                icon: "💎"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="apple-card p-8 hover:scale-105 transition-all duration-500 floating-element"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="apple-card p-12">
            <h3 className="text-2xl md:text-4xl font-thin text-white mb-8">
              Interactive Elements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="aspect-square glass-morphism rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 glow-effect"
                >
                  <span className="text-2xl text-white">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 font-light">
              Hover over the elements to see the liquid glass effects in action
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="glass-morphism-dark rounded-full px-8 py-4 inline-block">
          <p className="text-gray-400 font-light">
            Crafted with Apple liquid glass design principles
          </p>
        </div>
      </footer>
    </div>
  )
}
