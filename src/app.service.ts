import { Injectable } from '@nestjs/common';
import { Network as NetworkProvider, TransactionResponse } from 'ethers';
import Web3ApiAdapter from './config/Web3Api.adapter';
import { BalanceOutputDTO } from './dto/BalanceOutput.dto';
import { SendTransactionDTO } from './dto/SendTrasaction.dto';
require('dotenv').config()

@Injectable()
export class AppService {
  constructor(
    readonly Web3Api: Web3ApiAdapter
  ) {}

  async verifyProvider(): Promise<NetworkProvider> {
    return await this.Web3Api.verifyProvider();
  }

  async getAccountBalance(accountAddress: string): Promise<BalanceOutputDTO> {
    return await this.Web3Api.getAccountBalance(accountAddress);
  }

  async sendTransaction(input: SendTransactionDTO): Promise<TransactionResponse> {
    try {    
      return await this.Web3Api.sendTransaction(input);    
    } catch (error) {
      console.log(error);
    }
  }
}
