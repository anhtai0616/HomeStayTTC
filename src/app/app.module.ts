import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
import { BuffcarComponent } from './components/buffcar/buffcar.component';
import { BuffairComponent } from './components/buffair/buffair.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomestayService, UserService } from './services/homestay.service';
import { BuffhomeComponent } from './components/buffhome/buffhome.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { AirdetailComponent } from './components/airdetail/airdetail.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthguardGuard } from './authguard.guard';
import { XeComponent } from './components/admin/xe/xe.component';
import { PhongComponent } from './components/admin/phong/phong.component';
import { DichvuComponent } from './components/admin/dichvu/dichvu.component';
import { KhachhangComponent } from './components/admin/khachhang/khachhang.component';
import { AddphongComponent } from './components/admin/phong/addphong/addphong.component';
import { EditphongComponent } from './components/admin/phong/editphong/editphong.component';
import { AddxeComponent } from './components/admin/xe/addxe/addxe.component';
import { EditxeComponent } from './components/admin/xe/editxe/editxe.component';
import { AdddichvuComponent } from './components/admin/dichvu/adddichvu/adddichvu.component';
import { EditdichvuComponent } from './components/admin/dichvu/editdichvu/editdichvu.component';
import { AddkhComponent } from './components/admin/khachhang/addkh/addkh.component';
import { EditkhComponent } from './components/admin/khachhang/editkh/editkh.component';

const appRoutes : Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component : HomeComponent,
  },
  {
    path:'home/:id',
    component: BuffhomeComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'buffcar',
    component:BuffcarComponent,
  },
  {
    path : 'buffcar/:id',
    component : CardetailComponent
  },
  {
    path : 'buffair',
    component : BuffairComponent,
  },
  {
    path : 'buffair/:id',
    component : AirdetailComponent
  },
  {
    path: 'login',
    component : LoginadminComponent
  },
  {
    path: 'admin',
    canActivate:[AuthguardGuard],
    component: AdminComponent
  },
  {
    path: 'admin/xe',
    component: XeComponent
  },
  {
    path: 'admin/dichvu',
    component: DichvuComponent
  },
  {
    path: 'admin/kh',
    component:KhachhangComponent
  },
  {
    path: 'admin/kh/:id/editkh',
    component:EditkhComponent
  },
  {
    path : 'admin/phong',
    component : PhongComponent
  },
  {
    path : 'admin/phong/:id/editphong',
    component : EditphongComponent
  },
  {
    path : 'admin/xe/:id/editxe',
    component : EditxeComponent
  },
  {
    path : 'admin/dichvu/:id/editdichvu',
    component : EditdichvuComponent
  },
  {
    path : 'admin/phong/addphong',
    component : AddphongComponent
  },
  {
    path: 'admin/kh/addkh',
    component:AddkhComponent
  },
  {
    path : 'admin/xe/addxe',
    component : AddxeComponent
  },
  {
    path : 'admin/dichvu/adddichvu',
    component : AdddichvuComponent
  },
  {
    path: '**',
    component : NotfoundComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    BuffairComponent,
    BuffcarComponent,
    NotfoundComponent,
    HomeComponent,
    FooterComponent,
    BuffhomeComponent,
    CardetailComponent,
    AirdetailComponent,
    LoginadminComponent,
    AdminComponent,
    XeComponent,
    PhongComponent,
    DichvuComponent,
    KhachhangComponent,
    AddphongComponent,
    EditphongComponent,
    AddxeComponent,
    EditxeComponent,
    AdddichvuComponent,
    EditdichvuComponent,
    AddkhComponent,
    EditkhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HomestayService,
    UserService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
