import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistingPlaceComponent } from './visting-place.component';

describe('VistingPlaceComponent', () => {
  let component: VistingPlaceComponent;
  let fixture: ComponentFixture<VistingPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistingPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
