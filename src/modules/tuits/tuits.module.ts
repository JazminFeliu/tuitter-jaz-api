import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tuit } from './tuit.entity';
import { User } from '../users/entities';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

@Module({ 
    imports: [TypeOrmModule.forFeature([Tuit, User])],
    controllers: [TuitsController],
    providers: [TuitsService],
})
export class TuitsModule {}
