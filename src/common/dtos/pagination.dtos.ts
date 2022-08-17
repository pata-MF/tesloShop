import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {

    @IsOptional()
    @IsPositive()
    //transformar la data (los dtos no lo hacen, toman strings)
    @Type( () => Number )  //sería como usar enableImplicitConversions: true
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type( () => Number )
    offset?: number;

}