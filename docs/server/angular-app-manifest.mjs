
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/requeterico-menu-1.0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/Program%20Files/Git/requeterico-menu-1.0"
  },
  {
    "renderMode": 1,
    "route": "/Program%20Files/Git/requeterico-menu-1.0/inicio"
  },
  {
    "renderMode": 1,
    "route": "/Program%20Files/Git/requeterico-menu-1.0/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 828, hash: '705b3dbe8c80ce6e60e1bfbf8739adef01045b3b0c3e0ccd20c3e43198969c3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1156, hash: '9f91c3157bc3cd75704fa903f42640120fb87f782937d3311f27bf2ce62ffded', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3FJ6LNGY.css': {size: 632, hash: 'no0c4xfeoDM', text: () => import('./assets-chunks/styles-3FJ6LNGY_css.mjs').then(m => m.default)}
  },
};
