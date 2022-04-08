import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

/*
  Se não colocamos o exports com PrismaService 
  o único modulo que vai poder consultar o banco de dados é o DatabaseModule
*/
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
