import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainsFormComponent } from './complains-form/complains-form.component';
import { ComplainsListComponent } from './complains-list/complains-list.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'complains-list',
      pathMatch: 'full',
    },
    {
      path: 'complains-list',
      component: ComplainsListComponent,
    },
    {
      path: 'complains-form/:id',
      component: ComplainsFormComponent,
    },
    {
      path: 'complains-form',
      component: ComplainsFormComponent,
    },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
