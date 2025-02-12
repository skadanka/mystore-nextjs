'use server';

import { prisma } from '.@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_COUNT } from '../constants';

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