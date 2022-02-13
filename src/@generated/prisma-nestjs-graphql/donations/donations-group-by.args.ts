import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereInput } from './donations-where.input';
import { DonationsOrderByWithAggregationInput } from './donations-order-by-with-aggregation.input';
import { DonationsScalarFieldEnum } from './donations-scalar-field.enum';
import { DonationsScalarWhereWithAggregatesInput } from './donations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DonationsCountAggregateInput } from './donations-count-aggregate.input';
import { DonationsAvgAggregateInput } from './donations-avg-aggregate.input';
import { DonationsSumAggregateInput } from './donations-sum-aggregate.input';
import { DonationsMinAggregateInput } from './donations-min-aggregate.input';
import { DonationsMaxAggregateInput } from './donations-max-aggregate.input';

@ArgsType()
export class DonationsGroupByArgs {

    @Field(() => DonationsWhereInput, {nullable:true})
    where?: DonationsWhereInput;

    @Field(() => [DonationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DonationsOrderByWithAggregationInput>;

    @Field(() => [DonationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DonationsScalarFieldEnum>;

    @Field(() => DonationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: DonationsScalarWhereWithAggregatesInput;

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
