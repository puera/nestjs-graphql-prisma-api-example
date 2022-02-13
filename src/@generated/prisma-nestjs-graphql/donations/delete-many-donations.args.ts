import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereInput } from './donations-where.input';

@ArgsType()
export class DeleteManyDonationsArgs {

    @Field(() => DonationsWhereInput, {nullable:true})
    where?: DonationsWhereInput;
}
