import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentsComponent } from './pages/students/students.component';


const routes: Routes = [
{
	path:'home',
	component:HomeComponent
},
{
	path:'teacher',
	component:TeacherComponent
},
{
	path:'students',
	component:StudentsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
