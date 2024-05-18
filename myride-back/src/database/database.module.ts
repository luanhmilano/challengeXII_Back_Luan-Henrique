import { Module, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({})
export class DatabaseModule implements OnModuleInit {
  private readonly prisma = new PrismaClient();

  async onModuleInit() {
    await this.seedDatabase();
  }

  private async seedDatabase() {
    const carros = [
      {
        title: 'Basic',
        description:
          'The best balance of price and comfort. You will not go wrong with our basic rides.',
        image: 'https://imagens-desafio.s3.amazonaws.com/section-2/car-1.png',
      },
      {
        title: 'Comfort',
        description:
          'If comfort is your priority, this is the ride for you. It’s spacious and packed with features.',
        image: 'https://imagens-desafio.s3.amazonaws.com/section-2/car-2.png',
      },
      {
        title: 'Business',
        description:
          'Do you want to travel around the city in style? Make sure to select or business class rides.',
        image: 'https://imagens-desafio.s3.amazonaws.com/section-2/car-3.png',
      },
      {
        title: 'Deluxe',
        description:
          'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.',
        image: 'https://imagens-desafio.s3.amazonaws.com/section-2/car-4.png',
      },
    ];

    const count = await this.prisma.cars.count();
    if (count === 0) {
      await this.prisma.cars.createMany({
        data: carros,
        skipDuplicates: true,
      });
      console.log('Carros adicionados ao banco de dados.');
    } else {
      console.log('Database already seeded');
    }
  }
}
