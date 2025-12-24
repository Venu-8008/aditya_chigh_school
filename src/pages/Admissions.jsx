import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUserGraduate, faClipboardCheck, faIdCard, faBirthdayCake, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Admissions = () => {
    useEffect(() => {
        document.title = 'Admissions - Aditya High School Proddatur';
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Admission enquiry submitted! We will contact you shortly.');
    };

    const ageCriteria = [
        { class: 'PP1', age: '3+ years', date: 'as on Aug 31st' },
        { class: 'PP2', age: '4+ years', date: 'as on Aug 31st' },
        { class: 'Class I - VII', age: '5+ years', date: 'as on Aug 31st' },
    ];

    const documents = [
        "Birth Certificate (Original & Photocopy)",
        "Previous School Transfer Certificate (TC)",
        "Previous School Progress Report/Marks Card",
        "Aadhar Card of Student and Parents",
        "Passive Passport size photographs (4 nos)",
        "Community Certificate (if applicable)"
    ];

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
                            <span className="text-gold">Admissions</span>
                        </nav>

                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                            Start Your Journey <span className="text-gold">With Us</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Join a community of learners where excellence is nurtured and character is built. Admissions are open for the upcoming academic year.
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

            {/* Admission Process Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Admission Procedures
                            </h2>
                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary mb-6" style={{ fontFamily: 'Noto Serif, serif' }}>
                                Smooth and Transparent Process
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Admission is granted based on the vacancies and it is not denied on the basis of caste, creed, sex, etc. We believe in providing equal opportunities to all aspiring students.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-5 bg-cream rounded-2xl border-l-4 border-gold shadow-sm">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary shadow-sm">
                                        <FontAwesomeIcon icon={faClipboardCheck} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Informal Test</h4>
                                        <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            Though not mandatory, it is recommended for students to take an informal test (30-60 min) to understand their prior knowledge.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-5 bg-cream rounded-2xl border-l-4 border-primary shadow-sm">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary shadow-sm">
                                        <FontAwesomeIcon icon={faUserGraduate} className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Evaluation</h4>
                                        <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            There are no pass marks. The test serves as a tool to help teachers and parents understand the student's needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gold/10 rounded-3xl transform rotate-2 transition-transform group-hover:rotate-0 duration-500"></div>
                            <img
                                src="https://www.idpsproddatur.com/wp-content/uploads/2023/07/DSC00431-1024x683.jpg"
                                alt="Classroom environment"
                                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Age Criteria & Documents Section */}
            <section className="py-16 bg-cream/50 overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Age Criteria */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                                    <FontAwesomeIcon icon={faBirthdayCake} className="text-xl" />
                                </div>
                                <h3 className="font-heading text-2xl sm:text-3xl text-primary" style={{ fontFamily: 'Noto Serif, serif' }}>Age Criteria</h3>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-gray-100">
                                <table className="w-full text-left">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Class</th>
                                            <th className="px-6 py-4 font-semibold">Eligibility</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {ageCriteria.map((item, index) => (
                                            <tr key={index} className="hover:bg-cream transition-colors">
                                                <td className="px-6 py-4 font-bold text-primary">{item.class}</td>
                                                <td className="px-6 py-4 text-gray-600">
                                                    <span className="font-semibold text-gold">{item.age}</span> {item.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-6 text-sm text-gray-500 italic">
                                * Example: If a student seeks admission into 5th class, he/she should be 9+ years as on Aug 31st.
                            </p>
                        </motion.div>

                        {/* Documents Required */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
                                </div>
                                <h3 className="font-heading text-2xl sm:text-3xl text-primary" style={{ fontFamily: 'Noto Serif, serif' }}>Documents Required</h3>
                            </div>

                            <ul className="space-y-4">
                                {documents.map((doc, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-gold mt-1" />
                                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>{doc}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                <p className="text-sm text-primary font-medium flex items-center gap-2">
                                    <FontAwesomeIcon icon={faIdCard} />
                                    Original TC is mandatory for Class II and above.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Admission Inquiry Form */}
            <section className="py-20 bg-white">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="bg-primary rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-10 sm:p-16 text-white flex flex-col justify-center">
                            <h2 className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Admission Enquiry</h2>
                            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">Begin the application process today.</h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                Fill out the form below, and our admissions team will get in touch with you to guide you through the next steps.
                            </p>

                            <div className="hidden lg:block w-32 h-1 bg-gold rounded-full"></div>
                        </div>

                        <div className="lg:w-1/2 bg-cream/95 p-10 sm:p-16">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name*</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Applying for Class*</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                                            <option>Select Class</option>
                                            <option>Pre-Primary (PP1)</option>
                                            <option>Pre-Primary (PP2)</option>
                                            <option>Class I</option>
                                            <option>Class II</option>
                                            <option>Class III</option>
                                            <option>Class IV</option>
                                            <option>Class V</option>
                                            <option>Class VI</option>
                                            <option>Class VII</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Parent/Guardian Name*</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number*</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Comments</label>
                                    <textarea
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gold text-primary font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    SUBMIT ENQUIRY
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
