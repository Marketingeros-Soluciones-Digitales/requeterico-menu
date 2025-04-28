
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/*"
  },
  {
    "renderMode": 1,
    "route": "/inicio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 787, hash: '795be30e0f1160ff816b667aed9aae8c0c544f780da1b1c8b7246322dd39c245', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: 'f92873b1d5f3dbb480cb5db61c58ec364ba202f82116ada6be0ad7ed8c44e4d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LWDQM6ES.css': {size: 84291, hash: '+WzmT5oZAEQ', text: () => import('./assets-chunks/styles-LWDQM6ES_css.mjs').then(m => m.default)}
  },
};
