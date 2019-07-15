import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarousolComponent } from './main-carousol.component';

describe('MainCarousolComponent', () => {
  let component: MainCarousolComponent;
  let fixture: ComponentFixture<MainCarousolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarousolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarousolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
