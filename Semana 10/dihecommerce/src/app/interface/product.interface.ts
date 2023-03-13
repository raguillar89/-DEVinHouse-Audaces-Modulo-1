export interface IProduct{
  id?: number,
  product: string,
  quantity: number,
  price: number,
}

export class Product implements IProduct {
  id?: number | undefined;
  product!: string;
  quantity!: number;
  price!: number;
}
