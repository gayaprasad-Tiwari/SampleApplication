import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IList} from './list.interface'
import { ListComponent } from './list.component';;
import { By } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NgbModal,NgbModule  } from '@ng-bootstrap/ng-bootstrap';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let modalService: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent],
      imports:[ NgbModule],
      providers:[FormBuilder,NgbModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 1 list item', ()=>{
    const list:IList[] =[];
    debugger
    list.push({ListTitle:'hello', id:1, cards:[]})
    component.list=list;
    fixture.detectChanges();
    let listItem = fixture.debugElement.queryAll(By.css('div.container'))
    expect(listItem.length).toBe(1)
  })

it('should delete list',()=>{
  component.list=[{ListTitle:'abe',id:1},{ListTitle:'adbe',id:2}]
  fixture.detectChanges()
  const select = fixture.debugElement.query(By.css('.closeList')).nativeElement;
  select.dispatchEvent(new Event('click'));
  const ok = document.getElementsByClassName('okClick');
  ok[0].dispatchEvent(new Event('click'));
  fixture.whenStable().then(()=>{
  expect(component.list.length).toBe(1)
  })
})
it('should onModelClose method called',()=>{
  spyOn(component, 'onModelClose').and.callThrough()
  fixture.whenStable().then(()=>{
      expect(component.onModelClose(true)).toHaveBeenCalled() 
      expect(component.editListMode).toBeTruthy()
  })
})
});
