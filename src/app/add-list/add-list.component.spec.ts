import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AddListComponent } from './add-list.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListComponent],
      imports:[ReactiveFormsModule],
      providers:[FormBuilder, NgbModal, {provide: ComponentFixtureAutoDetect, useValue: true }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
