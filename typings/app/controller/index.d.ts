// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnswer = require('../../../app/controller/answer');
import ExportAuth = require('../../../app/controller/auth');
import ExportCandidates = require('../../../app/controller/candidates');
import ExportQuestions = require('../../../app/controller/questions');

declare module 'egg' {
  interface IController {
    answer: ExportAnswer;
    auth: ExportAuth;
    candidates: ExportCandidates;
    questions: ExportQuestions;
  }
}
