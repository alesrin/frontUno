import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

import { NgBootstrapComponent } from './ng-bootstrap/ngbd-alert-closeable.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgBootstrapComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
