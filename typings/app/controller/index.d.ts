// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/controller/auth');
import ExportCreatenotes = require('../../../app/controller/createnotes');
import ExportCreatepassword = require('../../../app/controller/createpassword');
import ExportShophomepage = require('../../../app/controller/shophomepage');

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    createnotes: ExportCreatenotes;
    createpassword: ExportCreatepassword;
    shophomepage: ExportShophomepage;
  }
}
