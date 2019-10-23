import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ContainerListComponent } from './components/container-list/container-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ContainerListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
