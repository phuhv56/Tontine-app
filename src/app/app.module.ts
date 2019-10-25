import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './config/app.routes';


import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';


import { AppComponent } from './app.component';
import { TontineListComponent } from './pages/home/tontine-list/tontine-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { TontineComponent } from './components/tontine/tontine.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TontineDetailComponent } from './pages/home/tontine-detail/tontine-detail.component';
import { TontineMonthComponent } from './components/tontine-month/tontine-month.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TontineCreateComponent } from './pages/home/tontine-create/tontine-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TontineListComponent,
    UserListComponent,
    UserComponent,
    TontineComponent,
    LoginComponent,
    RegisterComponent,
    TontineDetailComponent,
    TontineMonthComponent,
    HeaderComponent,
    NotFoundComponent,
    TontineCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
