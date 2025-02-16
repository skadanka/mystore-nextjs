import { z } from "zod";

// Ensure currency has up to 2 decimal places
const currency = z
  .string()
  .transform((val) => parseFloat(val)) // Convert to a number
  .refine((val) => /^\d+(\.\d{2})?$/.test(val.toFixed(2)), {
    message: "Price must be a valid number with up to 2 decimal places",
  });

  // Define a decimal validator to ensure the correct format
  const decimalSchema = z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid decimal with up to 2 decimal places")
    .transform((val) => parseFloat(val)); // Ensure it's returned as a `number`
  
  export const productSchema = z.object({
    id: z.string().uuid(), // Prisma uses UUID for ID
    name: z.string().min(1, "Name is required"),
    slug: z.string().min(1, "Slug is required"), // Unique constraint handled in DB
    category: z.string().min(1, "Category is required"),
    images: z.array(z.string()).min(1, "At least one image is required"),
    brand: z.string().min(1, "Brand is required"),
    description: z.string().min(1, "Description is required"),
    stock: z.number().int().min(0, "Stock must be a non-negative integer"),
    price: currency, // Ensures proper decimal formatting
    rating: decimalSchema, // Ensures rating is a valid decimal
    numReviews: z.number().int().min(0).default(0), // Default is 0
    isFeatured: z.boolean().default(false),
    banner: z.string().nullable(), // Can be null
    createdAt: z.date(), // DateTime field in Prisma
  });
  
  // ✅ Create a schema for inserting a new product (without `id` and `createdAt`)
  export const insertProductSchema = productSchema.omit({
    id: true,
    createdAt: true,
  });
  
  const productData = {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Sample Product",
    slug: "sample-product",
    category: "Electronics",
    images: ["https://example.com/image.jpg"],
    brand: "BrandX",
    description: "This is a great product.",
    stock: 10,
    price: "199.99",
    rating: "4.50",
    numReviews: 50,
    isFeatured: true,
    banner: null,
    createdAt: new Date(),
  };
  
  const result = productSchema.safeParse(productData);
  console.log(result.success ? "✅ Valid!" : result.error);
  