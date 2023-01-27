import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastSucceedComponent } from './toast-succeed.component';

describe('ToastSucceedComponent', () => {
  let component: ToastSucceedComponent;
  let fixture: ComponentFixture<ToastSucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastSucceedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
