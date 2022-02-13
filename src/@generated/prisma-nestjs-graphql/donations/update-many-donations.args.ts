import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsUpdateManyMutationInput } from './donations-update-many-mutation.input';
import { DonationsWhereInput } from './donations-where.input';

@ArgsType()
export class UpdateManyDonationsArgs {

    @Field(() => DonationsUpdateManyMutationInput, {nullable:false})
    data!: DonationsUpdateManyMutationInput;

    @Field(() => DonationsWhereInput, {nullable:true})
    where?: DonationsWhereInput;
}
