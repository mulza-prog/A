'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'emmanuelmulevu@yahoo.com';
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0727994408';
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Westlands BnB';
  const businessLocation = process.env.NEXT_PUBLIC_LOCATION_ADDRESS || 'Westlands, Nairobi, Kenya';

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <h3 className="text-lg font-bold">{businessName}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury accommodation in the heart of Westlands. Your home away from home with world-class amenities and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <a href={`mailto:${businessEmail}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {businessEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <a href={`tel:${businessPhone}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {businessPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                  <p className="text-gray-400 text-sm">{businessLocation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock size={18} className="text-primary-400 mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <span className="text-gray-300">Monday - Friday</span>
                  <br />
                  6:00 AM - 11:00 PM
                </p>
                <p>
                  <span className="text-gray-300">Saturday - Sunday</span>
                  <br />
                  24/7 Available
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Contact us anytime for inquiries
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {businessName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Booking Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all z-40"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.87 1.246-2.945 3.066-2.945 5.824 0 1.631.423 3.343 1.291 4.91l-1.37 5.001 5.199-1.359c1.454.842 3.022 1.287 4.649 1.287 5.147 0 9.182-4.013 9.182-8.944 0-2.396-.928-4.665-2.641-6.346-1.746-1.812-4.131-2.81-6.738-2.81z" />
        </svg>
      </a>
    </footer>
  );
}
