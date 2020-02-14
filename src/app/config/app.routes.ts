import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {NotFoundComponent} from '../pages/not-found/not-found.component';
import {TontineListComponent} from '../pages/tontine_page/tontine-list/tontine-list.component';
import {TontineDetailComponent} from '../pages/tontine_page/tontine-detail/tontine-detail.component';
import {UserComponent} from '../components/user/user.component';
import {UserListComponent} from '../pages/user_page/user-list.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {TontineCreateComponent} from '../pages/tontine_page/tontine-create/tontine-create.component';

const appRoutes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {
    path: 'tontines',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TontineListComponent
      },
      {path: 'create', component: TontineCreateComponent},
      {path: 'edit/:id', component: TontineDetailComponent}
    ]

  },
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}

];

export const AppRouterModule = RouterModule.forRoot(appRoutes);
