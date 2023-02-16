import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageYComponent } from './package-y.component';

describe('PackageYComponent', () => {
  let component: PackageYComponent;
  let fixture: ComponentFixture<PackageYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
