import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { KembaliComponent } from './pages/kembali/kembali.component';


const routes: Routes = [
{
	path:'home',
	component:HomeComponent
},
{
	path:'students',
	component:StudentsComponent
},
{
	path:'teacher',
	component:TeacherComponent
},
{
	path:'kembali',
	component:KembaliComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
