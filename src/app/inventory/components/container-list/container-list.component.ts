import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Cellar } from '../../models/cellar.model';
import { Item } from '../../models/item.model';
import { CellarService } from '../../services/cellar.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {
  public form: FormGroup;
  public cellars: Array<Cellar> = [];
  public items: Array<Item> = [];
  public currentCellar: Cellar = null;

  constructor(
    private inventoryService: InventoryService,
    private cellarService: CellarService
  ) { }

  ngOnInit() {
    this.getCellars();
  }

  getCellars() {
    this.cellarService.index().subscribe(cellars => this.cellars = cellars);
  }

  changeCellar(event: MatSelectChange) {
    const cellar = event.value as Cellar;
    if (cellar) {
      this.currentCellar = cellar;
      this.refresh();
    }
  }

  refresh(event: boolean = true) {
    if (event) {
      this.inventoryService.byCellar(`${this.currentCellar.id}`).subscribe(c => this.items = [...c.items]);
    }
  }


}
