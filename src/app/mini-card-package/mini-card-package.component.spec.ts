import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardPackageComponent } from './mini-card-package.component';

describe('MiniCardPackageComponent', () => {
  let component: MiniCardPackageComponent;
  let fixture: ComponentFixture<MiniCardPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCardPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCardPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
