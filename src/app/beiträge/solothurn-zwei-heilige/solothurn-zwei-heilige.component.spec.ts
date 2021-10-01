import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolothurnZweiHeiligeComponent } from './solothurn-zwei-heilige.component';

describe('SolothurnZweiHeiligeComponent', () => {
  let component: SolothurnZweiHeiligeComponent;
  let fixture: ComponentFixture<SolothurnZweiHeiligeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolothurnZweiHeiligeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolothurnZweiHeiligeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
