import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';

import { PromiseService } from './promise.service';
import { ObservableService } from './observable.service';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [PromiseService,ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
