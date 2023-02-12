import {GuitarType, StringsCount} from './common.type';

export interface Product {
  id: number;
  createdAt: string;
  authorId: string;
  title: string;
  description: string;
  image: string;
  guitarType: GuitarType;
  sku: string;
  stringsCount: StringsCount;
  rating: number;
  price: number;
  reviewsCount: number;
}