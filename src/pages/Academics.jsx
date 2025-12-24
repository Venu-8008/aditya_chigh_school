import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFlask, faLaptop, faUsers, faChalkboardTeacher, faTrophy, faMicroscope, faCalculator, faGlobe, faPalette, faMusic, faTheaterMasks, faChess, faRobot, faLanguage, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CTA from '../components/CTA';

const Academics = () => {
    // SEO - Update document title and meta tags
    useEffect(() => {
        document.title = 'Academics - Aditya High School Proddatur | CBSE Curriculum Excellence';

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = 'Explore the comprehensive CBSE curriculum at Aditya High School Proddatur. From primary to secondary education, we offer innovative teaching methods, state-of-the-art facilities, and holistic academic programs.';

        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = 'CBSE Curriculum, Academic Programs, Primary Education, Secondary Education, Science Labs, Smart Classrooms, Co-curricular Activities';
    }, []);

    const gradePrograms = [
        {
            title: 'Primary School',
            grades: 'Kindergarten - Grade 5',
            icon: faBook,
            color: 'from-blue-500 to-blue-600',
            description: 'Building strong foundations through play-based and experiential learning.',
            features: [
                'Activity-based learning approach',
                'Focus on literacy and numeracy',
                'Creative arts and music',
                'Physical education and sports',
                'Value education and life skills'
            ]
        },
        {
            title: 'Middle School',
            grades: 'Grade 6 - Grade 8',
            icon: faFlask,
            color: 'from-purple-500 to-purple-600',
            description: 'Developing critical thinking and analytical skills for academic growth.',
            features: [
                'Comprehensive CBSE curriculum',
                'Hands-on laboratory experiments',
                'Language development programs',
                'Technology integration',
                'Project-based learning'
            ]
        },
        {
            title: 'Secondary School',
            grades: 'Grade 9 - Grade 12',
            icon: faChalkboardTeacher,
            color: 'from-green-600 to-green-700',
            description: 'Preparing students for board exams and future academic pursuits.',
            features: [
                'Stream selection (Science, Commerce, Humanities)',
                'Board exam preparation',
                'Career counseling and guidance',
                'Advanced laboratory facilities',
                'Competitive exam coaching'
            ]
        }
    ];

    const teachingMethods = [
        {
            icon: faLaptop,
            title: 'Smart Classrooms',
            description: 'Interactive digital boards and multimedia resources for engaging lessons.'
        },
        {
            icon: faUsers,
            title: 'Collaborative Learning',
            description: 'Group projects and peer learning to develop teamwork and communication.'
        },
        {
            icon: faFlask,
            title: 'Experiential Learning',
            description: 'Hands-on experiments and practical applications of theoretical concepts.'
        },
        {
            icon: faChalkboardTeacher,
            title: 'Personalized Attention',
            description: 'Small class sizes ensuring individual focus on each student\'s needs.'
        }
    ];

    const academicFacilities = [
        {
            icon: faMicroscope,
            title: 'Science Laboratories',
            description: 'Fully equipped Physics, Chemistry, and Biology labs with modern equipment and safety measures.'
        },
        {
            icon: faCalculator,
            title: 'Mathematics Lab',
            description: 'Interactive tools and models to make mathematical concepts tangible and fun.'
        },
        {
            icon: faLaptop,
            title: 'Computer Labs',
            description: 'Latest computers with high-speed internet and modern software for digital literacy.'
        },
        {
            icon: faBook,
            title: 'Library',
            description: 'Extensive collection of books, journals, and digital resources for research and reading.'
        },
        {
            icon: faGlobe,
            title: 'Language Lab',
            description: 'Audio-visual aids and interactive sessions for enhancing language proficiency.'
        },
        {
            icon: faChalkboardTeacher,
            title: 'Smart Classrooms',
            description: 'Digital boards and projectors in every classroom for interactive learning experiences.'
        }
    ];

    const coCurricularActivities = [
        {
            icon: faPalette,
            title: 'Art & Craft',
            description: 'Nurturing creativity through painting, sculpture, and various art forms.'
        },
        {
            icon: faMusic,
            title: 'Music & Dance',
            description: 'Training in vocal, instrumental music, and classical/contemporary dance.'
        },
        {
            icon: faTheaterMasks,
            title: 'Drama & Theatre',
            description: 'Developing confidence and expression through theatrical performances.'
        },
        {
            icon: faChess,
            title: 'Chess Club',
            description: 'Strategic thinking and problem-solving through competitive chess.'
        },
        {
            icon: faRobot,
            title: 'Robotics & Coding',
            description: 'Hands-on experience with robotics kits and programming languages.'
        },
        {
            icon: faLanguage,
            title: 'Debate & Elocution',
            description: 'Enhancing public speaking and critical thinking abilities.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-green-700 to-green-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                    <div className="text-center">
                        {/* Breadcrumb */}
                        <nav className="flex items-center justify-center gap-2 mb-4 text-sm opacity-90 animate-fade-in" style={{ fontFamily: 'Poppins, sans-serif' }} aria-label="Breadcrumb">
                            <a href="/" className="hover:text-gold transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-gold">Academics</span>
                        </nav>

                        {/* Main Heading */}
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 animate-fade-in-up" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Academic <span className="text-gold">Excellence</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in-up-delay" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Empowering minds through comprehensive CBSE curriculum and innovative teaching methodologies
                        </p>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 animate-fade-in-up-delay-2">
                            <div className="w-16 sm:w-20 h-1 bg-gold rounded-full"></div>
                            <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
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

            {/* Curriculum Overview Section with Image */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Our Curriculum
                            </h2>
                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                CBSE Affiliated Education
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                As a proud CBSE-affiliated institution, we follow a comprehensive curriculum designed to foster intellectual curiosity, critical thinking, and holistic development.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Our academic programs are carefully structured to meet national standards while incorporating innovative teaching practices that prepare students for global challenges.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="overflow-hidden rounded-2xl shadow-2xl group">
                                <img
                                    src="/infrastructure.png"
                                    alt="CBSE Curriculum - Modern Classroom"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Teaching Methods Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teachingMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-cream p-6 rounded-xl hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl mb-4 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                                    <FontAwesomeIcon icon={method.icon} />
                                </div>
                                <h4 className="text-lg font-semibold text-primary mb-3 transition-colors duration-300 group-hover:text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    {method.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grade-Wise Programs Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Educational Journey
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Grade-Wise Programs
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {gradePrograms.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                                    {/* Animated background circle */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full transition-transform duration-700 group-hover:scale-150"></div>

                                    <div className="relative z-10">
                                        <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            <FontAwesomeIcon icon={program.icon} />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>
                                            {program.title}
                                        </h4>
                                        <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {program.grades}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4 leading-relaxed text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {program.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {program.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 transition-transform duration-300 hover:translate-x-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Facilities Section with Featured Image */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            World-Class Infrastructure
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Academic Facilities
                        </h3>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our state-of-the-art facilities provide students with the resources they need to excel academically and explore their interests.
                        </p>
                    </div>

                    {/* Featured Facility with Image */}
                    <div className="mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                            <div className="overflow-hidden">
                                <img
                                    src="/about.png"
                                    alt="Science Laboratory - Students conducting experiments"
                                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
                                    <FontAwesomeIcon icon={faMicroscope} className="text-3xl text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    Advanced Science Laboratories
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Our fully equipped Physics, Chemistry, and Biology laboratories feature modern equipment, safety measures, and hands-on learning opportunities that bring scientific concepts to life.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                                        <span>State-of-the-art equipment</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                                        <span>Safety-first environment</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                                        <span>Hands-on experiments</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Facilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {academicFacilities.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-cream p-6 rounded-xl hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-gold">
                                    <FontAwesomeIcon icon={facility.icon} className="text-2xl text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-primary mb-3 transition-colors duration-300 group-hover:text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    {facility.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Co-Curricular Activities Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Beyond Academics
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Co-Curricular Activities
                        </h3>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            We believe in nurturing well-rounded individuals. Our diverse co-curricular programs help students discover their passions and develop essential life skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coCurricularActivities.map((activity, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-4xl mb-4 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                                        <FontAwesomeIcon icon={activity.icon} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary mb-3 transition-colors duration-300 group-hover:text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        {activity.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Excellence Highlight */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="bg-gradient-to-r from-primary to-green-700 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
                        {/* Animated background elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

                        <div className="relative z-10">
                            <div className="text-5xl mb-6 animate-bounce-slow">
                                <FontAwesomeIcon icon={faTrophy} />
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Consistent Academic Excellence
                            </h3>
                            <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Our students consistently achieve outstanding results in CBSE board examinations, with many securing top ranks and gaining admission to premier institutions across India and abroad.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up">
                                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">100%</div>
                                    <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Pass Percentage</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">95%+</div>
                                    <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Students Score Above 90%</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">50+</div>
                                    <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>Academic Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-fade-in {
                    animation: fade-in-up 0.6s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-fade-in-up-delay {
                    animation: fade-in-up 0.8s ease-out 0.2s both;
                }

                .animate-fade-in-up-delay-2 {
                    animation: fade-in-up 0.8s ease-out 0.4s both;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Academics;
