import { Network, TransactionResponse } from "ethers";
import { BalanceOutputDTO } from "src/dto/BalanceOutput.dto";
import { SendTransactionDTO } from "src/dto/SendTrasaction.dto";
export default interface Web3ApiAdapter {
    readonly network: string;
    readonly accessKey: string;
    sendTransaction(transactionInput: SendTransactionDTO): Promise<TransactionResponse>;
    verifyProvider(): Promise<Network>;
    getAccountBalance(accountAddress: string): Promise<BalanceOutputDTO>;
}