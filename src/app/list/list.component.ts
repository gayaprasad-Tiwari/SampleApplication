import { Component, OnInit, ViewChild } from '@angular/core';
import {IList} from './list.interface'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list:IList[];
  deleteValue;
  deleteHead: string;
  constructor(private modalService:NgbModal) {
    this.list=[{id:0,ListTitle:'abc',cards:[{id:1,name:'a', editMode:false}]},{id:2,ListTitle:'abc',cards:[{id:3,name:'d',editMode:false}]}];

   }

  @ViewChild('cardDeletion') cardDeletion;
  ngOnInit(): void {
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
