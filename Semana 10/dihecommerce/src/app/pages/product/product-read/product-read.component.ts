import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit{

  products!: IProduct[];
  filterText: string = '';

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((products) => {
      this.products = products;
    })
  }
}
