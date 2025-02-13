"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ProductImages({ images }: { images: string[] }) {
    const updatedImages: string[] = [...images, ...images, ...images];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [centeredImage, setCenteredImage] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2 // adjust sensitivity
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => setIsDragging(false);

    const findCenteredImage = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        container.querySelectorAll(".image-item").forEach((img, index) => {
            const imgCenter = (img as HTMLElement).offsetLeft + (img as HTMLElement).offsetWidth / 2;
            const distance = Math.abs(containerCenter - imgCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }

            setCenteredImage(closestIndex);
        });

        setCenteredImage(closestIndex);
    };

    /** Attach scroll event listener */
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", findCenteredImage);

        return () => container.removeEventListener("scroll", findCenteredImage);
    })

    return (
        <div className="grid">
            <div>
                <Image
                    src={updatedImages[centeredImage]}
                    height={400}
                    width={300}
                    alt="mainImage"
                />
            </div>
            <div
                ref={scrollRef}
                className='relative w-full max-h-32 flex gap-2 scroll-smooth overflow-x-auto snap-mandatory snap-x cursor-grab active:cursor-grabbing select-none'
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
            >
                {updatedImages.map((image, index) =>
                    <div
                        key={index}
                        className={`snap-center flex-shrink-0 image-item transition-all  ${centeredImage === index ? "border-4 border-blue-500 scale-105" : ""
                            }`}
                    >
                        <Image
                            key={index}
                            src={image}
                            alt="Product Image"
                            width={120}
                            height={160}
                            className="w-full h-auto object-cover rounded-lg shadow-md" />
                    </div>
                )}
            </div>
        </div>
    )
}