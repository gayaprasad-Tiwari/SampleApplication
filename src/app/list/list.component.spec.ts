import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import {IList} from './list.interface'
import { ListComponent } from './list.component';;
import { By } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NgbModal,NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { TaskStorageService } from '../task-storage.service';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let taskStorageService:TaskStorageService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent],
      imports:[ NgbModule],
      providers:[FormBuilder,NgbModal,TaskStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    taskStorageService = TestBed.inject(TaskStorageService);
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


it('should onModelClose method called',()=>{
  spyOn(component, 'onModelClose').and.callThrough()
  fixture.whenStable().then(()=>{
      expect(component.onModelClose(true)).toHaveBeenCalled() 
      expect(component.editListMode).toBeTruthy()
  })
})
});
