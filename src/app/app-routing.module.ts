import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ExpertComponent } from './expert/expert.component';

const routes: Routes = [
  {path:'',component:BasicComponent},
  {path:'advanced', component:AdvancedComponent},
  {path:'expert',component:ExpertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
