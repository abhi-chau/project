import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { unsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent,
    canDeactivate:[unsavedGuard]
    
  },
  {
    path:'users/:id',
    component:UsersComponent
  },
  {
    path:'',
    component:HomeComponent
    
  },
  {
    path:'**', 
    component:NotfoundComponent
  },
  {path:'rxjs-learning',component:RxjsLearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
