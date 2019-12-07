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
    router.post('/register', controller.auth.register); // 注册
    router.post('/login', controller.auth.login);       // 登录
    router.post('/createnotes', controller.createnotes.create); // 创建笔记
    router.get('/getallnotes', controller.createnotes.findList); // 查询列表
    router.put('/editnotes', controller.createnotes.edit); // 编辑笔记
    router.get('/deletenote', controller.createnotes.delete); // 删除笔记
    router.get('/api', controller.auth.api);            // 测试
    router.get('/image', controller.auth.image);            // 测试




    router.get('/homepagecontent',controller.shophomepage.findshops);  // 获取首页内容


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
};