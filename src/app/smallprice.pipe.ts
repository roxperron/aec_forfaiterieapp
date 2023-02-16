import { Pipe, PipeTransform } from '@angular/core';
import { Package } from './package';

@Pipe({
  name: 'smallprice'
})
export class SmallpricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
