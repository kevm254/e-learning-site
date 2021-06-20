import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogContainerComponent} from '../components/containers/blog-container/blog-container.component';

const routes: Routes = [
  { path:  '', component: BlogContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
