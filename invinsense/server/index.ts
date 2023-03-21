import { PluginInitializerContext } from '../../../src/core/server';
import { InvinsensePlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new InvinsensePlugin(initializerContext);
}

export { InvinsensePluginSetup, InvinsensePluginStart } from './types';
