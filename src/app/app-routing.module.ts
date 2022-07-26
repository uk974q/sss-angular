import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/users', pathMatch:'full'},
  {
    path: 'users', component:UserComponent
  },
  {
    path: 'user-details/:id', component:UserItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
