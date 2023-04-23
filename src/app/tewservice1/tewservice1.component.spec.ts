import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tewservice1Component } from './tewservice1.component';

describe('Tewservice1Component', () => {
  let component: Tewservice1Component;
  let fixture: ComponentFixture<Tewservice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tewservice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tewservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
