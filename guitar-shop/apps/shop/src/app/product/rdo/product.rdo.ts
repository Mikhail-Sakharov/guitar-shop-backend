import {GuitarType, StringsCount} from '@guitar-shop/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class ProductRdo {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Fender Stratocaster'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'Excellent Guitar'
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Image of the product',
    example: 'guitar_image.png'
  })
  @Expose()
  public image: string;

  @ApiProperty({
    description: 'Type of the product',
    example: 'укулеле'
  })
  @Expose()
  public guitarType: GuitarType;

  @ApiProperty({
    description: 'Sku of the product',
    example: '4578t9yw293298r'
  })
  @Expose()
  public sku: string;

  @ApiProperty({
    description: 'The number of strings the guitar is equipped',
    example: '12'
  })
  @Expose()
  public stringsCount: StringsCount;

  @ApiProperty({
    description: 'The price of the product',
    example: '888888'
  })
  @Expose()
  public price: number;
}
