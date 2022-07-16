import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEleveComponent } from './page-eleve.component';

describe('PageEleveComponent', () => {
  let component: PageEleveComponent;
  let fixture: ComponentFixture<PageEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
