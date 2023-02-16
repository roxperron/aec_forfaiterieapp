import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageXComponent } from './package-x.component';

describe('PackageXComponent', () => {
  let component: PackageXComponent;
  let fixture: ComponentFixture<PackageXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
