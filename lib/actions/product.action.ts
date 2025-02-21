"use server";

import prisma  from "@/db/prisma";
import { LATEST_PRODUCTS_COUNT } from "@/lib//constants";

// Get latest products
export async function getLatestProduct() {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_COUNT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    description: product.description,
    images: product.images, // Ensure this is `string[]`
    price: parseFloat(product.price as unknown as string), // Convert `price` to number
    brand: product.brand,
    rating: Number(product.rating), // Convert `rating` to number
    numReviews: Number(product.numReviews), // Ensure `numReviews` is a number
    stock: Number(product.stock), // Ensure `stock` is a number
    isFeatured: product.isFeatured,
    banner: product.banner,
    createdAt: new Date(product.createdAt), // ✅ Ensure `createdAt` is included
  }));
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
}
