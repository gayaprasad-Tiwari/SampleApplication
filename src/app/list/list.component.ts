import { Component, OnInit, ViewChild } from '@angular/core';
import { IList } from './list.interface'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { constant } from '../porperties';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list:IList[];
  deleteValue:any;
  deleteHead: string;
  editListMode:boolean =false;
  editListIndex:number;
  @ViewChild(constant.properties.addList) addList;
  constructor(private modalService:NgbModal,  private taskStorageService: TaskStorageService ) {
    this.list=this.taskStorageService.getList()||[];
   }
  @ViewChild(constant.properties.cardDeletion) cardDeletion;
  ngOnInit(): void {}
//edit list name
  editListName(i){
    this.editListIndex=i;
    this.editListMode=true;
    this.addList.open();
  }
  //add new list
  addNewList(){
    this.addList.open()
  }
  //delete card
  oCardDelConf(pi,i,e) {
    this.deleteValue =this.list[pi].cards[i].name;
    this.deleteHead = constant.properties.card
    this.modalService.open(this.cardDeletion, {ariaLabelledBy: constant.properties.cardDelete}).result.then((data)=>{
    this.taskStorageService.deleteCard(pi,i).subscribe((data)=>{
      this.list=data
    })
    }, (data)=>{
      console.log(data)
    })
    e.target.blur()
  }
  //delete list
  oListDelCOnf(i,e){
    this.deleteValue =this.list[i].ListTitle;
    this.deleteHead = constant.properties.List
    this.modalService.open(this.cardDeletion, {ariaLabelledBy: constant.properties.listDelete}).result.then((data)=>{
     this.taskStorageService.deleteLIst(i).subscribe((data)=>{
      this.list=data;
     })

    }, (data)=>{
      console.log(data)
    })
    e.target.blur()
  }
  //for droping data
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  // edit card
  editCard(pi,i){
    this.list[pi].cards[i].editMode=false;
    let name= this.list[pi].cards[i].name;
    this.taskStorageService.editCard(pi,i, name).subscribe((data)=>{
      this.list=data;
    })
  }
  onModelClose(e){
    this.editListMode =e;
  }
  onListAdded(data){
    this.list=data;
  }
}
