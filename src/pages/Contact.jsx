import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us - Aditya High School Proddatur';
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your enquiry. We will get back to you soon!');
    };

    return (
        <div className="min-h-screen bg-white">
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
                            <span className="text-gold">Contact Us</span>
                        </nav>

                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Get in <span className="text-gold">Touch</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Have questions? We're here to help. Contact us for admissions, enquiries, or support.
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

            {/* Contact Details & Form Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Contact Information
                            </h2>
                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Reach Out to Us
                            </h3>

                            <div className="space-y-8 mt-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Visit Us</h4>
                                        <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            Aditya High School, Proddatur,<br />Andhra Pradesh, India - 516360
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <FontAwesomeIcon icon={faPhone} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Call Us</h4>
                                        <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            +91 12345 67890<br />+91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Email Us</h4>
                                        <p className="text-gray-600 text-sm sm:text-base break-all" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            info@adityahighschool.com<br />admissions@adityahighschool.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                                        <FontAwesomeIcon icon={faClock} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Working Hours</h4>
                                        <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            Mon - Sat: 8:30 AM - 4:30 PM<br />Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Image */}
                            <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://www.idpsproddatur.com/wp-content/uploads/2023/07/DSC00427-1024x683.jpg"
                                    alt="Aditya School Students"
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Enquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-cream p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-6 font-normal" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Quick Enquiry
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Name*</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Email Address*</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone Number*</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Enter your mobile number"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Message*</label>
                                    <textarea
                                        required
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    SUBMIT ENQUIRY
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] sm:h-[500px] w-full bg-gray-100 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.640578619632!2d78.5471158!3d14.73177705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb394d776109961%3A0x7d9f7833a6f7b76a!2sProddatur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aditya High School Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
