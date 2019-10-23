import { Cellar } from './cellar.model';

export class Item {
    public id: number = null;
    public name = '';
    public description = '';
    public quantity: number = null;
    public createdAt: Date;
    public updatedAt: Date;

    import(data: any): this {

        if (data.hasOwnProperty('id') && data.id) {
            this.id = data.id;
        }

        if (data.hasOwnProperty('name') && data.name) {
            this.name = data.name;
        }

        if (data.hasOwnProperty('description') && data.name) {
            this.description = data.name;
        }

        if (data.hasOwnProperty('Inventory') && data.Inventory) {
            this.quantity = +data.Inventory.quantity;
        }

        return this;
    }
}
