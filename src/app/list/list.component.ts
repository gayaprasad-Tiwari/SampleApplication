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
  connectedTo = [];
  list:IList[];
  constructor(private modalService:NgbModal) {

    this.list=[{id:0,ListTitle:'abc',cards:[{id:1,name:'a'}]},{id:2,ListTitle:'abc',cards:[{id:3,name:'d'}]}];
    for (let lst of this.list) {
      this.connectedTo.push(lst.id);
    };
   }

  @ViewChild('cardDeletion') cardDeletion;
  ngOnInit(): void {
  }

  oCardDelConf(lst:IList,i) {
    console.log(lst,i)
    this.modalService.open(this.cardDeletion, {ariaLabelledBy: 'modal-basic-title'}).result.then((data)=>{
      lst.cards.splice(i,1);
    }, (data)=>{
      console.log(data)
    })
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
// import { Component } from '@angular/core';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.scss']
// })

// export class ListComponent {
//   Movies = [
//     {id:1,ListTitle:'abc',cards:[{id:1,name:'a'}]},
//     {id:2,ListTitle:'abca',cards:[{id:1,name:'a'}]}
//   ];

//   drop(event: CdkDragDrop<any[]>) {
//     moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
//   }

//   // Transfer Items Between Listsl
//   list = [
//     {id:1,ListTitle:'abqc',cards:[{id:1,name:'a'}]},
//     {id:2,ListTitle:'abcqa',cards:[{id:2,name:'agg'}]}, 
//   ];

//   MoviesWatched = [
//   ];

//   onDrop(event: CdkDragDrop<any[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {
//       transferArrayItem(event.previousContainer.data,
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex);
//     }
//   }
// }