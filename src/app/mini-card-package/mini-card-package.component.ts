import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../package';

@Component({
  selector: 'app-mini-card-package',
  templateUrl: './mini-card-package.component.html',
  styleUrls: ['./mini-card-package.component.css']
})
export class MiniCardPackageComponent implements OnInit {
  @Input() package?: Package;

  constructor() { }

  ngOnInit(): void {
  }

}
