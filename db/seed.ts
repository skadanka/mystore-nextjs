import { PrismaClient }from '@prisma/client'
import sampleData from './sample-data'


async function main() {
    const prisma = new PrismaClient();

    console.log('Start seeding...');
    // reset product table
    const productTable = prisma.product.deleteMany();
    const accountTable = prisma.account.deleteMany();
    const sessionTable = prisma.session.deleteMany();
    const verificationTokenTable = prisma.verificationToken.deleteMany();
    const userTable = prisma.user.deleteMany();

    await Promise.all([
        productTable,
        accountTable,
        sessionTable,
        verificationTokenTable,
        userTable
    ]);
    // seed products
    await prisma.product.createMany({
        data: sampleData.products
    });

    // seed users
    await prisma.user.createMany({
        data: sampleData.users
    });

    console.log('Seeding finished.');
}

main();