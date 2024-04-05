import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecretComponent } from './show-secret.component';

describe('ShowSecretComponent', () => {
  let component: ShowSecretComponent;
  let fixture: ComponentFixture<ShowSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSecretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
