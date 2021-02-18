import { Time } from '@angular/common';
import { CatalogModel } from './catalog.model';

export class LocationModel {
    [key: string]: any;
    public uri: string;
    public imageInfo: string
    public workTimeFrom: Time;
    public workTimeTo: Time;
    public cookDescription: string;
    public interierInfo: string;
    public placesInfo: string;
    public actionDescription: string;
    public eventDescription: string;
    public  description: string;
    public guid: string;
    public name: string;
    public catalogs: CatalogModel[];
}