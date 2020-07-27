import { Component, OnInit, ViewChild } from '@angular/core';
import { IList } from './list.interface'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  @ViewChild('addList') addList;
  constructor(private modalService:NgbModal) {
    this.list=[];
   }
  @ViewChild('cardDeletion') cardDeletion;
  ngOnInit(): void {}

  editListName(i){
    this.editListIndex=i;
    this.editListMode=true;
    this.addList.open()
  }
  addNewList(){
    this.editListMode=false;
    this.addList.open()
  }
  oCardDelConf(lst:IList,i,e) {
    this.deleteValue =lst.cards[i].name;
    this.deleteHead = 'Card'
    this.modalService.open(this.cardDeletion, {ariaLabelledBy: 'modal-basic-title'}).result.then((data)=>{
      lst.cards.splice(i,1);
    }, (data)=>{
      console.log(data)
    })
    e.target.blur()
  }
  oListDelCOnf(i,e){
    this.deleteValue =this.list[i].ListTitle;
    this.deleteHead = 'List'
    this.modalService.open(this.cardDeletion, {ariaLabelledBy: 'modal-basic-title'}).result.then((data)=>{
      this.list.splice(i,1);
    }, (data)=>{
      console.log(data)
    })
    e.target.blur()
  }
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
    }
  }
}
