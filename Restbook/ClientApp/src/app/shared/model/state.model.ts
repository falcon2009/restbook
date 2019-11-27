import { ViewMode } from '../enum/view.mode';
import { CompanyModel } from './company.model';
import { LocationModel } from './location.model';
import { CatalogModel } from './catalog.model';

export interface StateModel {
    viewMode?: ViewMode,
    activeCompany?: CompanyModel,
    activeLocation?: LocationModel,
    activeCatalog?: CatalogModel,
}