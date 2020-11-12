import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login`
    { path: '**', component: LoginComponent },
  ];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
