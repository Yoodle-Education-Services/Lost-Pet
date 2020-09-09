import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundedItemComponent } from './founded-item.component';

describe('FoundedItemComponent', () => {
  let component: FoundedItemComponent;
  let fixture: ComponentFixture<FoundedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
