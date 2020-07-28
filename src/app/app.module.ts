import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddListComponent } from './add-list/add-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AutofocusDirective } from './auto-focus.directive';
import { CheckDuplicateDirective } from './check-duplicate.directive';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddListComponent,
    CardComponent,
    AutofocusDirective,
    CheckDuplicateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgbModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
