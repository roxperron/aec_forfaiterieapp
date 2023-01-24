import { Pipe, PipeTransform } from '@angular/core';
import { Package } from './package';

@Pipe({
  name: 'premium'
})
export class PremiumPipe implements PipeTransform {

  transform(packages: Package[]): Package[]{
    return packages.filter(package => package.prenium);
  }

}
