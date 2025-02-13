import Image from 'next/image';

export default function ProductImages({ images }: { images: string[] }) {
    images.push(images[0]);
    images.push(images[0]);
    images.push(images[0]);
    images.push(images[0]);
    return (
        <div className="grid">
            <div className='flex gap-2 scroll-smooth overflow-x-auto grab'>
                {images.map((image, index) => 
                    <Image 
                        key={index} 
                        src={image} 
                        alt="Product Image" 
                        width={200} 
                        height={200} 
                        className="object-cover rounded-lg shadow-md"/>   
                )}
            </div>
        </div>
    )
}