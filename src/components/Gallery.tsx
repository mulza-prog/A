'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&q=80',
    alt: 'Luxury Bedroom',
    category: 'Bedroom',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    alt: 'Modern Living Room',
    category: 'Living Room',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    alt: 'Spacious Kitchen',
    category: 'Kitchen',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    alt: 'Elegant Bathroom',
    category: 'Bathroom',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1578926078328-123456789012?w=800&q=80',
    alt: 'Stunning Balcony View',
    category: 'Balcony',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1618226527696-2682850db5f4?w=800&q=80',
    alt: 'Premium Furnishings',
    category: 'Furnishings',
  },
];

const categories = ['All', 'Bedroom', 'Living Room', 'Kitchen', 'Bathroom', 'Balcony', 'Furnishings'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.indexOf(image));
  };

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our beautifully designed spaces and get a glimpse of what awaits you
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentImageIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleImageClick(image)}
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn btn-primary">
            Request Custom Tour
          </button>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:scale-125"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl w-full h-96 md:h-screen max-h-screen flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors hover:scale-125"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <p className="text-center">
              <span className="font-semibold">{selectedImage.alt}</span>
              <span className="text-gray-400"> • {selectedImage.category}</span>
            </p>
          </div>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
