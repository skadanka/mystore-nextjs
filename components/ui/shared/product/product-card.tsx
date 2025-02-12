import { Product } from '@/types';
import ProductPrice from './product-price';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon, StarHalfIcon } from 'lucide-react';


const MAX_RATING = 5;

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


const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="w-full max-w-sm relative pb-6">
            <CardHeader className="p-0 items center">
                <Link href={`/product/${product.slug}`}>
                    {
                        product.images && product.images.length > 0 ? (
                            <Image src={`${product.images[0]}`} alt={`${product.name} image`} width={360} height={360} />
                        ) : (
                            <p>No images found for {product.name}</p>
                        )}
                </Link>
            </CardHeader>
            <CardContent className='p-4 grid gap-4'>
                <h2 className='font-bold text-center'>{product.name}</h2>
                {/* {item.banner && <Image src={item.banner} alt={`${item.name} banner`} width={500} height={500} />} */}

                <p className='text-gray-600'>{product.description}</p>
                <ProductPrice price={Number(product.price)} />
                <p>Category: {product.category}</p>
                <p>Brand: {product.brand}</p>
                {product.isFeatured && <p>Featured Product</p>}
                <div className='flex justify-between'>
                    {getRatingStars(product.rating)}
                    {product.rating} ({product.numReviews} reviews)
                </div>
                <div className=''>
                    {product.stock > 0 ? <p className='text-green-500'>In Stock</p> : <p className='text-red-500'>Out Of Stock</p>}
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard;