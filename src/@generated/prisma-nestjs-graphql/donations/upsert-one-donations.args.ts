import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsWhereUniqueInput } from './donations-where-unique.input';
import { DonationsCreateInput } from './donations-create.input';
import { DonationsUpdateInput } from './donations-update.input';

@ArgsType()
export class UpsertOneDonationsArgs {

    @Field(() => DonationsWhereUniqueInput, {nullable:false})
    where!: DonationsWhereUniqueInput;

    @Field(() => DonationsCreateInput, {nullable:false})
    create!: DonationsCreateInput;

    @Field(() => DonationsUpdateInput, {nullable:false})
    update!: DonationsUpdateInput;
}
