// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/wangly19/Desktop/moyu-developer/moyu-free-code/node_modules/.pnpm/registry.npmmirror.com+@umijs+runtime@3.5.24_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index').default,
    "routes": [
      {
        "path": "/desktop",
        "component": require('@/pages/desktop').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
