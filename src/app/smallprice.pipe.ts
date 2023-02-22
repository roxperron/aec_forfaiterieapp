import { Pipe, PipeTransform } from '@angular/core';
import { Package } from './package';

@Pipe({
  name: 'smallprice'
})
export class SmallpricePipe implements PipeTransform {

  transform(packages: Package[]): Package[] {
    return packages.filter(packages => packages.newprice > 0);
  }

}
