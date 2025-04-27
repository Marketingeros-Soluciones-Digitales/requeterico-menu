
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
    "route": "/inicio"
  },
  {
    "renderMode": 1,
    "route": "/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 787, hash: '4ebbdfee990a73c305ea404ad370ca5a639191d49cbe964f4bf8e141a263d840', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '492086d5bb1508758f156df4f88e63dfb4f39f5798aaca2b07001c86c7bf49ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LWDQM6ES.css': {size: 84291, hash: '+WzmT5oZAEQ', text: () => import('./assets-chunks/styles-LWDQM6ES_css.mjs').then(m => m.default)}
  },
};
