import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, RawBodyRequest, Req} from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@guitar-shop/core';
import {LoggedUser} from '@guitar-shop/shared-types';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update.product.dto';
import {ProductService} from './product.service';
import {ProductRdo} from './rdo/product.rdo';

export const PRODUCTS_LIMIT = 9;

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) {}
  // @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.CREATED,
    description: 'A new product entry has been successfully created'
  })
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createProduct(
    @Body() dto: CreateProductDto,
    @Req() req: RawBodyRequest<LoggedUser>
  ) {
    const product = await this.productService.createProduct(dto, req.user.id);
    return fillObject(ProductRdo, product);
  }

  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.OK,
    description: `${PRODUCTS_LIMIT} or less products has been received`
  })
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getProducts(
    // @Query() query: ProductsQuery
  ) {
    const products = await this.productService.getProducts(/* query */);
    return fillObject(ProductRdo, products);
  }

  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.OK,
    description: `The product has been received`
  })
  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  async showProduct(
    @Param('productId') productId: number
  ) {
    const products = await this.productService.showProduct(productId);
    return fillObject(ProductRdo, products);
  }

  // @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: ProductRdo,
    status: HttpStatus.OK,
    description: 'The product has been updated'
  })
  @Patch(':productId')
  @HttpCode(HttpStatus.OK)
  async updateProduct(
    @Body() dto: UpdateProductDto,
    @Param('productId') productId: number,
    @Req() req: RawBodyRequest<LoggedUser>
  ) {
    const post = await this.productService.updateProduct(dto, productId, req.user.id);
    return fillObject(ProductRdo, post);
  }

  // @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The product has been deleted'
  })
  @Delete(':productId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletePost(
    @Param('productId') productId: number,
    @Req() req: RawBodyRequest<LoggedUser>
  ) {
    return await this.productService.deleteProduct(productId, req.user.id);
  }
}
