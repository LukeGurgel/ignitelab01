import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { ProductsService } from '../services/products.service';
import { PurchasesService } from '../services/purchases.service';
import { CustomersService } from 'src/services/customers.service';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purcharses.resolver';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';

@Module({
  // Com essa importação já conseguimos ter acesso diretamente ao arquivo .env automaticamente
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,
    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
