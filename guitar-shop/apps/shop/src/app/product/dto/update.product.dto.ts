import {GuitarType, StringsCount} from '@guitar-shop/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {IsEnum, IsNumber, IsString} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Fender Stratocaster'
  })
  @IsString()
  public title?: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'Excellent Guitar'
  })
  @IsString()
  public description?: string;

  @ApiProperty({
    description: 'Image of the product',
    example: 'guitar_image.png'
  })
  @IsString()
  public image?: string;

  @ApiProperty({
    description: 'Type of the product',
    example: 'укулеле',
    enum: GuitarType
  })
  @IsEnum(GuitarType)
  public guitarType?: GuitarType;

  @ApiProperty({
    description: 'Sku of the product',
    example: '4578t9yw293298r'
  })
  @IsString()
  public sku?: string;

  @ApiProperty({
    description: 'The number of strings the guitar is equipped',
    example: '12',
    enum: StringsCount
  })
  @IsEnum(StringsCount)
  public stringsCount?: StringsCount;

  @ApiProperty({
    description: 'The price of the product',
    example: '888888'
  })
  @IsNumber()
  public price?: number;
}
