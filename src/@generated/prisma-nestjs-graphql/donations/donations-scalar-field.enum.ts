import { registerEnumType } from '@nestjs/graphql';

export enum DonationsScalarFieldEnum {
    id = "id",
    count = "count",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team",
    createdAt = "createdAt"
}


registerEnumType(DonationsScalarFieldEnum, { name: 'DonationsScalarFieldEnum', description: undefined })
