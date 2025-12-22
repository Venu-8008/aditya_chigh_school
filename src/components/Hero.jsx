import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/hero.png',
        '/hero2.png',
        '/hero3.png',
        '/hero4.png'
    ];

    useEffect(() => {
        // Auto-slide every 5 seconds
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Background Images with slider and zoom effect */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${slide})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        animation: index === currentSlide ? 'zoomInPan 5s ease-out forwards' : 'none'
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-gold w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1140px] mx-auto px-4 h-full flex flex-col justify-center text-white">
                <h1
                    className="font-heading text-[85px] leading-tight mb-6 animate-fade-in"
                    style={{ fontFamily: 'Noto Serif, serif', fontWeight: 400 }}
                >
                    Welcome to Aditya High School
                </h1>
                <p
                    className="text-[18px] mb-8 max-w-2xl font-light leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Aditya High School is a CBSE day cum boarding K-12 school established by the region's leaders
                    in the education arena known for being the frontrunners in the technical education sector.
                </p>
                <div className="flex gap-4">
                    <button className="bg-transparent border-2 border-primary text-white px-6 py-3 rounded text-[15px] font-medium hover:bg-primary transition-all">
                        ABOUT US
                    </button>
                    <button className="bg-gold text-white px-6 py-3 rounded text-[15px] font-medium hover:bg-yellow-500 transition-all">
                        ADMISSIONS
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomInPan {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.15) translate(-2%, -1%);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .hero-slide {
          will-change: transform, opacity;
        }
      `}</style>
        </div>
    );
};

export default Hero;
