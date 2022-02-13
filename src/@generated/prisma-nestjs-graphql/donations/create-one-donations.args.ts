import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationsCreateInput } from './donations-create.input';

@ArgsType()
export class CreateOneDonationsArgs {

    @Field(() => DonationsCreateInput, {nullable:false})
    data!: DonationsCreateInput;
}
