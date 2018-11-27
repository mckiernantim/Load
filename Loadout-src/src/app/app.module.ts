import { AuthService } from './components/auth.service';
import { ValidateService } from './components/validate.service';
import { CablesComponent } from './components/post/electrical/cables/cables.component';
import { RegisterService } from './components/register.service';
import { PostService } from './components/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages'
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { CarpenrtryComponent } from './components/post/carpenrtry/carpenrtry.component';
import { ElectricalComponent } from './components/post/electrical/electrical.component';
import { ToolsComponent } from './components/post/tools/tools.component';
import { MaterialComponent } from './components/post/material/material.component';





const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'post', component: PostComponent}

]


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
   
    DashboardComponent,
    ProfileComponent,
    PostComponent,
    CarpenrtryComponent,
    ElectricalComponent,
    ToolsComponent,
    MaterialComponent,
    CablesComponent
    

   
   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  
  
  ],
  providers: [PostService, RegisterService, ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
