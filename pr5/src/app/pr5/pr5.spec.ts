import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr5 } from './pr5';

describe('Pr5', () => {
  let component: Pr5;
  let fixture: ComponentFixture<Pr5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
