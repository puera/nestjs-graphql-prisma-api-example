import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereInput } from './donations-where.input';
import { DonationsOrderByWithRelationInput } from './donations-order-by-with-relation.input';
import { DonationsWhereUniqueInput } from './donations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DonationsScalarFieldEnum } from './donations-scalar-field.enum';

@ArgsType()
export class FindFirstDonationsArgs {

    @Field(() => DonationsWhereInput, {nullable:true})
    where?: DonationsWhereInput;

    @Field(() => [DonationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DonationsOrderByWithRelationInput>;

    @Field(() => DonationsWhereUniqueInput, {nullable:true})
    cursor?: DonationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DonationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DonationsScalarFieldEnum>;
}
