import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';


const currency = z
.string()
.refine((val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))), 
'Price must be a valid number with up to 2 decimal places');
// Define a schema for the data we expect to receive
// Schema for inserting a new product
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters').max(255, 'Name must be at most 255 characters'),
    slug: z.string().min(3, 'Slug must be atleast 3 characters').max(255, 'Slug must be at most 255 characters'),
    category: z.string().min(3, 'Category must be atleast 3 characters').max(255, 'Category must be at most 255 characters'),
    description: z.string().min(3, 'Description must be atleast 3 characters').max(255, 'Description must be at most 255 characters'),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    price: currency,
    brand: z.string().min(3).max(255),
    rating: z.number().int(),
    numReviews: z.number().int(),
    stock: z.coerce.number().int(),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
})