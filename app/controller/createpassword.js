'use strict';

const Controller = require('egg').Controller;

class CreatePasswordController extends Controller {
    /**
     * @params 添加密码
     */
    async create() {
        const {
            ctx,
            service
        } = this;
        const {
            userName,
            passWord,
            webSite
        } = ctx.request.body;
        const res = await service.dbdo.createPassword({
            userName,
            passWord,
            webSite
        });
        return ctx.body = {
            code: 1,
            msg: '保存成功',
            data: ''
        }
    }
    /**
    * @params 查询列表
    */
    async findList() {
        const {
            ctx,
            service
        } = this;

        const candidates = await service.dbdo.getAllPasswords({
        });
        return ctx.body = {
            code: 1,
            msg: '获取所有密码列表成功',
            data: candidates
        }
    }
}


module.exports = CreatePasswordController;