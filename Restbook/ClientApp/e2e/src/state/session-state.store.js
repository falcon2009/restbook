import { createStore } from '@datorama/akita';

const initialState = {};

export const sessionStateStore = createStore(initialState, { name: 'sessionState' });

