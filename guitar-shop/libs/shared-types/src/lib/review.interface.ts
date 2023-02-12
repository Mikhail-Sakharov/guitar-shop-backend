export interface Review {
  id?: number;
  createdAt?: string;
  userName: string;
  productId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
}
