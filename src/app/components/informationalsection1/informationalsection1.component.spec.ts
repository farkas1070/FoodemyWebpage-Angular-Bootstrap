import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informationalsection1Component } from './informationalsection1.component';

describe('Informationalsection1Component', () => {
  let component: Informationalsection1Component;
  let fixture: ComponentFixture<Informationalsection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Informationalsection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informationalsection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
