import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereUniqueInput } from './donations-where-unique.input';

@ArgsType()
export class FindUniqueDonationsArgs {

    @Field(() => DonationsWhereUniqueInput, {nullable:false})
    where!: DonationsWhereUniqueInput;
}
