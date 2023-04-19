import fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get('/', async () => {
    const habit = await prisma.habit.findMany();
    return habit;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running');
});
