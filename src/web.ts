import { WebPlugin } from '@capacitor/core';

import type { BattiPlugin } from './definitions';

export class BattiWeb extends WebPlugin implements BattiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
