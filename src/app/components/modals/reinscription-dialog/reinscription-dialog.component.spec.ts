import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinscriptionDialogComponent } from './reinscription-dialog.component';

describe('ReinscriptionDialogComponent', () => {
  let component: ReinscriptionDialogComponent;
  let fixture: ComponentFixture<ReinscriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinscriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinscriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
