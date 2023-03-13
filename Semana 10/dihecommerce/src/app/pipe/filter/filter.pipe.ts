import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})

export class FilterPipe implements PipeTransform {

  transform(products: any, filterText: string) {
    if (!products || !filterText){
      return products
    }

    return products.filter((product: any) => {
      return product.product.toLowerCase().includes(filterText.toLowerCase());
    })
  }
}
