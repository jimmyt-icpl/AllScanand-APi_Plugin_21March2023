import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { InvinsensePluginSetup, InvinsensePluginStart } from './types';
import { defineRoutes } from './routes';

export class InvinsensePlugin implements Plugin<InvinsensePluginSetup, InvinsensePluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('Invinsense: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('Invinsense: Started');
    return {};
  }

  public stop() {}
}
