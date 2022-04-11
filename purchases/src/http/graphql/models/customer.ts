import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchase } from './purcharse';

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}
