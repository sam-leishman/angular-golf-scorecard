import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectComponent } from '../components/course-select/course-select.component';
import { CourseSettingsComponent } from '../components/course-settings/course-settings.component';
import { ScorecardComponent } from '../components/scorecard/scorecard.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseSelectComponent },
  { path: 'settings/:id', component: CourseSettingsComponent },
  { path: 'scorecard/:id', component: ScorecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
