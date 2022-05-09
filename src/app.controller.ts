import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('country')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCountryData(): string {
    return this.appService.getCountryList();
  }
}
