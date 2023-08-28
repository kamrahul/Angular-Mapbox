import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLandingComponentComponent } from './map-landing-component.component';

describe('MapLandingComponentComponent', () => {
  let component: MapLandingComponentComponent;
  let fixture: ComponentFixture<MapLandingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLandingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLandingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
