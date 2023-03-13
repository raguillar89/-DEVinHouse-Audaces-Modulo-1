import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent{

  product: Product = new Product();
  formProductCreate!: FormGroup;
  userName!: any;

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.createForm();
  }

  createForm() {
    this.formProductCreate = new FormGroup({
      newProduct:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(1)]),
      price: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  create(): void {
    this.service.create(this.product).subscribe(() => {
      this.router.navigate(['wm/product']);
    })
  }
}
