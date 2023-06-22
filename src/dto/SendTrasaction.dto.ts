import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class SendTransactionDTO {
    @IsNotEmpty()
    @IsString()
    to: string

    @IsNotEmpty()
    @IsString()
    value: string

    @IsNotEmpty()
    @IsNumber()
    chainId: number

    @IsNumber()
    type: number
}