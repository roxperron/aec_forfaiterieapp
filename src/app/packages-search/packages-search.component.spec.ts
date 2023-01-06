import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesSearchComponent } from './packages-search.component';

describe('PackagesSearchComponent', () => {
  let component: PackagesSearchComponent;
  let fixture: ComponentFixture<PackagesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
