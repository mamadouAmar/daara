import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDepenseComponent } from './page-depense.component';

describe('PageDepenseComponent', () => {
  let component: PageDepenseComponent;
  let fixture: ComponentFixture<PageDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
