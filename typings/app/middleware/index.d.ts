// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheckToken = require('../../../app/middleware/checkToken');

declare module 'egg' {
  interface IMiddleware {
    checkToken: typeof ExportCheckToken;
  }
}
