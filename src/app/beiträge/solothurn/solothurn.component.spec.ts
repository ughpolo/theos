import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolothurnComponent } from './solothurn.component';

describe('SolothurnComponent', () => {
  let component: SolothurnComponent;
  let fixture: ComponentFixture<SolothurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolothurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolothurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
