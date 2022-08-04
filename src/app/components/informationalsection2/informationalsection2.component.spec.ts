import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informationalsection2Component } from './informationalsection2.component';

describe('Informationalsection2Component', () => {
  let component: Informationalsection2Component;
  let fixture: ComponentFixture<Informationalsection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informationalsection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informationalsection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
