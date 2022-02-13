import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DonationsCountAggregate } from './donations-count-aggregate.output';
import { DonationsAvgAggregate } from './donations-avg-aggregate.output';
import { DonationsSumAggregate } from './donations-sum-aggregate.output';
import { DonationsMinAggregate } from './donations-min-aggregate.output';
import { DonationsMaxAggregate } from './donations-max-aggregate.output';

@ObjectType()
export class AggregateDonations {

    @Field(() => DonationsCountAggregate, {nullable:true})
    _count?: DonationsCountAggregate;

    @Field(() => DonationsAvgAggregate, {nullable:true})
    _avg?: DonationsAvgAggregate;

    @Field(() => DonationsSumAggregate, {nullable:true})
    _sum?: DonationsSumAggregate;

    @Field(() => DonationsMinAggregate, {nullable:true})
    _min?: DonationsMinAggregate;

    @Field(() => DonationsMaxAggregate, {nullable:true})
    _max?: DonationsMaxAggregate;
}
