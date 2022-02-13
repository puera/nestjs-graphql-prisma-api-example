import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderByParams } from '../graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: Prisma.DonationsCreateInput) {
    return this.prisma.donations.create({
      data: createDonationInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donations.findMany({
      orderBy: {
        [field]: direction,
      },
    });
  }

  findOne({ id }: Prisma.DonationsWhereUniqueInput) {
    return this.prisma.donations.findUnique({
      where: { id },
    });
  }

  async getTotal() {
    const response = await this.prisma.donations.aggregate({
      _sum: {
        count: true,
      },
    });

    return response._sum.count;
  }
}
