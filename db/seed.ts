import { PrismaClient }from '@prisma/client'
import sampleData from './sample-data'


async function main() {
    const prisma = new PrismaClient();
    console.log('Start seeding...');
    // reset product table
    await prisma.product.deleteMany();
    // seed products
    await prisma.product.createMany({
        data: sampleData.products
    });

    console.log('Seeding finished.');
}

main();