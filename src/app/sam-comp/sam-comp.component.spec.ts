import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamCompComponent } from './sam-comp.component';

describe('SamCompComponent', () => {
  let component: SamCompComponent;
  let fixture: ComponentFixture<SamCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
