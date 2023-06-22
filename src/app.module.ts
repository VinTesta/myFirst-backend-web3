import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import EthersJsApi from './config/EthersJsApi';
import Web3ApiAdapter from './config/Web3Api.adapter';
require('dotenv').config()

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'AppService',
      useFactory: (): AppService => {
        return new AppService(
          new EthersJsApi(
            {
              network: "sepolia",
              accessKey: {
                projectId: process.env.INFURA_API_KEY,
                projectSecret: process.env.INFURA_API_SECRET
              }
            }
          ));
      }
    }
  ],
})
export class AppModule {}
