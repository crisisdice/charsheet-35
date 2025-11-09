import {getPrisma} from './db';

const prisma = getPrisma({ DATABASE_URL: process.env.DATABASE_URL ?? '' })

prisma.user.findMany().then(u => {
  console.log({ u })
})


