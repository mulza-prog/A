'use client';

import Image from 'next/image';
import { CheckCircle, MapPin, Users, Award } from 'react-icons/fa';

export default function About() {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Westlands BnB';
  const locationAddress = process.env.NEXT_PUBLIC_LOCATION_ADDRESS || 'Westlands, Nairobi, Kenya';

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategically located in Westlands, close to major business districts and attractions',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated support team available 24/7 to ensure your comfort and satisfaction',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'State-of-the-art amenities and meticulous attention to detail in every aspect',
    },
  ];

  const highlights = [
    { number: '500+', label: 'Happy Guests' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=600&q=80"
                alt={businessName}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-xs">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Award Winning</p>
              <p className="font-bold text-gray-900 dark:text-white">Best BnB in Westlands</p>
              <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">2023 - 2024</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up animation-delay-200">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to <span className="text-gradient">{businessName}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              Located in the heart of Westlands, {businessName} offers a unique blend of luxury, comfort, and convenience. Our beautifully appointed one-bedroom apartment is designed to provide the perfect sanctuary for discerning travelers who appreciate quality and attention to detail.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Fully equipped modern amenities',
                'WiFi, Smart TV, and premium entertainment',
                'Close proximity to Sarit Centre and business districts',
                'Exceptional housekeeping and maintenance',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card text-center">
                    <Icon className="text-primary-500 mx-auto mb-3" size={28} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex gap-4">
              <a href="/#gallery" className="btn btn-primary">
                View Gallery
              </a>
              <a href="/#booking" className="btn btn-outline">
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-gray-200 dark:border-gray-700">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {highlight.number}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
