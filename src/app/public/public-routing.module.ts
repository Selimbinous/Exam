import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [{ path: '', component: PublicComponent },
{path: 'home', component: ListPostComponent},
{path: 'add', component: AddPostComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
