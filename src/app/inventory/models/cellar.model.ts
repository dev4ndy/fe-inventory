import { Item } from './item.model';

export class Cellar {
    public id: number = null;
    public name = '';
    public quantity: number = null;
    public items: Array<Item> = [];
    public createdAt: Date;
    public updatedAt: Date;

    import(data: any): this {

        if (data.hasOwnProperty('id') && data.id) {
            this.id = data.id;
        }

        if (data.hasOwnProperty('name') && data.name) {
            this.name = data.name;
        }

        if (data.hasOwnProperty('Items') && data.Items.length > 0) {
            this.items = data.Items.map((item: any) => new Item().import(item));
        }

        if (data.hasOwnProperty('Inventory') && data.Inventory) {
            this.quantity = +data.Inventory.quantity;
        }

        return this;
    }
}
