import React, { useEffect, useRef } from 'react';

type Image = {
    src: string;
    alt: string;
};

const ScrollView = ({ images }: { images: Image[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    scrollRef.current.scrollLeft += 1;
                }
            }
        }, 20); // Change this to adjust the speed of the carousel

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={scrollRef} className="flex overflow-x-scroll hide-scrollbar">
            {[...images, ...images].map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="inline-block w-full object-cover pt-6" // Change h value to adjust the height of the carousel
                />
            ))}
        </div>
    );
};

export default ScrollView;
