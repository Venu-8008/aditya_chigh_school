import React from 'react';
import parent1 from '../assets/parent1.png';
import parent2 from '../assets/parent2.png';
import parent3 from '../assets/parent3.png';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Parent of Grade 10 Student",
            image: parent1,
            text: "Aditya High School has been instrumental in shaping my child's future. The teachers are dedicated, and the infrastructure is world-class. Highly recommended!"
        },
        {
            name: "Priya Sharma",
            role: "Parent of Grade 7 Student",
            image: parent2,
            text: "The holistic approach to education at Aditya High School is commendable. My daughter has excelled not just academically but also in sports and arts."
        },
        {
            name: "Anil Reddy",
            role: "Parent of Grade 12 Student",
            image: parent3,
            text: "The boarding facilities are excellent, and the care taken for students is exceptional. Aditya High School has truly become a second home for my son."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Testimonials
                    </h3>
                    <h2 className="font-heading text-4xl text-primary mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                        What Parents Say About Us
                    </h2>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                        Hear from our community of satisfied parents
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-cream p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
                        >
                            {/* Quote Icon */}
                            <div className="text-6xl text-gold/20 absolute top-4 right-4" style={{ fontFamily: 'Georgia, serif' }}>
                                "
                            </div>

                            <div className="relative z-10">
                                {/* Profile Image */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed italic" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>
                                    "{testimonial.text}"
                                </p>
                                <div className="text-center">
                                    <h4 className="font-semibold text-primary text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

