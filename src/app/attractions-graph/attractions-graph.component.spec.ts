import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsGraphComponent } from './attractions-graph.component';

describe('AttractionsGraphComponent', () => {
  let component: AttractionsGraphComponent;
  let fixture: ComponentFixture<AttractionsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
