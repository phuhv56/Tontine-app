import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { TontineListComponent } from '../pages/home/tontine-list/tontine-list.component';
import { TontineDetailComponent } from '../pages/home/tontine-detail/tontine-detail.component';
import { UserComponent } from '../components/user/user.component';
import { UserListComponent } from '../pages/user-list/user-list.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { TontineCreateComponent } from '../pages/home/tontine-create/tontine-create.component';

const appRoutes: Routes = [
    {path: "signin", component: LoginComponent},
    {path: "signup", component: RegisterComponent},
    {path: "tontines", component: TontineListComponent, canActivate: [AuthGuard]},
    {path: "create-tontine", component: TontineCreateComponent, canActivate: [AuthGuard]},
    {path: "tontine/:id", component: TontineDetailComponent, canActivate: [AuthGuard]},
    {path: "users", component: UserListComponent, canActivate: [AuthGuard]},
    {path: "**", component: NotFoundComponent}

];

export const AppRouterModule = RouterModule.forRoot(appRoutes);