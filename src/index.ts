import { registerPlugin } from '@capacitor/core';

import type { BattiPlugin } from './definitions';

const Batti = registerPlugin<BattiPlugin>('Batti', {
  web: () => import('./web').then(m => new m.BattiWeb()),
});

export * from './definitions';
export { Batti };
