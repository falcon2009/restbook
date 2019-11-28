import { AddressModel } from './address.model';
import { LocationModel } from './location.model';

export class CompanyModel {
    [key: string]: any;
    public rating: number;
    public adddress: AddressModel;
    public cellular: string;
    public phone: string;
    public email: string;
    public skype: string;
    public uri: string;
    public description: string;
    public reorderLevel: number;
    public title: string;
    public guid: string;
    public name: string;
    public locations: LocationModel[];
}
