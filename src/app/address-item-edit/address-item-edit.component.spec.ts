import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressItemEditComponent } from './address-item-edit.component';

describe('AddressItemEditComponent', () => {
  let component: AddressItemEditComponent;
  let fixture: ComponentFixture<AddressItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
