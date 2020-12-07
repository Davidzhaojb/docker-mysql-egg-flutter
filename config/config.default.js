/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1559271081074_4657';

    // exports.cluster = {
    //   listen: {
    //     port: 6666,
    //     hostname: '192.168.164.97',
    //     // path: '/var/run/egg.sock',
    //   }
    // }

    config.url = '127.0.0.1:7001';
    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        security: {
            csrf: {
                enable: false
            },
            domainWhiteList: ['*']
        },
        cors: {
            allowMethods: 'GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS'
        },
        multipart: {
            fileSize: '1500mb',
            fileExtensions: [
                '.foo',
                '.apk',
                '.rar',
                '.zip',
                '.js',
                '.html',
                '.css',
                '.doc',
                '.docx',
                '.apk',
                '.ipa'
            ]
        },
        bodyParser: {
            jsonLimit: '5mb',
            formLimit: '5mb'
        },
        sequelize: {
            dialect: 'mysql',
            // host: '172.17.0.4',
            // host: '192.168.31.161',
            // username: 'root',
            host: '129.211.59.88', // 线上服务器
            username: 'root', // 线上服务器
            port: 3306,
            database: 'mydatabase',
            password: 'Zhaojingbin2'
        },
        swagger2: {
            enable: true,
            base: {
                info: {
                    description: 'this is a test swagger-ui html',
                    version: '1.0.0',
                    title: 'test',
                    contact: {
                        email: 'syfubest@gmail.com',
                    },
                    license: {
                        name: 'Apache 2.0',
                        url: 'http://www.apache.org/license/LICENSE-2.0.html'
                    },
                },
                tags: [{
                    name: 'auth',
                    description: '登录注册'
                }, {
                    name: 'app',
                    description: 'app相关'
                }, {
                    name: 'admin',
                    description: 'Admin desc'
                }, {
                    name: 'role',
                    description: 'Role desc'
                }],
                definitions: {

                },
                securityDefinitions: {
                    // basicAuth: {
                    //   type: 'basic',
                    //   // scheme: 'bearer'
                    // }
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header'
                    }
                }
            }
        }
    };

    return {
        ...config,
        ...userConfig,
    };
};