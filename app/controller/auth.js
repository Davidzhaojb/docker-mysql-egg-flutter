'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
    async register() {
        const {
            ctx,
            service
        } = this;
        const {
            userName,
            userEmail,
            pwdGroup
        } = ctx.request.body;
        const {
            pwd,
            rePwd
        } = pwdGroup;
        if (pwd !== rePwd) {
            return ctx.body = {
                code: 0,
                msg: '密码不一致',
                data: ''
            }
        };
        console.log('密码', service.common.sha1string(pwd));
        const res = await service.dbdo.createUser({
            userName,
            userEmail,
            pwd: service.common.sha1string(pwd),
            avatar: ''
        });
        // console.log(res.dataValues);
        return ctx.body = {
            code: 1,
            msg: '注册成功,请登录^_^',
            data: ''
        }
    }

    async login() {
        const {
            ctx,
            service
        } = this;
        const {
            userEmail,
            pwd
        } = ctx.request.body;
        const res = await service.dbdo.findUser({
            userEmail,
            pwd: service.common.sha1string(pwd)
        });
        // console.log('用户信息', res);
        if (!res) {
            return ctx.body = {
                code: 0,
                msg: '账号密码错误',
                data: ''
            }
        } else {
            const {
                id,
                userName,
                avatar,
                userEmail,
                createdTime
            } = res.dataValues;
            const token = await service.createToken.generateToken({
                id,
                userName
            }, 1);
            const result = await service.dbdo.upUser({
                id
            }, {
                token
            });
            if (!result.length) {
                return ctx.body = {
                    code: -1,
                    msg: 'unknow error, plz try again later',
                    data: ''
                }
            }
            return ctx.body = {
                code: 1,
                msg: 'success',
                data: {
                    id,
                    userName,
                    avatar: avatar,
                    token,
                    userEmail,
                    createdTime
                }
            }   
        }
    }
}

module.exports = AuthController;