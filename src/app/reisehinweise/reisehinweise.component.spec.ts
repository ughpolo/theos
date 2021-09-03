import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisehinweiseComponent } from './reisehinweise.component';

describe('ReisehinweiseComponent', () => {
  let component: ReisehinweiseComponent;
  let fixture: ComponentFixture<ReisehinweiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReisehinweiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReisehinweiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
