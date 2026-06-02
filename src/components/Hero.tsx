'use client';

import Link from 'next/link';
import { ChevronDown } from 'react-icons/fa';

export default function Hero() {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Westlands BnB';
  const locationDistance = process.env.NEXT_PUBLIC_LOCATION_DISTANCE || '2.4 km from Sarit Centre';

  return (
    <section className="hero relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
              ✨ Luxury Accommodation in Westlands
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your Perfect <span className="text-gradient">Stay Awaits</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience luxury and comfort in our beautiful one-bedroom apartment. {locationDistance} from Sarit Centre with world-class amenities and exceptional service.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Amenities</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">WiFi, AC, Smart TV & More</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prime Location</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{locationDistance}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Always Available for You</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/#booking" className="btn btn-primary text-lg px-8 py-4">
              Book Your Stay
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-lg px-8 py-4"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Price Highlight */}
          <div className="inline-block bg-white dark:bg-gray-800 rounded-lg px-6 py-3 shadow-lg">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Starting from</p>
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              ${process.env.NEXT_PUBLIC_PRICE_PER_NIGHT || '80'} <span className="text-lg text-gray-600 dark:text-gray-400">/night</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="/#about" className="flex flex-col items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          <span className="text-sm font-semibold mb-2">Scroll to Explore</span>
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
}
