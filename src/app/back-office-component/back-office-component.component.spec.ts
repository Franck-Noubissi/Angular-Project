import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeComponentComponent } from './back-office-component.component';

describe('BackOfficeComponentComponent', () => {
  let component: BackOfficeComponentComponent;
  let fixture: ComponentFixture<BackOfficeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackOfficeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
