import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerMenuComponent } from './controller-menu/controller-menu.component';
import { PreviewBoardComponent } from './preview-board/preview-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerMenuComponent,
    PreviewBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
