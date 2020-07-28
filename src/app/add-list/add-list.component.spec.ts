import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AddListComponent } from './add-list.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;
  let modalService: NgbModal;
  let activeModal : NgbActiveModal;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListComponent],
      imports:[ReactiveFormsModule],
      providers:[FormBuilder, NgbModal,  NgbActiveModal, {provide: ComponentFixtureAutoDetect, useValue: true }]
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
  it('closeModel method should be called', ()=>{
    spyOn(component, 'closeModel').and.callThrough()
    fixture.whenStable().then(()=>{
        expect(component.closeModel()).toHaveBeenCalled() 
    })
  })
  it('should be opem method called', ()=>{
    spyOn(component, 'open').and.callThrough()
    fixture.whenStable().then(()=>{
        expect(component.open()).toHaveBeenCalled() 
    })
  })
  it('should be edit  method called', ()=>{
    component.f.ListTitle.setValue('abcs');
    spyOn(component, 'editlist').and.callThrough()
    spyOn(component.modelClose, 'emit').and.callThrough()
    fixture.whenStable().then(()=>{
        expect(component.submitted).toBeFalsy();
        expect(component.modelClose.emit(false)).toHaveBeenCalledWith(false)
    })
  })
  it('should be addlist method called', ()=>{
    spyOn(component, 'addlist').and.callThrough()
    component.f.ListTitle.setValue('abc');
    fixture.whenStable().then(()=>{
        expect(component.addlist()).toHaveBeenCalled()
        expect(component.listForm.reset()).toHaveBeenCalled() 
    })
  })
});
