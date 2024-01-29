import { Injectable } from '@angular/core';
import { Product } from './model/model.product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts(): Product[] {
    return [
      {
        productCode: 100,
        productName: 'Mobile',
        productCost: 10000,
        productQuantity: 1,
      },
      {
        productCode: 101,
        productName: 'Bag',
        productCost: 500,
        productQuantity: 1,
      },
      {
        productCode: 102,
        productName: 'Shoe',
        productCost: 1000,
        productQuantity: 1,
      },
      {
        productCode: 103,
        productName: 'Groceries',
        productCost: 700,
        productQuantity: 1,
      },
      {
        productCode: 104,
        productName: 'Furniture',
        productCost: 15000,
        productQuantity: 1,
      },
      {
        productCode: 105,
        productName: 'Laptop',
        productCost: 35000,
        productQuantity: 1,
      },
    ];
  }
}
