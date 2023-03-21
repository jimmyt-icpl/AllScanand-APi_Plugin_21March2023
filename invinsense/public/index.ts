import './index.scss';

import { InvinsensePlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new InvinsensePlugin();
}
export { InvinsensePluginSetup, InvinsensePluginStart } from './types';
