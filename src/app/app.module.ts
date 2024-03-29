import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ItemsComponent } from './views/items/items.component';
import { ItemModalComponent } from './components/modals/item-modal/item-modal.component';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
    NgbModule,
	SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
