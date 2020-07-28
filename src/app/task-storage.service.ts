import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IList } from './list/list.interface'
@Injectable({
  providedIn: 'root'
})
//storege service for add update  and delete
export class TaskStorageService {
  list:IList[];
  constructor() {
    this.list = this.getList() || []
  }
  //add list
  addList(listName): Observable<IList[]> {
    this.list.push({ 'id': this.list.length, 'ListTitle': listName, cards: [] })
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
  //edit list
  editList(index, data): Observable<IList[]> {
    this.list[index].ListTitle=data;
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
  //create list
  deleteLIst(index){
    this.list.splice(index,1);
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
  //delete card
  deleteCard(pi,i){
    this.list[pi].cards.splice(i,1);
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
  // get all list
  getList() {
    return JSON.parse(localStorage.getItem('list'));
  }
  //edit card
  editCard(pi,i, name){
    this.list[pi].cards[i].name=name;
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
  //add card
  addCard(index, cardItem): Observable<IList[]> {
    this.list = this.getList() || []
    let cards = this.list[index].cards;
    cards.push({ 'id': cards.length, name: cardItem, editMode: false })
    localStorage.setItem('list', JSON.stringify(this.list));
    return of(this.list)
  }
}
