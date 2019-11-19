// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnswer = require('../../../app/model/answer');
import ExportExamination = require('../../../app/model/examination');
import ExportQuestionbank = require('../../../app/model/questionbank');
import ExportQuestiontype = require('../../../app/model/questiontype');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Answer: ReturnType<typeof ExportAnswer>;
    Examination: ReturnType<typeof ExportExamination>;
    Questionbank: ReturnType<typeof ExportQuestionbank>;
    Questiontype: ReturnType<typeof ExportQuestiontype>;
    User: ReturnType<typeof ExportUser>;
  }
}
