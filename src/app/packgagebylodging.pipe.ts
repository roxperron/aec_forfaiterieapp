import { Pipe, PipeTransform } from '@angular/core';
import { Package } from './package';

@Pipe({
  name: 'packgagebylodging'
})
export class PackgagebylodgingPipe implements PipeTransform {

  transform(packages: Package[], lodgingName = 'Manoir le Wilson' ): Package[]{
    return packages.filter(p => p.lodging.name == lodgingName);
  }

}
