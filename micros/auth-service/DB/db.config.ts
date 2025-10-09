import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient({
  log: ['info', 'query'],
});

export default prisma;
