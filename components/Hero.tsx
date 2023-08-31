"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='hero items-center'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book, and cruise with confidence.
                </h1>
                <p className="hero__subtitle">
                Your ultimate car rental companion for seamless travels and unforgettable memories. 
                </p>

                <CustomButton 
                    title="Explore cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10 px-5 py-3"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                        src="/hero.png"
                        alt="hero"
                        className="object-contain"
                        fill
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero;
