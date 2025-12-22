import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="font-heading text-2xl mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Aditya High School
                        </h3>
                        <p className="text-sm opacity-90 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            A CBSE day cum boarding K-12 school established by the region's leaders in the
                            education arena, known for being frontrunners in technical education.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                                <FontAwesomeIcon icon={faYoutube} className="text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Home</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">About Us</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Admissions</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Academics</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Facilities</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Academics */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Academics
                        </h3>
                        <ul className="space-y-3 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Curriculum</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Teaching Methodology</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Examination System</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Results</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors opacity-90 hover:opacity-100">Achievements</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Contact Us
                        </h3>
                        <div className="space-y-4 text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gold mt-1" />
                                <p>Aditya High School<br />Proddatur, Andhra Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="text-gold" />
                                <a href="tel:+918500857111" className="hover:text-gold transition-colors">
                                    +91 1234567890
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gold" />
                                <a href="mailto:info@adityahighschool.com" className="hover:text-gold transition-colors">
                                    info@adityahighschool.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-sm opacity-75" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        © {new Date().getFullYear()} Aditya High School - Proddatur. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
