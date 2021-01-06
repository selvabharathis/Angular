import { Component, OnInit } from '@angular/core';
import { Product } from './model/model.product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment-two';
  eligible: boolean = false;
  totalPrice: number = 0;
  productService: ProductService;
  productListFromService: Product[];
  checkDiscount() {
    if (this.totalPrice > 100000) {
      this.eligible = true;
    } else {
      this.eligible = false;
    }
  }
  setProdQuant(count: number, index: number) {
    this.productListFromService[index].productQuantity = count;
    this.checkTotalPrice();
  }
  checkTotalPrice() {
    this.totalPrice = 0;
    this.productListFromService.forEach((product: Product) => {
      this.totalPrice =
        this.totalPrice + product.productCost * product.productQuantity;
    });
  }
  deleteProduct(index: number) {
    this.productListFromService.splice(index, 1);
    this.checkTotalPrice();
  }
  ngOnInit(): void {
    this.productService = new ProductService();
    this.productListFromService = this.productService.getAllProducts();
    this.checkTotalPrice();
  }
}
