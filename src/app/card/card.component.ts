import { Component, OnInit, ViewChild, Input, SimpleChange, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { constant } from '../porperties';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  submitted:boolean=false;
  cardForm:FormGroup;
  @ViewChild('cardContent') cardContent;
  @Input() index;
  @Output() cardAdded = new EventEmitter<any>()
  constructor(private fb: FormBuilder, private modalService:NgbModal, private activeModal: NgbActiveModal, private taskStorageService: TaskStorageService ) { }
  ngOnInit(): void {
    this.cardForm =this.fb.group({
      card:['',Validators.required]
    })
  }

  get f() { return this.cardForm.controls; }
  
//add new card
  addCard(){
    this.submitted=true;
    if(this.cardForm.valid){
      this.taskStorageService.addCard(this.index, this.f.card.value).subscribe((data)=>{
        this.cardAdded.emit(data)
      })
      this.cardForm.reset();
      this.submitted=false;
      this.activeModal.close();
    }
  }
  
  open() {
    this.activeModal= this.modalService.open(this.cardContent, {ariaLabelledBy: constant.properties.addCard})
  }
}
