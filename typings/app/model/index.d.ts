// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNotes = require('../../../app/model/notes');
import ExportPassword = require('../../../app/model/password');
import ExportShops = require('../../../app/model/shops');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Notes: ReturnType<typeof ExportNotes>;
    Password: ReturnType<typeof ExportPassword>;
    Shops: ReturnType<typeof ExportShops>;
    User: ReturnType<typeof ExportUser>;
  }
}
