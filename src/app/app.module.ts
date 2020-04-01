import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { KembaliComponent } from './pages/kembali/kembali.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	StudentsComponent,
    TeacherComponent,
    KembaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
