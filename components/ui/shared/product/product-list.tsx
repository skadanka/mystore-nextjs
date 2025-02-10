import Image from 'next/image';
import {StarIcon , StarHalfIcon, StarOffIcon} from 'lucide-react';
const MAX_RATING = 5;

interface Product {
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner: string | null;
  }
  
const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = MAX_RATING - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-x-0.5">
            {Array.from({ length: fullStars }).map((_, index) => (
                <StarIcon key={`full-${index}`} className="text-yellow-500 fill-yellow-500" />
            ))}
            {hasHalfStar && 
            <div className='relative'>
                <StarIcon key="empty" className="text-gray-200 fill-gray-200 absolute -top-3" />
                <StarHalfIcon key="half" className="text-yellow-500 fill-yellow-500 absolute -top-3" />
            </div>
            }
            {Array.from({ length: emptyStars }).map((_, index) => (
                <StarIcon key={`empty-${index}`} className="text-gray-200 fill-gray-200" />
            ))}
        </div>
    );
};



export default function ProductList({data, title} : {data: Product[], title?: string}) {
  return (
    <div>
      <h1>{title}</h1>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((item: Product, index: number) => (
            <li key={index} className='border p-4'>
                <h2 className='font-bold text-center'>{item.name}</h2>
                {/* {item.banner && <Image src={item.banner} alt={`${item.name} banner`} width={500} height={500} />} */}
                {item.images && item.images.length > 0 ? (
                  <Image src={item.images[0]} alt={`${item.name} image`} width={360} height={360} />
                ) : (
                  <p>No images found for {item.name}</p>
                )}
                <p className='text-gray-600'>{item.description}</p>
                <p className='flex items-center gap-x-0.5'>Price:  &nbsp;
                    <span className="relative text-xs -top-1 text-gray-600">$</span>
                    <span className='font-semibold text-xl'>{Math.floor(item.price)}</span>
                    <span className="relative text-xs -top-1 text-gray-600">
                      {item.price % 1 !== 0 && `${Math.round((item.price % 1) * 100)}`}
                    </span>
                </p>
                <p>Category: {item.category}</p>
                <p>Brand: {item.brand}</p>
                <div>Rating: 
                    {getRatingStars(item.rating)}
                    {item.rating} ({item.numReviews} reviews)
                </div>
                {item.isFeatured && <p>Featured Product</p>}
            </li>
        ))}
      </ul>
    </div>
  );
}
