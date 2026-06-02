'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#booking', label: 'Book Now' },
    { href: '/#testimonials', label: 'Reviews' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg md:text-xl">W</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white">
                {process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Westlands BnB'}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Luxury Stay</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* WhatsApp Button - Desktop */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-primary text-sm"
            >
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-center text-sm mt-2"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
