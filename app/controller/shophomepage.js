'use strict';

const Controller = require('egg').Controller;

class CreateShopController extends Controller {
    /**
     * @params 添加笔记
     */
    // async create() {
    //     const {
    //         ctx,
    //         service
    //     } = this;
    //     const {
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent
    //     } = ctx.request.body;
    //     const res = await service.dbdo.createNotes({
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent,
    //     });
    //     return ctx.body = {
    //         code: 1,
    //         msg: '保存成功',
    //         data: ''
    //     }
    // }
    /**
     * @params 获取首页内容
     */
    async findshops() {
        const {
            ctx,
            service,
        } = this;
        // const candidates = await service.dbdo.getAllShops({
        // });
        return ctx.body = {
            code: 1,
            msg: '获取首页内容成功',
            data: {
                name: '青岛啤酒', 
                price: '10',
                sales: '100'
            }
        }
    }
    /**
     * @params 编辑
     */
    // async edit() {
    //     const {
    //         ctx,
    //         service,
    //     } = this;
    //     const {
    //         id,
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent,
    //     } = ctx.request.body;
    //     service.dbdo.editNotes(
    //         {
    //             id
    //         },
    //         {
    //             notesTitle,
    //             notesSubtitle,
    //             notesContent,
    //         });
    //     return ctx.body = {
    //         code: 1,
    //         msg: '更新成功',
    //         data: ''
    //     }
    // }

    /**
     * @params 删除笔记
     */
    // async delete() {
    //     const {
    //         ctx,
    //         service,
    //     } = this;
    //     const {
    //         id
    //     } = ctx.query;
    //     const deleteresult = await service.dbdo.deleteNotes({
    //         id
    //     });
    //     if (deleteresult) {
    //         return ctx.body = {
    //             code: 1,
    //             msg: '删除笔记成功',
    //             data: ''
    //         }
    //     } else {
    //         return ctx.body = {
    //             code: 0,
    //             msg: '数据库未找到或删除失败',
    //             data: ''
    //         }
    //     }

    // }
}

module.exports = CreateShopController;