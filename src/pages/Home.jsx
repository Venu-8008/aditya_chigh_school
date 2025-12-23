import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Stats />
            <Gallery />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
