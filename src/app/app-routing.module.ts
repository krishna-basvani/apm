import {NgModule} from '@angular/core';
// Routing
import {RouterModule} from '@angular/router';
// Importing modules
import { LoginComponent } from './user/login.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports:[
    RouterModule.forRoot([
        {path:'welcome', component:WelcomeComponent},
        {path:'login', component:LoginComponent},
        {path:'', redirectTo:'products',pathMatch:'full'},
        {path:'**', component:PageNotFoundComponent}
      ])],
      exports: [RouterModule]    
})

export class AppRoutingModule{

}