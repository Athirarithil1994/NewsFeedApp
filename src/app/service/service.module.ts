import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './pages/header/header.component';
const routes: Routes =[{path:'',component:HomeComponent}]
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    MatCardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class ServiceModule { }
