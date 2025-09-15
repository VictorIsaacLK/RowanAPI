import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Ticket | null> {
    return this.ticketsService.findOne(id);
  }

  @Post()
  create(@Body() ticketData: Partial<Ticket>): Promise<Ticket> {
    return this.ticketsService.create(ticketData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() ticketData: Partial<Ticket>) {
    return this.ticketsService.update(id, ticketData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ticketsService.remove(id);
  }
}
