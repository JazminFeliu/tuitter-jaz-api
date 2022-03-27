import { Body, Controller, Get, Param, Patch, Post, Delete, Query } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

//decoradores se llaman los que se anteceden con el arroba
@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService){

    }

    @Get()
    getTuits(@Query() filterQuery): Promise <Tuit[]> {
        const { searchTerm, orderBy } = filterQuery;
        return this.tuitService.getTuits();
    }

    @Get(':id') //tuits/1
    getTuit(@Param('id') id: number): Promise <Tuit>{
        return this.tuitService.getTuit(id);
    }

    @Post()
    createTuit(@Body() message: CreateTuitDto): Promise <Tuit> {
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Promise <Tuit> {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    removeTuit(@Param('id') id: number):Promise <void> {
        return this.tuitService.removeTuit(id);
    }
    
}
