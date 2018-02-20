import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressItemViewComponent } from './address-item-view.component';

describe('AddressItemViewComponent', () => {
  let component: AddressItemViewComponent;
  let fixture: ComponentFixture<AddressItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
