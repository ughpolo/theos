import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtItemComponent } from './ort-item.component';

describe('OrtItemComponent', () => {
  let component: OrtItemComponent;
  let fixture: ComponentFixture<OrtItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrtItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
