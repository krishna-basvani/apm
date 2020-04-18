import { Component, OnInit} from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';

// Activated Route
import { ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void{
    /*const id = +this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.getProduct(id);*/
    const resolvedData: ProductResolved = this.activedRoute.snapshot.data['resolvedData'];

    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);

  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
