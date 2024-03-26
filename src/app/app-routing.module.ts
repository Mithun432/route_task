import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkModule } from './work/work.module'
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'wrk', loadChildren: ()=> import('./work/work.module').then((m:typeof import('./work/work.module')) =>m.WorkModule) },
   {path:'abt', loadChildren: ()=> import('./about/about.module').then((m:typeof import('./about/about.module')) =>m.AboutModule)},
  //  {path:'',component:AppComponent},
  {path:'cntct/:id', loadChildren: ()=> import('./contact/contact.module').then((m:typeof import('./contact/contact.module')) =>m.ContactModule)},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
