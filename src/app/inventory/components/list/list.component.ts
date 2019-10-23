import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';
import { MatDialog } from '@angular/material';
import { TransferComponent, IDialogTransfer } from '../transfer/transfer.component';
import { Cellar } from '../../models/cellar.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'quantity', 'actions'];

  @Input() items: Array<Item> = [];
  @Input() cellar: Cellar = null;
  @Output() transfer = new EventEmitter<boolean>();
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openTransferDialog(item: Item) {
    console.log(item);
    this.dialog.open(TransferComponent, {
      data: { item, cellar: this.cellar } as IDialogTransfer
    }).afterClosed().subscribe(response => this.transfer.emit(response));
  }

}
