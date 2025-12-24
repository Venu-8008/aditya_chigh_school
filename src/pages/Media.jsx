import React, { useEffect } from 'react';
import Masonry from '../components/Masonry';
import { motion } from 'framer-motion';

const Media = () => {
    useEffect(() => {
        document.title = 'Media & Gallery - Aditya High School Proddatur';
        window.scrollTo(0, 0);
    }, []);

    const masonryItems = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
            url: "#",
            height: 600,
        },
        {
            id: "2",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop",
            url: "#",
            height: 400,
        },
        {
            id: "3",
            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 500,
        },
        {
            id: "4",
            img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
            url: "#",
            height: 450,
        },
        {
            id: "5",
            img: "https://images.unsplash.com/photo-1577891729319-46763a0a386d?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 550,
        },
        {
            id: "6",
            img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 400,
        },
        {
            id: "7",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
            url: "#",
            height: 500,
        },
        {
            id: "8",
            img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 450,
        },
        {
            id: "9",
            img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
            url: "#",
            height: 500,
        },
        {
            id: "10",
            img: "https://images.unsplash.com/photo-1541339900282-1717514652e0?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 600,
        },
        {
            id: "11",
            img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2070&auto=format&fit=crop",
            url: "#",
            height: 450,
        },
        {
            id: "12",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
            url: "#",
            height: 500,
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-green-700 to-green-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <nav className="flex items-center justify-center gap-2 mb-4 text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <a href="/" className="hover:text-gold transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-gold">Media</span>
                        </nav>

                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Our <span className="text-gold">Media Gallery</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Capturing moments of learning, joy, and excellence at Aditya High School.
                        </p>

                        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                            <div className="w-16 sm:w-20 h-1 bg-gold rounded-full"></div>
                            <div className="w-3 h-3 bg-gold rounded-full"></div>
                            <div className="w-16 sm:w-20 h-1 bg-gold rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Masonry Gallery Section */}
            <div className="max-w-[1400px] mx-auto pt-20 px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                        Glimpses of <span className="text-gold">School Life</span>
                    </h2>
                </div>
                <div className="h-fit min-h-[800px]">
                    <Masonry
                        items={masonryItems}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>
            </div>

            {/* Videos Section Placeholder */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Featured <span className="text-gold">Videos</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Watch our students in action, from cultural performances to science exhibitions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg group relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" alt="Video Placeholder" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-white font-semibold">Annual Day Highlights 2024</div>
                        </div>
                        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg group relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop" alt="Video Placeholder" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-white font-semibold">Science Exhibition 2023</div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://www.youtube.com/@IDPSPPRODDATUR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:text-green-800 transition-colors"
                        >
                            Visit Our YouTube Channel
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;
