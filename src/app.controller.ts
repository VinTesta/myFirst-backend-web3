import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendTransactionDTO } from './dto/SendTrasaction.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('AppService') private readonly appService: AppService
  ) {}

  @Get()
  async verifyProvider() {
    return await this.appService.verifyProvider();
  }

  @Post('/send-transaction')
  async sendTranction(@Body() input: SendTransactionDTO) {
    return await this.appService.sendTransaction(input);
  }

  @Get('/get-account-balance/:accountAddress')
  async getAccountBalance(@Param() params: {accountAddress: string}) {
    return await this.appService.getAccountBalance(params.accountAddress);
  }
}
