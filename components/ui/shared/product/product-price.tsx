const ProductPrice = ({ price, className }: { price: number, className?: string }) => {
    return (
        <p className={`flex items-center gap-x-0.5 ${className}`}>Price:  &nbsp;
            <span className="relative text-xs -top-1 text-gray-600">$</span>
            <span className='font-semibold text-xl'>{Math.floor(price)}</span>
            <span className="relative text-xs -top-1 text-gray-600">
                {price % 1 !== 0 && `${Math.round((price % 1) * 100)}`}
            </span>
        </p>
    );
}

export default ProductPrice;