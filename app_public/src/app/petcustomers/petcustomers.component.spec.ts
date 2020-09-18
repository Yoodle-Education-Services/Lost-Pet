import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetcustomersComponent } from './petcustomers.component';

describe('PetcustomersComponent', () => {
  let component: PetcustomersComponent;
  let fixture: ComponentFixture<PetcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
