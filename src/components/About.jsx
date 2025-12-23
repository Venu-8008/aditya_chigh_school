import React from 'react';

const About = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block">
                            About Us
                            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-secondary"></span>
                        </h2>
                        <h3 className="text-xl text-gray-800 font-semibold mb-6">
                            International Delhi Public School - Proddatur
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We live in a world that is changing faster than ever, and our children need to be equipped
                            not just with knowledge, but with the skills to adapt, innovate, and lead. IDPS Proddatur
                            is committed to providing a holistic education that balances academic excellence with
                            character building.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            As a premier CBSE institution, we focus on nurturing every child's potential through
                            state-of-the-art facilities, experienced mentors, and a curriculum designed for the future.
                        </p>
                        <button className="text-primary font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-4">
                            Read More About Our Vision &rarr;
                        </button>
                    </div>

                    {/* Image Placeholder */}
                    <div className="md:w-1/2 w-full">
                        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center border-4 border-white overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500 font-bold text-xl text-center px-4">
                                    ABOUT US IMAGE PLACEHOLDER<br />
                                    (School Building or Students)
                                </span>
                            </div>
                            {/* Optional decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full z-0"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
