import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationsCountAggregate } from './donations-count-aggregate.output';
import { DonationsAvgAggregate } from './donations-avg-aggregate.output';
import { DonationsSumAggregate } from './donations-sum-aggregate.output';
import { DonationsMinAggregate } from './donations-min-aggregate.output';
import { DonationsMaxAggregate } from './donations-max-aggregate.output';

@ObjectType()
export class DonationsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    team?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

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
