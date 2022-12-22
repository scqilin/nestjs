import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  index() {
    return { result: 'api' };
  }

  @Get('user')
  userIndex() {
    return { result: 'user api' };
  }
}
