import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerEmployeDialogComponent } from './payer-employe-dialog.component';

describe('PayerEmployeDialogComponent', () => {
  let component: PayerEmployeDialogComponent;
  let fixture: ComponentFixture<PayerEmployeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayerEmployeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayerEmployeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
