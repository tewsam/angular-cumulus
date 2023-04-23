import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tewservice2Component } from './tewservice2.component';

describe('Tewservice2Component', () => {
  let component: Tewservice2Component;
  let fixture: ComponentFixture<Tewservice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tewservice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tewservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
