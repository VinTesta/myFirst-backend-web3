import Web3ApiAdapter from "./Web3Api.adapter";
import { Web3ApiConstructorDTO } from "src/dto/Web3ApiConstructorData.dto";
import { InfuraProvider, Network, parseEther, Provider, TransactionResponse, Wallet } from "ethers";
import { BalanceOutputDTO } from "src/dto/BalanceOutput.dto";
import { BigNumber } from "alchemy-sdk";
import { SendTransactionDTO } from "src/dto/SendTrasaction.dto";
require('dotenv').config()

export default class EthersJsApi implements Web3ApiAdapter {

    private provider: Provider; 
    readonly network: string;
    readonly accessKey: string;

    constructor(Web3ApiConstructorDTO: Web3ApiConstructorDTO) {   
        this.provider = new InfuraProvider(Web3ApiConstructorDTO.network);
    }

    public async verifyProvider(): Promise<Network> {
        return await this.provider.getNetwork();
    }
    
    public async sendTransaction({ value, ...transactionInput }: SendTransactionDTO): Promise<TransactionResponse> {
        const sender = new Wallet(process.env.PRIVATE_KEY, this.provider);
        return await sender.sendTransaction({
            value: parseEther(value), 
            ...transactionInput});
    }

    public async getAccountBalance(accountAddress: string): Promise<BalanceOutputDTO> {
        const balance = await this.provider.getBalance(accountAddress);
        return {
            value: BigNumber.from(balance),
            unit: "wei"
        };
    }
}
