import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faLightbulb, faHeart, faTrophy, faGlobe, faLaptop, faFlask, faBook, faFutbol, faTheaterMasks, faBus, faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';
import CTA from '../components/CTA';

const About = () => {
    // SEO - Update document title and meta tags
    useEffect(() => {
        document.title = 'About Us - Aditya High School Proddatur | Premier CBSE School';

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = 'Learn about Aditya High School Proddatur - A premier CBSE affiliated K-12 institution committed to academic excellence, holistic development, and nurturing future leaders since 1994.';

        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = 'Aditya High School, CBSE School Proddatur, Best School Andhra Pradesh, K-12 Education, Boarding School, Academic Excellence';
    }, []);

    const coreValues = [
        {
            icon: faGraduationCap,
            title: 'Academic Excellence',
            description: 'Committed to providing world-class education with innovative teaching methodologies and comprehensive curriculum.'
        },
        {
            icon: faHandshake,
            title: 'Integrity',
            description: 'Fostering honesty, transparency, and ethical behavior in all aspects of school life.'
        },
        {
            icon: faLightbulb,
            title: 'Innovation',
            description: 'Encouraging creative thinking, problem-solving, and embracing new technologies in education.'
        },
        {
            icon: faHeart,
            title: 'Compassion',
            description: 'Building a caring community that values empathy, kindness, and social responsibility.'
        },
        {
            icon: faTrophy,
            title: 'Excellence',
            description: 'Striving for the highest standards in academics, sports, arts, and character development.'
        },
        {
            icon: faGlobe,
            title: 'Global Perspective',
            description: 'Preparing students to be responsible global citizens with cultural awareness and understanding.'
        }
    ];

    const facilities = [
        { icon: faLaptop, name: 'Smart Classrooms', description: 'Digital learning environment' },
        { icon: faFlask, name: 'Science Labs', description: 'State-of-the-art laboratories' },
        { icon: faBook, name: 'Library', description: 'Extensive collection of books' },
        { icon: faFutbol, name: 'Sports Complex', description: 'Multi-sport facilities' },
        { icon: faTheaterMasks, name: 'Auditorium', description: 'Modern performance venue' },
        { icon: faBus, name: 'Transportation', description: 'Safe school buses' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-green-700 to-green-900 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                    <div className="text-center">
                        {/* Breadcrumb */}
                        <nav className="flex items-center justify-center gap-2 mb-4 text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }} aria-label="Breadcrumb">
                            <a href="/" className="hover:text-gold transition-colors">Home</a>
                            <span>/</span>
                            <span className="text-gold">About Us</span>
                        </nav>

                        {/* Main Heading */}
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            About <span className="text-gold">Aditya High School</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Nurturing minds, building character, and shaping future leaders since 1994
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

            {/* Our Story Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Our Story
                            </h2>
                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4 sm:mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                A Legacy of Educational Excellence
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Established in 1994, Aditya High School has been at the forefront of quality education in Proddatur, Andhra Pradesh. Founded with a vision to provide world-class education accessible to all, we have grown from a small institution to one of the region's most respected educational establishments.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                As a CBSE-affiliated K-12 institution, we combine academic rigor with holistic development, ensuring our students excel not just in examinations but in life. Our state-of-the-art infrastructure, experienced faculty, and student-centric approach have helped thousands of students achieve their dreams.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Today, we stand proud as a beacon of educational excellence, with alumni making their mark across the globe in various fields.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="/about.png"
                                alt="Aditya High School Campus"
                                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Our Mission & Vision
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                                <FontAwesomeIcon icon={faBullseye} className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                To provide a nurturing and stimulating environment that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens. We are committed to fostering creativity, critical thinking, and a lifelong love for learning.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                                <FontAwesomeIcon icon={faEye} className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                To be recognized as a leading educational institution that shapes future leaders who are academically proficient, socially responsible, and morally upright. We envision creating a community of learners who contribute positively to society and make a difference in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            What We Stand For
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Our Core Values
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                                    <FontAwesomeIcon icon={value.icon} />
                                </div>
                                <h4 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal's Message Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cream">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                            {/* Image */}
                            <div className="lg:col-span-1">
                                <img
                                    src="/infrastructure.png"
                                    alt="Principal - Aditya High School"
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-2 p-8 sm:p-10 lg:p-12">
                                <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Leadership
                                </h2>
                                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    Principal's Message
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    "Welcome to Aditya High School, where we believe that every child is unique and has the potential to excel. Our commitment is to provide an environment that nurtures this potential and helps each student discover their strengths."
                                </p>
                                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    At Aditya High School, we don't just focus on academic achievements; we emphasize the overall development of our students. Through our comprehensive curriculum, co-curricular activities, and value-based education, we prepare students to face the challenges of tomorrow with confidence and integrity.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    I invite you to join our family and experience the Aditya difference – where education meets excellence, and dreams take flight.
                                </p>
                                <div className="mt-6">
                                    <p className="font-semibold text-primary" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        Dr. Rajesh Kumar
                                    </p>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Principal, Aditya High School
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Overview */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            World-Class Infrastructure
                        </h2>
                        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Our Facilities
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {facilities.map((facility, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-cream rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <FontAwesomeIcon icon={facility.icon} className="text-3xl text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                </div>
                                <h4 className="font-semibold text-primary mb-1 text-sm" style={{ fontFamily: 'Noto Serif, serif' }}>
                                    {facility.name}
                                </h4>
                                <p className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {facility.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </div>
    );
};

export default About;
