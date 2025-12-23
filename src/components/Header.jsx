import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span>📞 +91 85008 57111</span>
                        <span>✉️ admin@idpsproddatur.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-secondary transition-colors">Parent Login</a>
                        <span>|</span>
                        <a href="#" className="hover:text-secondary transition-colors">Student Login</a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="bg-brand-bg shadow-md py-3 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo Placeholder */}
                    <div className="flex items-center">
                        <div className="w-48 h-16 bg-gray-300 flex items-center justify-center text-gray-600 font-bold border-2 border-dashed border-gray-400">
                            LOGO PLACEHOLDER
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
                        <a href="#" className="hover:text-primary transition-colors">Home</a>
                        <a href="#" className="hover:text-primary transition-colors">About</a>
                        <a href="#" className="hover:text-primary transition-colors">Academics</a>
                        <a href="#" className="hover:text-primary transition-colors">Admissions</a>
                        <a href="#" className="hover:text-primary transition-colors">Our Campus</a>
                        <a href="#" className="hover:text-primary transition-colors">Media</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact Us</a>

                        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors font-semibold">
                            Admission Enquiry
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary focus:outline-none"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
                        <a href="#" className="hover:text-primary">Home</a>
                        <a href="#" className="hover:text-primary">About</a>
                        <a href="#" className="hover:text-primary">Academics</a>
                        <a href="#" className="hover:text-primary">Admissions</a>
                        <a href="#" className="hover:text-primary">Our Campus</a>
                        <a href="#" className="hover:text-primary">Contact Us</a>
                        <button className="bg-primary text-white px-4 py-2 rounded-md w-full">
                            Admission Enquiry
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
