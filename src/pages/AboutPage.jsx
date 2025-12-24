import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, BookOpen, Heart } from 'lucide-react';

const AboutPage = () => {
    const stats = [
        { icon: <Users className="w-6 h-6" />, label: "Students", value: "1500+" },
        { icon: <Award className="w-6 h-6" />, label: "Years Excellence", value: "15+" },
        { icon: <BookOpen className="w-6 h-6" />, label: "Expert Faculty", value: "80+" },
        { icon: <Heart className="w-6 h-6" />, label: "Satisfied Parents", value: "1200+" },
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-cream min-h-screen">
            {/* Banner Section */}
            <section className="relative h-[40vh] min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 transform hover:scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
                        filter: "brightness(0.35)"
                    }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-heading"
                    >
                        About Us
                    </motion.h1>

                    {/* Breadcrumbs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium"
                    >
                        <Link to="/" className="text-white/80 hover:text-gold transition-colors">Home</Link>
                        <span className="text-white/60">/</span>
                        <span className="text-gold">About Us</span>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                            Our Legacy of Excellence
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Aditya High School - Proddatur is a premium K-12 educational institution established by the region’s leaders in the education arena. We are known for being the frontrunners in the technical and academic education sector of the region.
                            </p>
                            <p>
                                The school is established to lead the change in the school education scenario by introducing a culture of holistic education. With an uncompromising stance on the need for overall development, we provide intensive academic training along with extensive exposure to children.
                            </p>
                            <p>
                                Our curriculum is globally informed in terms of infrastructure, instructional facilities, faculty, technology, and pedagogy. We provide the much-needed access to comprehensive education to the children of Proddatur and surrounding areas.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        {...fadeIn}
                        className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/20"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541339900282-1717514652e0?q=80&w=2070&auto=format&fit=crop"
                            alt="Aditya School Campus"
                            className="w-full h-[400px] object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeIn}
                            className="bg-cream p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 italic leading-relaxed text-lg">
                                "To lead the way towards global education in the region and integrate education with development of creative intellect, personality and character building."
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="bg-cream p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 italic leading-relaxed text-lg">
                                "To infuse 21st century skills in school education and provide early platform for manifestation of child’s potentialities."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4 text-gold">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold mb-2 text-gold">{stat.value}</div>
                            <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-4 relative overflow-hidden bg-cream">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Philosophy</h2>
                        <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
                            "Authoring academic equity in the region by recalibrating the standards and expanding the dimensions of education through guided exposure to the world and enhancement of the learning outcomes through intensive engagement with the children."
                        </blockquote>
                        <div className="mt-8 flex justify-center space-x-2">
                            <div className="w-12 h-1 bg-primary rounded-full"></div>
                            <div className="w-4 h-1 bg-gold rounded-full"></div>
                            <div className="w-2 h-1 bg-primary/50 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl opacity-50 z-0"></div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900 py-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the Future of Education</h2>
                    <p className="text-gray-400 mb-8 text-lg">Join Aditya High School and give your child the foundation they deserve.</p>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Enroll Now
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
