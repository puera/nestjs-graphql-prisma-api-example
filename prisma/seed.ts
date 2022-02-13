import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donations.deleteMany();

  const renann = await prisma.donations.create({
    data: {
      email: 'renann_puera@hotmail.com',
      displayName: 'Renann',
      count: 5,
    },
  });

  console.log({ renann });
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
