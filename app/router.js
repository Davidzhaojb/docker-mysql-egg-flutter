'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
    swagger
  } = app;
  const checkToken = app.middleware.checkToken({}, app);
  // auth
  router.post('/register', controller.auth.register);
  router.post('/login', controller.auth.login);

  // 题库
  router.get('/questionList', checkToken, controller.questions.questionList); // 获取题库列表
  router.get('/qtTotal', checkToken, controller.questions.qlTotal); // 获取题库列表总数
  router.post('/createQuestion', checkToken, controller.questions.createQuestion); // 创建题库
  router.put('/editQuestion', checkToken, controller.questions.editQuestion); // 编辑题库

  router.get('/getQuestionsBasedOnType', checkToken, controller.questions.getQuestionsBasedOnType);
  router.get('/getQuestionsForCandidate', controller.questions.getQuestionsForCandidate);  // 公开接口 不验证token
  router.get('/getBothQuestionsAndAnswerForCandidate', checkToken, controller.questions.getBothQuestionsAndAnswerForCandidate);
  router.delete('/deleteQuestion', controller.questions.deleteQuestion);

  // 题库类型
  router.get('/questionTypeList', checkToken, controller.questions.questionTypeList); // 获取题库类型列表
  router.get('/qtlTotal', checkToken, controller.questions.qtlTotal); // 获取题库类型列表总数
  router.get('/allQtl', checkToken, controller.questions.allQtl); // 获取题库类型全部列表
  router.post('/createQuestionType', checkToken, controller.questions.createQuestionType); // 创建题库类型
  router.put('/editQuestionType', checkToken, controller.questions.editQuestionType); // 编辑题库类型

  // userinfo
  // router.put('/updateAvatar', checkToken, controller.auth.updateAvatar);     // 更新头像
  // router.get('/updateDownload', controller.app.updateDownload); // 更新apk ipa下载量

  // 参试人
  router.post('/createCandidate', checkToken, controller.candidates.createCandidate);
  router.get('/getAllCandidatesNum', controller.candidates.getAllCandidatesNum);
  router.get('/getCandidateList', checkToken, controller.candidates.getCandidateList);
  router.put('/editCandidate', controller.candidates.editCandidate); // 公开接口 不验证token
  router.get('/getCandidateById',  controller.candidates.getCandidateById);
  router.put('/updateCandidateStartTime',  controller.candidates.updateCandidateStartTime);

  /// 答案
  router.post('/createAnswers', controller.answer.createAnswers); // 公开接口 不验证token
  router.get('/getAnswersByCandidateId',  controller.answer.getAnswersByCandidateId);
  router.put('/updateAnswer', controller.answer.updateAnswer);

  // auto
  // 注册
  swagger.post('/register', {
    tags: ['注册'],
    summary: '注册用户',
    description: '',
    parameters: [
      {
        in: 'body',
        name: 'body',
        description: '用户注册信息',
        required: true,
        schema: {
          type: 'object',
          required: ['userName', 'userEmail', 'pwdGroup'],
          properties: {
            userName: {
              type: 'string',
              description: '用户名',
            },
            userEmail: {
              type: 'string',
              description: '用户邮箱',
            },
            pwdGroup: {
              type: 'object',
              required: ['pwd', 'rePwd'],
              properties: {
                pwd: {
                  type: 'string',
                  description: '第一次密码'
                },
                rePwd: {
                  type: 'string',
                  description: '第一次密码'
                }
              }
            },
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'SUCCEED',
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'number',
              description: '注册成功状态码'
            },
            msg: {
              type: 'string',
              description: '注册成功提示信息',
            },
            data: {
              type: 'string',
              description: '空字符串',
            },
          },
        },
      },
    },
  });
  // 登录
  swagger.post('/login', {
    tags: ['登录'],
    summary: '登录用户',
    description: '',
    parameters: [
      {
        in: 'body',
        name: 'body',
        description: '登录用户信息',
        required: true,
        schema: {
          type: 'object',
          required: ['userEmail', 'pwd'],
          properties: {
            userEmail: {
              type: 'string',
              description: '用户邮箱',
            },
            pwd: {
              type: 'string',
              description: '用户密码',
            },
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'SUCCEED',
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: '用户id' },
            userName: { type: 'string', description: '用户名' },
            avatar: { type: 'string', description: '用户头像地址' },
            userEmail: { type: 'string', description: '用户邮箱' },
            createdTime: { type: 'string', description: '创建时间' }
          },
        },
      },
    },
  });

  // 题库
  swagger.get('/questionList', {
    tags: ['题库'],
    summary: '按照页码搜索考题列表',
    description: '',
    parameters: [{
      in: 'query',
      name: 'page',
      description: '页码'
    }, {
      in: 'query',
      name: 'pageSize',
      description: '每一页的数据条数'
    }],
    responses: {
      200: {
        description: 'SUCCEED',
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: ''
            },
            msg: {
              type: 'msg',
              description: '响应信息'
            },
            data: {
              type: 'string',
              description: '查询结果数组'
            }
          }
        }
      }

    }
  });
  swagger.get('/qtTotal', {
    tags: ['题库'],
    summary: '考题数量',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'SUCCEED',
        schema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: ''
            },
            msg: {
              type: 'msg',
              description: '响应信息'
            },
            data: {
              type: 'string',
              description: '查询结果-长度'
            }
          }
        }
      }

    }
  });
  swagger.post('/createQuestion', {
    tags: ['题库'],
    summary: '创建题库',
    description: '',
    parameters: [
      {
        in: 'body',
        name: 'body',
        description: '创建题库参数',
        required: true,
        schema: {
          type: 'object',
          required: ['creatorId', 'creatorName', 'questionType', 'questionTypeName', 'questionContent', 'questionAnswer'],
          properties: {
            creatorId: {
              type: 'string',
              description: '创建者id',
            },
            creatorName: {
              type: 'string',
              description: '创建者姓名',
            },
            questionType: {
              type: 'string',
              description: '考题类型',
            },
            questionTypeName: {
              type: 'string',
              description: '考题类型名字',
            },
            questionContent: {
              type: 'string',
              description: '考题内容',
            },
            questionAnswer: {
              type: 'string',
              description: '考题答案',
            },
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'SUCCEED',
        schema: {
          type: 'object',
          properties: {
            code: { type: 'string', description: '响应类型' },
            msg: { type: 'string', description: '响应消息' },
            data: { type: 'string', description: '' }
          },
        },
      },
    },
  });
  // swagger.put('/editeQuestionType', {
  //   tags: ['题库'],
  //   summary: '编辑题库',
  //   description: '',
  //   parameters: [
  //     {
  //       in: 'body',
  //       name: 'body',
  //       description: '编辑题库参数',
  //       required: true,
  //       schema: {
  //         type: 'object',
  //         required: ['id', 'questionType', 'questionContent', 'questionAnswer'],
  //         properties: {
  //           creatorId: {
  //             type: 'string',
  //             description: '创建者id',
  //           },
  //           creatorName: {
  //             type: 'string',
  //             description: '创建者姓名',
  //           },
  //           questionType: {
  //             type: 'string',
  //             description: '考题类型',
  //           },
  //           questionTypeName: {
  //             type: 'string',
  //             description: '考题类型名字',
  //           },
  //           questionContent: {
  //             type: 'string',
  //             description: '考题内容',
  //           },
  //           questionAnswer: {
  //             type: 'string',
  //             description: '考题答案',
  //           },
  //         },
  //       },
  //     },
  //   ],
  //   responses: {
  //     200: {
  //       description: 'SUCCEED',
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           code: { type: 'string', description: '响应类型' },
  //           msg: { type: 'string', description: '响应消息' },
  //           data: { type: 'string', description: '' }
  //         },
  //       },
  //     },
  //   },
  // });

};