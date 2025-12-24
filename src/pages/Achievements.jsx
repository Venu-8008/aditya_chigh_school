import React, { useState, useRef } from 'react';

const Achievements = () => {
    const [selectedYear, setSelectedYear] = useState(null);

    const startYear = 1990;
    const endYear = 2026;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => (startYear + i).toString());

    const achievementCategories = years.map(year => ({
        link: `#year-${year}`,
        text: year,
        image: `/achievements_${year}.png`
    }));

    const genericData = {
        title: 'Excellence in Education',
        description: 'A year of significant growth and academic achievement, fostering a culture of holistic development and innovation.',
        highlights: [
            'Achieved 100% results in board examinations',
            'Expanded digital learning infrastructure',
            'Won multiple district-level sports competitions',
            'Successfully organized annual cultural fest',
            'Enhanced student-led leadership initiatives',
            'Strengthened community outreach programs'
        ],
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
    };

    const specificAchievements = {
        '1994': {
            title: 'Academic Excellence - 1994',
            description: 'In 1994, Aditya High School marked its establishment year with remarkable achievements in academics and infrastructure development.',
            highlights: [
                'School established with state-of-the-art facilities',
                'First batch of 150 students enrolled',
                'Achieved 95% pass rate in first year',
                'Introduced innovative teaching methodologies',
                'Established science and computer laboratories',
                'Launched sports and cultural programs'
            ],
            image: '/achievements_1994.png'
        },
        '1995': {
            title: 'Sports Champions - 1995',
            description: 'The year 1995 witnessed our students excelling in various sports competitions at district and state levels.',
            highlights: [
                'Won District Cricket Championship',
                'Gold medal in State Athletics Meet',
                'Established dedicated sports complex',
                'Introduced professional coaching programs',
                'Hosted inter-school sports tournament',
                'Achieved recognition as Sports Excellence School'
            ],
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop'
        },
        '1996': {
            title: 'Cultural Arts - 1996',
            description: 'Our students showcased exceptional talent in cultural activities, winning numerous awards in music, dance, and drama.',
            highlights: [
                'First prize in State Cultural Festival',
                'Organized annual cultural extravaganza',
                'Launched music and dance academies',
                'Won Best School Band competition',
                'Students performed at national events',
                'Established art gallery and exhibition hall'
            ],
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop'
        },
        '1997': {
            title: 'Leadership & Service - 1997',
            description: 'Students demonstrated exceptional leadership qualities through various community service initiatives and student council activities.',
            highlights: [
                'Launch of community outreach programs',
                'Established student leadership council',
                'Organized blood donation camps',
                'Initiated environmental awareness campaigns',
                'Won Best Student Council Award',
                'Conducted free education programs for underprivileged'
            ],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
        },
        '2024': {
            title: 'Digital Innovation Milestone - 2024',
            description: 'A transformative year focusing on AI-integrated learning and modernizing our global connectivity.',
            highlights: [
                'Implemented AI-driven personalized learning paths',
                'State-of-the-art STEM innovation lab inaugurated',
                'National rank in Robotics competition',
                '100% digital classroom transition completed',
                'Global partnership with international schools',
                'Sustainable green campus certification'
            ],
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop'
        },
        '2025': {
            title: 'Future Leaders Program - 2025',
            description: 'Empowering students with 21st-century skills and leadership opportunities on a global stage.',
            highlights: [
                'Launched Global Leadership Exchange program',
                'New multi-purpose auditorium completed',
                'Record-breaking university admissions',
                'Innovation excellence award from state government',
                'Expansion of sports complex with Olympic-grade track',
                'Successfully hosted National Student Summit'
            ],
            image: 'https://images.unsplash.com/photo-1541339900282-1717514652e0?q=80&w=2070&auto=format&fit=crop'
        },
        '2026': {
            title: 'Excellence Reimagined - 2026',
            description: 'Continuing our legacy of excellence with renewed vigor and cutting-edge educational breakthroughs.',
            highlights: [
                'Celebration of decades of academic supremacy',
                'Launch of specialized career-readiness modules',
                'Excellence in research and development initiatives',
                'Modernized residential facilities for boarding students',
                'Pioneering virtual reality labs for intricate subjects',
                'Ranked #1 School in the Region for Holistic Development'
            ],
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
        }
    };

    const getAchievementData = (year) => {
        return specificAchievements[year] || {
            ...genericData,
            title: `Excellence in Education - ${year}`,
            image: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop`
        };
    };

    const handleYearClick = (year) => {
        setSelectedYear(selectedYear === year ? null : year);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header Section */}
            <section className="relative bg-gradient-to-br from-primary via-green-700 to-green-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                    <div className="text-center">
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 mb-4 text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <a href="/" className="hover:text-gold transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-gold">Achievements</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Our <span className="text-gold">Achievements</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Celebrating excellence, dedication, and the remarkable accomplishments of our students and faculty
                        </p>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                            <div className="w-16 sm:w-20 h-1 bg-gold rounded-full"></div>
                            <div className="w-3 h-3 bg-gold rounded-full"></div>
                            <div className="w-16 sm:w-20 h-1 bg-gold rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Years Section with Inline Accordions */}
            <section className="py-12 sm:py-16 lg:py-20 bg-primary">
                <div className="max-w-[1140px] mx-auto px-4 mb-8">
                    <div className="text-center">
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Explore Our <span className="text-gold">Achievement Years</span>
                        </h2>
                        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Click on any year to discover our remarkable accomplishments
                        </p>
                    </div>
                </div>

                {/* Custom Year Menu with Inline Accordions */}
                <div className="max-w-[1140px] mx-auto px-4">
                    {achievementCategories.map((category, index) => (
                        <div key={category.text}>
                            {/* Year Button */}
                            <div
                                className="relative overflow-hidden cursor-pointer group"
                                onClick={() => handleYearClick(category.text)}
                                style={{
                                    height: selectedYear === category.text ? 'auto' : '150px',
                                    minHeight: '150px'
                                }}
                            >
                                <div className="h-[150px] flex items-center justify-center relative bg-primary border-b border-white/20">
                                    <h3 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold transition-colors group-hover:text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        {category.text}
                                    </h3>
                                </div>
                            </div>

                            {/* Accordion - Appears right after the year */}
                            {selectedYear === category.text && (
                                <div className="bg-white py-8 sm:py-12 border-b border-white/20" style={{
                                    animation: 'expandDown 0.5s ease-out'
                                }}>
                                    <div className="max-w-[1000px] mx-auto px-4">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                            {/* Left Side - Content */}
                                            <div className="order-2 lg:order-1" style={{
                                                animation: 'fadeInLeft 0.6s ease-out'
                                            }}>
                                                <h3 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Year {category.text}
                                                </h3>
                                                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 sm:mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                                    {getAchievementData(category.text).title}
                                                </h2>
                                                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    {getAchievementData(category.text).description}
                                                </p>
                                                <ul className="space-y-3 sm:space-y-4">
                                                    {getAchievementData(category.text).highlights.map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                            <span className="text-primary mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Right Side - Image */}
                                            <div className="order-1 lg:order-2" style={{
                                                animation: 'fadeInRight 0.6s ease-out'
                                            }}>
                                                <div className="overflow-hidden rounded-lg shadow-2xl">
                                                    <img
                                                        src={getAchievementData(category.text).image}
                                                        alt={getAchievementData(category.text).title}
                                                        className="w-full h-64 sm:h-80 lg:h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes expandDown {
                        from {
                            opacity: 0;
                            max-height: 0;
                        }
                        to {
                            opacity: 1;
                            max-height: 2000px;
                        }
                    }

                    @keyframes fadeInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}</style>
            </section>

            {/* Page Footer Section */}
            <section className="bg-cream py-12 sm:py-16 lg:py-20">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center">
                        {/* Section Title */}
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Join Our Legacy of Excellence
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Be part of a community that nurtures talent, celebrates success, and creates future leaders.
                            Your journey to excellence starts here.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-primary text-white px-8 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Apply for Admission
                            </button>
                            <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Contact Us
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    500+
                                </div>
                                <div className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Awards Won
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    98%
                                </div>
                                <div className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Success Rate
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    50+
                                </div>
                                <div className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    National Medals
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    100+
                                </div>
                                <div className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    State Champions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achievements;
