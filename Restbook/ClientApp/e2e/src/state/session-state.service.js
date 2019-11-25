import { sessionStateStore } from './session-state.store';

export async function update(id, data) {
  await Promise.resolve();
  sessionStateStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  sessionStateStore.remove(id);
}
