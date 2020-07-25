import { Component, OnInit, ViewChild } from '@angular/core';
import {IList} from './list.interface'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  list:IList[]=[];
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
}
