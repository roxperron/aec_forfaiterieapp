import { Pipe, PipeTransform } from '@angular/core';
import { Package } from './package';

@Pipe({
  name: 'packgagebylodging'
})
export class PackgagebylodgingPipe implements PipeTransform {

  transform(packages: Package[]): Package[]{
    return packages.filter(package => package.prenium);
  }

}
