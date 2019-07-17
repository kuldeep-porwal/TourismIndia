import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistingPlaceDetailComponent } from './visting-place-detail.component';

describe('VistingPlaceDetailComponent', () => {
  let component: VistingPlaceDetailComponent;
  let fixture: ComponentFixture<VistingPlaceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistingPlaceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistingPlaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
