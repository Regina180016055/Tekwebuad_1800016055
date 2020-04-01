import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
