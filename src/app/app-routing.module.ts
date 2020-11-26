import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoicesComponent } from './choices/choices.component';
import { ChooserComponent } from './chooser/chooser.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'choice-component', component: ChoicesComponent },
  { path: 'chooser-component', component: ChooserComponent },
  { path: 'result-component', component: ResultComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
