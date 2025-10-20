'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/20'
          : 'bg-gradient-to-b from-slate-900/80 to-transparent'
      } border-b border-amber-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 rounded-xl flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-amber-500/40 group-hover:shadow-amber-500/60 transition-shadow duration-300">
                MO
              </div>
              <div className="absolute inset-0 bg-amber-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Mokal
              </h1>
              <p className="text-xs text-amber-400/80 font-semibold">Premium Constructions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/details' },
              { label: 'Contact', href: '/contacts' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="px-5 py-2 text-amber-400 border-2 border-amber-400/50 rounded-lg font-semibold text-sm hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
            >
              📞 Call Now
            </a>
            <Link
              href="/contacts"
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 px-4 border-t border-amber-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/details' },
                { label: 'Contact', href: '/contacts' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-amber-400/10"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-amber-500/20 space-y-3 mt-4">
                <a
                  href="tel:+919876543210"
                  className="block w-full px-4 py-2 text-center text-amber-400 border-2 border-amber-400/50 rounded-lg font-semibold text-sm hover:bg-amber-400/10 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  📞 Call Now
                </a>
                <Link
                  href="/contacts"
                  className="block w-full px-4 py-2 text-center bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 rounded-lg font-bold text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
