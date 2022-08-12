import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebottomComponent } from './homebottom.component';

describe('HomebottomComponent', () => {
  let component: HomebottomComponent;
  let fixture: ComponentFixture<HomebottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
