import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DonationsCountOrderByAggregateInput } from './donations-count-order-by-aggregate.input';
import { DonationsAvgOrderByAggregateInput } from './donations-avg-order-by-aggregate.input';
import { DonationsMaxOrderByAggregateInput } from './donations-max-order-by-aggregate.input';
import { DonationsMinOrderByAggregateInput } from './donations-min-order-by-aggregate.input';
import { DonationsSumOrderByAggregateInput } from './donations-sum-order-by-aggregate.input';

@InputType()
export class DonationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => DonationsCountOrderByAggregateInput, {nullable:true})
    _count?: DonationsCountOrderByAggregateInput;

    @Field(() => DonationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: DonationsAvgOrderByAggregateInput;

    @Field(() => DonationsMaxOrderByAggregateInput, {nullable:true})
    _max?: DonationsMaxOrderByAggregateInput;

    @Field(() => DonationsMinOrderByAggregateInput, {nullable:true})
    _min?: DonationsMinOrderByAggregateInput;

    @Field(() => DonationsSumOrderByAggregateInput, {nullable:true})
    _sum?: DonationsSumOrderByAggregateInput;
}
