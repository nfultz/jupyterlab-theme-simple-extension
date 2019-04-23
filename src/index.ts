// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Simple Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@nfultz/jupyterlab-theme-simple-extension:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
  const style = '@nfultz/jupyterlab-theme-simple-extension/index.css';

    manager.register({
      name: 'JupyterLab Simple',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
