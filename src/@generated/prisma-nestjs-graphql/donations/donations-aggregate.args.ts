import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereInput } from './donations-where.input';
import { DonationsOrderByWithRelationInput } from './donations-order-by-with-relation.input';
import { DonationsWhereUniqueInput } from './donations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DonationsCountAggregateInput } from './donations-count-aggregate.input';
import { DonationsAvgAggregateInput } from './donations-avg-aggregate.input';
import { DonationsSumAggregateInput } from './donations-sum-aggregate.input';
import { DonationsMinAggregateInput } from './donations-min-aggregate.input';
import { DonationsMaxAggregateInput } from './donations-max-aggregate.input';

@ArgsType()
export class DonationsAggregateArgs {

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

    @Field(() => DonationsCountAggregateInput, {nullable:true})
    _count?: DonationsCountAggregateInput;

    @Field(() => DonationsAvgAggregateInput, {nullable:true})
    _avg?: DonationsAvgAggregateInput;

    @Field(() => DonationsSumAggregateInput, {nullable:true})
    _sum?: DonationsSumAggregateInput;

    @Field(() => DonationsMinAggregateInput, {nullable:true})
    _min?: DonationsMinAggregateInput;

    @Field(() => DonationsMaxAggregateInput, {nullable:true})
    _max?: DonationsMaxAggregateInput;
}
