// CarouselComponent.jsx

import React, { useEffect, useState } from 'react';

const CarouselComponent = () => {
    const images = [
        'https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png',
        'https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20160517205726314908_Airtelnew_logo_460.gif&h=570&w=855&q=100&v=20170226&c=',
        'https://download.logo.wine/logo/Bharat_Heavy_Electricals_Limited/Bharat_Heavy_Electricals_Limited-Logo.wine.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N3tMx8VbEsFdbqqGA9eZfZ5V1JF3uUWKnQ&s',
        'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/yr134yfjp0tfboza5gwr',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsatzz7VmFwtNQ8MivA0j97pXCaJwUeLI6Q&s',
        'https://logodownload.org/wp-content/uploads/2017/04/fujitsu-logo-0.png',
        'https://store-images.s-microsoft.com/image/apps.55914.13806674748789114.532917f2-5634-4901-a6c7-e124c35251ab.715ade3a-d0b3-4b94-89a5-9e4aca25c4b9',
        'https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/10/full/1681109152-0101.jpg?im=FeatureCrop,size=(826,465)',
    ];

    const [displayedImages, setDisplayedImages] = useState(images.slice(0, 4)); // Start with the first 4 images

    const goToNext = () => {
        setDisplayedImages((prevImages) => {
            const nextImages = [...prevImages.slice(1), images[(images.indexOf(prevImages[3]) + 1) % images.length]];
            return nextImages;
        });
    };

    const goToPrev = () => {
        setDisplayedImages((prevImages) => {
            const prevIndex = images.indexOf(prevImages[0]) - 1 < 0 ? images.length - 1 : images.indexOf(prevImages[0]) - 1;
            const nextImages = [images[prevIndex], ...prevImages.slice(0, 3)];
            return nextImages;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 4000); // Change every 4 seconds

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300">
                {displayedImages.map((image, index) => (
                    <div key={index} className="w-1/4 flex-shrink-0 mx-2">
                        <img src={image} alt={`Slide ${index}`}  className="w-72 h-48 object-cover" />
                    </div>
                ))}
            </div>

            {/* Left button */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={goToPrev}
            >
                &#10094; {/* Left arrow */}
            </button>
            {/* Right button */}
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={goToNext}
            >
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default CarouselComponent;
