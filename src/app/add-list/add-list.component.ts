import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {checkDuplicateValue} from './checkDuplicateValidator'
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  submitted:boolean=false;
  listForm:FormGroup;
  @ViewChild('content') content;
  @Input() list;
  @Input() editListMode;
  @Input() editListIndex;
  constructor(private fb: FormBuilder, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.listForm = this.fb.group({
      ListTitle: ["", [Validators.required, checkDuplicateValue(this.list)]]   
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
    }
  }
  editlist(){
    this.submitted=true;
    if(this.listForm.valid){
      this.list[this.editListIndex].ListTitle= this.f.ListTitle.value;
      this.listForm.reset();
      this.submitted=false;
      this.editListMode=false
    }
  }
  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
}

}