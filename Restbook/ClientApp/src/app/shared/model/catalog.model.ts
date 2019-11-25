import { GroupModel } from './group.model';

export class CatalogModel {
    [key: string]: any;
    public guid: string;
    public name: string;
    public groups: GroupModel[];
}
