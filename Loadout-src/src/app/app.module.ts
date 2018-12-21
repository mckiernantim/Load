import { Source4Component } from './components/post/electrical/cables/source4/source4.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';






const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
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
    CablesComponent,
    Source4Component
    

   
   
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
    HttpClientModule,
  
  
  ],
  providers: [PostService, RegisterService, ValidateService, AuthService, HttpClientModule, AuthGuard,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
