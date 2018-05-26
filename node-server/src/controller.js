/**
 * @Author: vicky
 * @Date:   2017-06-11 22:04:22
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:48
 */

import path from 'path';
import fs from 'fs';

export default function (router, args) {
  // server route
  const _baseServerRoutePath = path.join(__dirname, 'server-api');
  (function registerRouter(parentPath = '') {
    fs.readdirSync(path.resolve(_baseServerRoutePath, parentPath)).forEach(file => {
      if (/^\./.test(file)) {
        return true;
      }
      const name = file.replace(/\.js$/, '');
      const routePath = `/${parentPath}${name == 'index' ? '' : name}`;
      // filter directory
      if (fs.statSync(path.resolve(_baseServerRoutePath, parentPath, file)).isDirectory()) {
        registerRouter(`${parentPath + file}/`);
      } else {
        console.info(`router registered: ${routePath}`);
        router.use(routePath, require(`./server-api/${parentPath}${name}`)(args)); // eslint-disable-line
      }
    });
  }());
}
