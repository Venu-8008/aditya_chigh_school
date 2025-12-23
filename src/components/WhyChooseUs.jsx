import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            title: "Comprehensive Academics",
            desc: "A curriculum that integrates CBSE standards with global best practices.",
            icon: "📚"
        },
        {
            title: "All-Round Development",
            desc: "Focus on sports, arts, and life skills alongside studies.",
            icon: "🏆"
        },
        {
            title: "Education Technology",
            desc: "Smart classrooms and digital learning tools for modern education.",
            icon: "💻"
        },
        {
            title: "Life Beyond IDPS",
            desc: "Preparing students for future careers and global citizenship.",
            icon: "🌍"
        }
    ];

    return (
        <section className="py-16 bg-brand-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        What makes IDPS Proddatur unique is our unwavering commitment to excellence in every aspect of a child's growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center group border-b-4 border-transparent hover:border-secondary">
                            <div className="w-16 h-16 mx-auto bg-green-50 text-4xl flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
