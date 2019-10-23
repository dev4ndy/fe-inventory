import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cellar } from '../../models/cellar.model';
import { Item } from '../../models/item.model';
import { CellarService } from '../../services/cellar.service';
import { InventoryService } from '../../services/inventory.service';

export interface IDialogTransfer {
  item: Item;
  cellar: Cellar;
}

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  cellarsDestiny: Array<Cellar> = [];
  transfer: FormGroup;
  item: Item;
  cellarOrigin: Cellar;

  validationMesssages = null;
  constructor(
    private cellarService: CellarService,
    private inventoryService: InventoryService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogTransfer
  ) {
    console.log(data);
    this.item = data.item;
    this.cellarOrigin = data.cellar;
    this.setValidationMessage();
  }

  ngOnInit() {
    this.createForm();
    this.getCellars();
  }

  getCellars() {
    this.cellarService.index().subscribe(cellars => this.cellarsDestiny = cellars.filter(c => c.id !== this.cellarOrigin.id));
  }

  createForm() {
    this.transfer = this.fb.group({
      itemId: [this.item.id, Validators.required],
      cellarOriginId: [this.cellarOrigin.id, Validators.required],
      cellarDestinyId: ['', Validators.required],
      units: [this.item.quantity, [Validators.required, Validators.max(this.item.quantity), Validators.min(1)]]
    });
  }

  submit() {
    if (this.transfer.valid) {
      this.inventoryService.transfer(JSON.stringify(this.transfer.value)).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
  }

  setValidationMessage() {
    this.validationMesssages = {
      cellarDestinyId: [
        { type: 'required', message: 'The destination warehouse is required.' },
      ],
      units: [
        { type: 'required', message: 'The units are required.' },
        { type: 'max', message: `The maximum amount to transfer is: ${this.item.quantity}.` },
        { type: 'min', message: 'The minimun amount to transfer is: 1.' }
      ],
    };
  }

}
