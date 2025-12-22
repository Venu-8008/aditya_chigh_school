import React from 'react';

const CTA = () => {
    return (
        <section className="relative py-20 bg-cream overflow-hidden">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 to-cream/90"></div>

            <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-gray-900">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            <span className="text-primary">Apply to</span><br />
                            <span className="text-primary">Aditya High School »</span>
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 uppercase tracking-wide">
                                STEP BY STEP: HOW TO APPLY
                            </h3>
                            <div className="w-48 sm:w-64 h-0.5 bg-primary mb-4"></div>
                        </div>

                        <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Applying to a program can be a confusing process. We made this page to help you along the way.
                            If at any point you need help, feel free to reach out to us through <span className="text-primary font-semibold">ask.aditya</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                            <button className="bg-primary border-2 border-primary text-white px-6 sm:px-8 py-3 rounded hover:bg-green-800 transition-all duration-300 font-semibold text-sm sm:text-base">
                                APPLY
                            </button>
                            <button className="bg-transparent border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base">
                                PROGRAMS
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Circular Image Container */}
                            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-primary/20 shadow-2xl">
                                <img
                                    src="/hero2.png"
                                    alt="Student studying"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Apply Now Badge */}
                            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#166938] rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                                <div className="text-center">
                                    <div className="text-white font-black text-lg sm:text-xl lg:text-2xl leading-tight" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        APPLY<br />NOW
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default CTA;
