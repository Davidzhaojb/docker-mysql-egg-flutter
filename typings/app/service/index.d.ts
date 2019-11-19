// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCommon = require('../../../app/service/common');
import ExportCreateToken = require('../../../app/service/createToken');
import ExportDbdo = require('../../../app/service/dbdo');

declare module 'egg' {
  interface IService {
    common: ExportCommon;
    createToken: ExportCreateToken;
    dbdo: ExportDbdo;
  }
}
