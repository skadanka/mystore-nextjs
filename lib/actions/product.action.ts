'use server';
import { PrismaClient } from '@prisma/client';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_COUNT } from '../constants';

// Get latest products
export async function getLatestProduct() {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany({
        take: LATEST_PRODUCTS_COUNT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return convertToPlainObject(products);
}