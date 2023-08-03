import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BreedsModule } from 'src/breeds/breeds.module';
import { BreedsService } from 'src/breeds/breeds.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), BreedsModule, AuthModule],
  controllers: [CatsController],
  providers: [CatsService, BreedsService],
})
export class CatsModule {}
