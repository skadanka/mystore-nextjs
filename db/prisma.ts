import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Configure Neon to use WebSockets
neonConfig.webSocketConstructor = ws;

// Create a connection pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Initialize the PrismaNeon adapter
const adapter = new PrismaNeon(pool);

// Instantiate the Prisma Client with the adapter
const prisma = new PrismaClient({ adapter });

export default prisma;
