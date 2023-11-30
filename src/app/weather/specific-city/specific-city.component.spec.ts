import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCityComponent } from './specific-city.component';

describe('SpecificCityComponent', () => {
  let component: SpecificCityComponent;
  let fixture: ComponentFixture<SpecificCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
