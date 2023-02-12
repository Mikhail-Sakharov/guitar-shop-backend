export interface Review {
  id?: number;
  createdAt?: string;
  user: {
    firstName: string;
    lastName: string;
  };
  productId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
}
