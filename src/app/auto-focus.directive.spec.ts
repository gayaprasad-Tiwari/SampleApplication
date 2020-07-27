import { AutofocusDirective } from './auto-focus.directive';
import { ElementRef, Input, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('AutofocusDirective', () => {
  let component: TestFocusComponent;
  let fixture:ComponentFixture<TestFocusComponent>
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFocusComponent, AutofocusDirective] 
    });
    fixture = TestBed.createComponent(TestFocusComponent); 
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });
  it('should create an instance', () => {
      const directive = new AutofocusDirective(inputEl);
     expect(directive).toBeTruthy();
  });

});

@Component({
  template: `<input type="text" AutofocusDirective>` 
})
class TestFocusComponent {
}