import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDailogComponent } from './popup-dailog.component';

describe('PopupDailogComponent', () => {
  let component: PopupDailogComponent;
  let fixture: ComponentFixture<PopupDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
