import { createQuery } from '@datorama/akita';
import { sessionStateStore } from './session-state.store';

export const sessionStateQuery = createQuery(sessionStateStore);
