import { ViewMode } from '../enum/view.mode';
import { CompanyModel } from './company.model';
import { LocationModel } from './location.model';
import { CatalogModel } from './catalog.model';
import { AppMode } from '../enum/app.mode';
import { UserType } from '../enum/user.type';

export interface StateModel {
    userType?: UserType,
    appMode?: AppMode,
    viewMode?: ViewMode,
    activeCompany?: CompanyModel,
    activeLocation?: LocationModel,
    activeCatalog?: CatalogModel,
}