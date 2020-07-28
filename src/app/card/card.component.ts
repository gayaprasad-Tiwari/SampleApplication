import { Component, OnInit, ViewChild, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  submitted:boolean=false;
  cardForm:FormGroup;
  @ViewChild('cardContent') cardContent;
  @Input() singlelist;
  constructor(private fb: FormBuilder, private modalService:NgbModal, private activeModal: NgbActiveModal) { }
  ngOnInit(): void {
    this.cardForm =this.fb.group({
      card:['',Validators.required]
    })
  }

  get f() { return this.cardForm.controls; }

  addCard(){
    this.submitted=true;
    if(this.cardForm.valid){
      if(!this.singlelist.cards){
        this.singlelist.cards=[]
      }
      let obj={id:this.singlelist.cards.length,name:this.f.card.value, editMode:false}
      this.singlelist.cards.push(obj)
      this.cardForm.reset();
      this.submitted=false;
      this.activeModal.close();
    }
  }
  
  open() {
    this.activeModal= this.modalService.open(this.cardContent, {ariaLabelledBy: 'modal-basic-title'})
  }
}
