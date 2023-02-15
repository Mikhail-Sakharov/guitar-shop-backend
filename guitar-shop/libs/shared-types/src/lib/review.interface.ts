export interface Review {
  id?: number;
  createdAt?: string;
  userName: string;
  userId: string;
  productId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
}
