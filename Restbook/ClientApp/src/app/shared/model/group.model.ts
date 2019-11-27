import { ProductModel } from './product.model';

export class GroupModel {
    [key: string]: any;
    public guid: string;
    public name: string;
    public products: ProductModel[];
}