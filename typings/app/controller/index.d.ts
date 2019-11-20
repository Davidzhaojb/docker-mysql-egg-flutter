// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/controller/auth');
import ExportCreatenotes = require('../../../app/controller/createnotes');

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    createnotes: ExportCreatenotes;
  }
}
