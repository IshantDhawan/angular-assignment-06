import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo.component';
import { SortPipe } from './Pipe/sort.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    SortPipe
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}