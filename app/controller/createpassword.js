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
    * @params 查询密码列表
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
    /**
    * @params 删除某一个
    */
    async delete() {
        const {
            ctx,
            service,
        } = this;
        const {
            id
        } = ctx.request.body;
        const deleteresult = await service.dbdo.deletePassword({
            id
        });
        if (deleteresult) {
            return ctx.body = {
                code: 1,
                msg: '删除密码成功',
                data: ''
            }
        } else {
            return ctx.body = {
                code: 0,
                msg: '数据库未找到或删除失败',
                data: ''
            }
        }
    }
}


module.exports = CreatePasswordController;