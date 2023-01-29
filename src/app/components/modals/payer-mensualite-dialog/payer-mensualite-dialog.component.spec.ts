import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerMensualiteDialogComponent } from './payer-mensualite-dialog.component';

describe('PayerMensualiteDialogComponent', () => {
  let component: PayerMensualiteDialogComponent;
  let fixture: ComponentFixture<PayerMensualiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayerMensualiteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayerMensualiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
