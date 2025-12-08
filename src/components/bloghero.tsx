"use client";
import { useState, useEffect } from 'react';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';

const IMAGE_DURATION = 5000; 

const backgroundImages = [blog1.src, blog2.src];

export default function BlogHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, IMAGE_DURATION);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                {backgroundImages.map((imageSrc, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url('${imageSrc}')` }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent w-full mx-auto px-6 pt-60 text-center flex flex-col items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                        Our Blog
                    </h1>
                    <p className="mt-3 text-white">
                        Stay updated with the latest news, articles, and insights from Her Wellness Foundation.
                    </p>
                </div>
            </div> 
        </>
    );        
};
