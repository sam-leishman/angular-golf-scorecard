import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectComponent } from '../components/course-select/course-select.component';
import { CourseSettingsComponent } from '../components/course-settings/course-settings.component';

const routes: Routes = [
  { path: 'courses', component: CourseSelectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
