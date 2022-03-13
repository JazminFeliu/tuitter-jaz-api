import { Controller, Get, Param } from '@nestjs/common';

//decoradores se llaman los que se anteceden con el arroba
@Controller('tuits')
export class TuitsController {
    @Get()
    getTuits() {
        return 'Hello from Tuitter-Jaz';
    }

    @Get(':id') //tuits/1
    getTuit(@Param('id') id: string): string {
        return `Your tuit id is ${id}`;
    }
}
