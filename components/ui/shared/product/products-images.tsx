"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [centeredImage, setCenteredImage] = useState(0);

  images = [...images, ...images, ...images];
  /** Start Dragging */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  /** Handle Drag Movement */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  /** Stop Dragging */
  const handleMouseUp = () => setIsDragging(false);

  /** Track Centered Image */
  const findCenteredImage = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    container.querySelectorAll(".image-item").forEach((img, index) => {
      const imgElement = img as HTMLElement;
      const imgCenter = imgElement.offsetLeft + imgElement.offsetWidth / 2;
      const distance = Math.abs(containerCenter - imgCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCenteredImage((prev) => (prev !== closestIndex ? closestIndex : prev)); // Avoid unnecessary re-renders
  };

  /** Attach scroll event listener */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", findCenteredImage);
    return () => container.removeEventListener("scroll", findCenteredImage);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {/* Main Centered Image */}
      <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] mb-5 flex justify-center items-center">
        <Image
          src={images[centeredImage]}
          height={400}
          width={300}
          alt="Main Product Image"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Scrollable Thumbnail Gallery */}
      <div
        ref={scrollRef}
        className="relative w-full flex items-center overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none no-scrollbar sm:w-3/4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {/* ✅ Dynamic margin ensures first and last elements can be centered */}
        <div className="flex-shrink-0 md:w-16 w-8"></div>

        {images.map((image, index) => (
          <div
            key={index}
            className={`snap-center flex-shrink-0 image-item transition-all duration-200 ${
              centeredImage === index
                ? "border-4 border-blue-500 scale-105 rounded-lg"
                : "rounded-lg"
            }`}
            style={{ width: "100px", height: "120px" }} // ✅ Fixed dimensions
          >
            <Image
              src={image}
              alt="Product Thumbnail"
              width={100}
              height={120}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}

        {/* ✅ Dynamic margin ensures last image can be fully reached */}
        <div className="flex-shrink-0 md:w-16 w-8"></div>
      </div>
    </div>
  );
}
