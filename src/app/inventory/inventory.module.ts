import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ListComponent } from './components/list/list.component';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { SharedModule } from '../shared/shared.module';
import { TransferComponent } from './components/transfer/transfer.component';


@NgModule({
  declarations: [ListComponent, ContainerListComponent, TransferComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ],
  entryComponents: [
    TransferComponent
  ]
})
export class InventoryModule { }
