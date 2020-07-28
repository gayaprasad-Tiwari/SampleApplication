import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskStorageService } from '../task-storage.service';

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
  @Output() listAdded= new EventEmitter<any>()
  
  constructor(private fb: FormBuilder, private modalService:NgbModal,  activeModal: NgbActiveModal, private taskStorageService: TaskStorageService ) { }

  ngOnInit(): void {
    this.listForm = this.fb.group({
      ListTitle: ["", [Validators.required, Validators.maxLength(50)]]   
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
//add list
  addlist(){
    this.submitted=true;
    if(this.listForm.valid){
      this.taskStorageService.addList(this.f.ListTitle.value).subscribe((data)=>{
        this.listAdded.emit(data)
        this.closeModel()
      })
    }
  }
  //edit list
  editlist(){
    this.submitted=true;
    if(this.listForm.valid){
      this.taskStorageService.editList(this.editListIndex, this.f.ListTitle.value).subscribe((data) =>{
        this.listAdded.emit(data)
        this.closeModel()
      })
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