import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DataService } from './data.service';
import { DatatextService } from './datatext.service';

const appRoutes:Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [DataService,DatatextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
