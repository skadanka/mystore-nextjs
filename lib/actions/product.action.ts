'use server';

import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '@/lib/utils';
import { LATEST_PRODUCTS_COUNT } from '@/lib//constants';

// Get latest products
export async function getLatestProduct() {
    const products = await prisma.product.findMany({
        take: LATEST_PRODUCTS_COUNT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return convertToPlainObject(products);
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: {
            slug: slug
        }
    })
}