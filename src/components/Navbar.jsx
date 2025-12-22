import React, { useState } from 'react';
import PillNav from './PillNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#about' },
        { label: 'Admissions', href: '#admissions' },
        { label: 'Academics', href: '#academics' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="w-full sticky top-0 z-50">
            {/* Top Bar - Green background */}
            <div className="bg-primary text-white py-2">
                <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
                    <div className="flex items-center gap-2 sm:gap-6">
                        <span className="flex items-center gap-1 sm:gap-2">
                            <FontAwesomeIcon icon={faPhone} className="text-xs sm:text-sm" />
                            <span className="hidden xs:inline">123456789</span>
                            <span className="xs:hidden">1234567</span>
                        </span>
                        <span className="hidden md:flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            info@adityahighschool.com
                        </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <a href="#" className="hover:text-gold transition-colors flex items-center gap-1">
                            <FontAwesomeIcon icon={faFacebookF} className="text-xs sm:text-sm" />
                        </a>
                        <a href="#" className="hover:text-gold transition-colors flex items-center gap-1">
                            <FontAwesomeIcon icon={faInstagram} className="text-xs sm:text-sm" />
                        </a>
                        <a href="#" className="hover:text-gold transition-colors flex items-center gap-1">
                            <FontAwesomeIcon icon={faYoutube} className="text-xs sm:text-sm" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation - White background with PillNav */}
            <div className="bg-white shadow-md">
                <div className="max-w-[1140px] mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo Section - Left Side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm overflow-hidden">
                            <span className="text-center leading-tight px-1" style={{ fontSize: '8px' }}>AHS</span>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-primary text-sm sm:text-base md:text-lg leading-tight">
                                Aditya High School
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-600">Proddatur</div>
                        </div>
                    </div>

                    {/* Desktop PillNav - Right Side */}
                    <div className="hidden lg:block">
                        <PillNav
                            items={navItems}
                            activeHref="#"
                            baseColor="#166938"
                            pillColor="#FFF9F6"
                            hoveredPillTextColor="#FFF9F6"
                            pillTextColor="#166938"
                            ease="power3.easeOut"
                            initialLoadAnimation={true}
                            hideLogo={true}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 py-4">
                        <div className="flex flex-col space-y-4 px-4">
                            {navItems.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gold hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="bg-gold text-white px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors w-full">
                                Staff/Parents Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

