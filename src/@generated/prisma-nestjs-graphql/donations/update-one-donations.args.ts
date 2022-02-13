import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsUpdateInput } from './donations-update.input';
import { DonationsWhereUniqueInput } from './donations-where-unique.input';

@ArgsType()
export class UpdateOneDonationsArgs {

    @Field(() => DonationsUpdateInput, {nullable:false})
    data!: DonationsUpdateInput;

    @Field(() => DonationsWhereUniqueInput, {nullable:false})
    where!: DonationsWhereUniqueInput;
}
