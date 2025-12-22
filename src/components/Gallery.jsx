import React from 'react';
import modernClassroom from '../assets/modern_classroom.png';
import sportsField from '../assets/sports_field.png';
import scienceLab from '../assets/science_laboratory.png';
import culturalEvent from '../assets/cultural_event.png';
import library from '../assets/school_library.png';
import annualDay from '../assets/annual_day.png';

const Gallery = () => {
    const galleryImages = [
        { title: "Modern Classrooms", category: "Infrastructure", image: modernClassroom },
        { title: "Sports Activities", category: "Sports", image: sportsField },
        { title: "Science Labs", category: "Academics", image: scienceLab },
        { title: "Cultural Events", category: "Events", image: culturalEvent },
        { title: "Library", category: "Infrastructure", image: library },
        { title: "Annual Day", category: "Events", image: annualDay }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-cream">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h3 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Campus Life
                    </h3>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-3 sm:mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                        Glimpses of Our Vibrant Campus
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Experience the energy and excellence of Aditya High School
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {galleryImages.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-300">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gold font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.category}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-bl-full"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                    <button className="bg-primary text-white px-6 sm:px-8 py-3 rounded text-sm sm:text-[15px] font-medium hover:bg-green-800 transition-all hover:scale-105">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
