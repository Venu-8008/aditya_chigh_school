import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChartLine, faChalkboardTeacher, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    const stats = [
        { number: 1500, suffix: '+', label: 'Students', icon: faUserGraduate },
        { number: 95, suffix: '%', label: 'Success Rate', icon: faChartLine },
        { number: 50, suffix: '+', label: 'Expert Teachers', icon: faChalkboardTeacher },
        { number: 15, suffix: '+', label: 'Years of Excellence', icon: faTrophy },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    const AnimatedNumber = ({ target, suffix }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }, [isVisible, target]);

        return (
            <span>
                {count}{suffix}
            </span>
        );
    };

    return (
        <section ref={statsRef} className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-[1140px] mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                        Our Achievements in Numbers
                    </h2>
                    <p className="text-white/90" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                        Building excellence through dedication and commitment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                        >
                            <div className="text-5xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                                <FontAwesomeIcon icon={stat.icon} />
                            </div>
                            <div className="text-5xl font-bold mb-2 text-gold" style={{ fontFamily: 'Noto Serif, serif' }}>
                                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                            </div>
                            <div className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

