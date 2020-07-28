import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { FormBuilder } from '@angular/forms';
import { NgbModal,  NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let modalService: NgbModal;
  let activeModal: NgbActiveModal;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent , ],
      imports:[],
      providers:[FormBuilder, NgbModal, NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', ()=>{
      expect(component.cardForm.valid).toBeFalse() 
  });
  it('card field invalid when empty', () =>{
    let card = component.cardForm.controls["card"];
    expect(card.valid).toBeFalsy()
    let errors ={}
    errors= card.errors;
    expect(errors['required']).toBeTruthy();
  })

  it('submited should be true', ()=>{
    component.singlelist={ListTitle:'abn', id:1,}
    let card = component.cardForm.controls["card"];
    card.setValue('abc')
    component.addCard()
    fixture.whenStable().then(()=>{
        expect(component.submitted).toBeFalsy()
        expect(component.singlelist.cards.length).toBe(1)
    })
  
  })
  it('model shold be open',()=>{
     component.open()
      fixture.whenStable().then(()=>{
        expect(component.open).toHaveBeenCalled()
      })
  })
});
