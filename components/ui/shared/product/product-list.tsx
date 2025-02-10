import ProductCard from './product-card';
import Product from '@/types/product';

export default function ProductList({ data, title, limit }: { data: Product[], title?: string, limit?: number }) {
    data = limit ? data.slice(0, limit) : data;
    return (
        <div>
            <h1>{title}</h1>
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {data.map((item: Product, index: number) => (
                    <ProductCard key={index} product={item} />
                ))}
            </ul>
        </div>
    );
}
