import { Store, StoreConfig, StoreConfigOptions} from '@datorama/akita';
import { StateModel } from '../model/state.model';
import { UserType } from '../enum/user.type';

export const sessionStoreConfig: StoreConfigOptions = { name: 'state', resettable: true };

@StoreConfig(sessionStoreConfig)
export class StateStore extends Store<StateModel> {

    constructor() {
        const model: StateModel = { userType: UserType.Undefined };
        super(model);
    }
}
