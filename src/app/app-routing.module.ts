import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login`
    { path: 'tasklist',   redirectTo: '/tasklists', pathMatch: 'full' }, 
    { path: 'project',   redirectTo: '/project', pathMatch: 'full' }, 
  ];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
