import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Header2Component } from './components/header2/header2.component';
import { Informationalsection1Component } from './components/informationalsection1/informationalsection1.component';
import { Header3Component } from './components/header3/header3.component';
import { Informationalsection2Component } from './components/informationalsection2/informationalsection2.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomebottomComponent } from './components/homebottom/homebottom.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import {CookieService} from 'ngx-cookie-service';
import { SharedService } from './shared.service';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const appRoute: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'About', component: Informationalsection2Component },
  { path: 'Contact', component: Informationalsection1Component },
  { path: 'Products', component: ProductsComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Profile', component: ProfileComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    Informationalsection1Component,
    Header3Component,
    Informationalsection2Component,
    FooterComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    HomebottomComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    ReadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiserviceService,CookieService,SharedService,{provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
