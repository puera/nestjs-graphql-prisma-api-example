import { Injectable } from '@nestjs/common';
@Injectable()
export class DonationsService {
  create(createDonationInput: any) {
    return 'This action adds a new donation';
  }

  findAll() {
    return [
      {
        exampleField: 1,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} donation`;
  }
}
