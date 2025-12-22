import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import CircularText from './CircularText';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) {
                setTimeout(onComplete, 500); // Wait for fade-out animation
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isVisible) {
        return (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-primary z-[100] flex items-center justify-center"
                onAnimationComplete={() => {
                    // Component will unmount after animation
                }}
            >
                <div className="relative">
                    {/* School Logo in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-2xl">AHS</span>
                        </div>
                    </div>

                    {/* Circular Text */}
                    <CircularText
                        text="ADITYA HIGH SCHOOL * PRODDATUR * "
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-preloader"
                    />
                </div>
            </motion.div>
        );
    }

    return (
        <div className="fixed inset-0 bg-primary z-[100] flex items-center justify-center">
            <div className="relative">
                {/* School Logo in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-primary font-bold text-2xl">AHS</span>
                    </div>
                </div>

                {/* Circular Text */}
                <CircularText
                    text="ADITYA HIGH SCHOOL * PRODDATUR * "
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-preloader"
                />
            </div>
        </div>
    );
};

export default Preloader;
