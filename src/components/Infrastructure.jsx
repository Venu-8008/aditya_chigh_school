import React from 'react';

const Infrastructure = () => {
    const facilities = [
        "Lush Green Campus",
        "State-of-the-Art Infrastructure",
        "Library",
        "Laboratories",
        "Sports & Outdoors",
        "Transportation",
        "IT-Enabled Classrooms",
        "Qualified Facilitators"
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                    Our Infrastructure
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((title, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            {/* Image Placeholder */}
                            <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-center p-4">
                                <span className="text-gray-500 font-bold opacity-60">IMAGE: {title.toUpperCase()}</span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity">
                                <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform">
                                    {title}
                                </h3>
                                <div className="h-1 w-12 bg-secondary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                            Give your child the best education at IDPS Proddatur
                        </h2>
                        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                            Admissions open for the current academic session. Secure your child's future today.
                        </p>
                        <button className="bg-secondary text-primary hover:bg-white hover:text-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105">
                            APPLY NOW
                        </button>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-16 -mb-16"></div>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
