import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [AppComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
