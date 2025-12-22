import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Comprehensive Academics",
            icon: "📚",
            desc: "CBSE curriculum with focus on conceptual learning and practical application."
        },
        {
            title: "World-Class Infrastructure",
            icon: "🏫",
            desc: "State-of-the-art facilities including smart classrooms and modern laboratories."
        },
        {
            title: "Sports Excellence",
            icon: "⚽",
            desc: "Professional coaching and facilities for cricket, football, basketball and more."
        },
        {
            title: "Holistic Development",
            icon: "🎨",
            desc: "Focus on arts, music, dance and personality development programs."
        },
    ];

    return (
        <>
            {/* About Section - Cream Background */}
            <section className="py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                About Aditya High School
                            </h3>
                            <h2 className="font-heading text-4xl text-primary mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Whats Makes Aditya High School Unique
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                                Aditya High School is a premier educational institution
                                committed to providing world-class education. We believe in nurturing young minds through
                                a perfect blend of academics, sports, and co-curricular activities.
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                                Our experienced faculty, modern infrastructure, and student-centric approach make us
                                the preferred choice for parents seeking quality education for their children.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "CBSE Affiliated K-12 School",
                                    "Day & Boarding Facilities",
                                    "Experienced & Qualified Faculty",
                                    "Focus on Character Building"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <span className="text-primary mr-3 text-xl">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-primary text-white px-8 py-3 rounded text-[15px] font-medium hover:bg-green-800 transition-all">
                                Learn More
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="/about.png"
                                alt="Students Learning"
                                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid - White Background */}
            <section className="py-20 bg-white" id="why-choose-section">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="mb-12">
                        <p className="text-gold text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            WHY CHOOSE US
                        </p>
                        <h2 className="font-heading text-4xl mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Why <span className="text-primary">Aditya High School</span> is The Right Choice for You
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column - 2 smaller cards */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="feature-card bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">👨‍🏫</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    Expert Instructors
                                </h3>
                                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                    Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.
                                </p>
                            </div>

                            <div className="feature-card bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    100+ High Impact Courses
                                </h3>
                                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                    Aditya High School offers comprehensive programs that cover essential skills in today's education landscape. Whether you're a beginner or an advanced learner, our curriculum provides practical, hands-on learning to help you excel.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - 2 cards stacked */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="feature-card bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    Career-Boost Certify
                                </h3>
                                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                    Earn certifications that are highly regarded by employers, helping you to enhance your resume, gain industry recognition, and open doors to new career opportunities.
                                </p>
                            </div>

                            {/* Featured Large Card */}
                            <div className="feature-card bg-primary text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">📅</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        Flexible Learning Schedules
                                    </h3>
                                    <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                        At Aditya High School, we understand the importance of balancing learning with a busy lifestyle. That's why our courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
                                    </p>
                                    <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                        Whether you're a working professional or a student, you can customize your schedule to fit your needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .feature-card {
                        opacity: 0;
                        transform: translateY(30px);
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    
                    .feature-card:nth-child(1) {
                        animation-delay: 0.1s;
                    }
                    
                    .feature-card:nth-child(2) {
                        animation-delay: 0.2s;
                    }
                    
                    .feature-card:nth-child(3) {
                        animation-delay: 0.3s;
                    }
                    
                    .feature-card:nth-child(4) {
                        animation-delay: 0.4s;
                    }
                    
                    @keyframes fadeInUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </section>

            {/* Infrastructure Section - Cream Background */}
            <section className="py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="/infrastructure.png"
                                alt="School Infrastructure"
                                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Our Campus
                            </h3>
                            <h2 className="font-heading text-4xl text-primary mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                World-Class Infrastructure
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                                Our sprawling campus is equipped with state-of-the-art facilities designed to provide
                                students with the best learning environment. From smart classrooms to advanced laboratories,
                                we have everything needed for comprehensive education.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Smart Digital Classrooms",
                                    "Science & Computer Labs",
                                    "Sports Complex & Playground",
                                    "Library & Resource Center",
                                    "Auditorium & Activity Rooms",
                                    "Safe Transportation"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <span className="text-primary mr-3 text-xl">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
