import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  submitted:boolean=false;
  listForm:FormGroup;
  activeModal:NgbActiveModal;
  @ViewChild('content') content;
  @Input() list;
  @Input() editListMode;
  @Input() editListIndex;
  @Output() modelClose= new EventEmitter<boolean>()
  constructor(private fb: FormBuilder, private modalService:NgbModal,  activeModal: NgbActiveModal ) { }

  ngOnInit(): void {
    this.listForm = this.fb.group({
      ListTitle: ["", [Validators.required]]   
     })
  }
  ngOnChanges(){
    if(this.editListMode){
      this.f.ListTitle.setValue(this.list[this.editListIndex].ListTitle)
    }else{
      this.f.ListTitle.reset()
    }
  }
  get f() { return this.listForm.controls; }

  addlist(){
    this.submitted=true;
    if(this.listForm.valid){
      this.list.push({'id':this.list.length,'ListTitle': this.f.ListTitle.value, cards:[]})
      this.listForm.reset();
      this.submitted=false;
      this.modelClose.emit(false)
      this.activeModal.close()
    }
  }
  editlist(){
    this.submitted=true;
    if(this.listForm.valid){
      this.list[this.editListIndex].ListTitle= this.f.ListTitle.value;
      this.listForm.reset();
      this.submitted=false;
      this.modelClose.emit(false)
      this.activeModal.close()
    }
  }
  open() {
    this.activeModal = this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
  }
  closeModel(){
      this.listForm.reset();
      this.submitted=false;
      this.modelClose.emit(false)
      this.activeModal.close()
  }

}