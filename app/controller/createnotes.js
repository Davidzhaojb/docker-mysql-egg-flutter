'use strict';

const Controller = require('egg').Controller;

class CreateNotesController extends Controller {
    /**
     * @params 添加笔记
     */
    async create() {
        const {
            ctx,
            service
        } = this;
        const {
            notesTitle,
            notesSubtitle,
            notesContent
        } = ctx.request.body;
        const res = await service.dbdo.createNotes({
            notesTitle,
            notesSubtitle,
            notesContent,
        });
        return ctx.body = {
            code: 1,
            msg: '保存成功',
            data: ''
        }
    }
    /**
     * @params 查找笔记
     */
    async findList() {
        const {
            ctx,
            service,
        } = this;
        const candidates = await service.dbdo.getAllNotes({
        });
        return ctx.body = {
            code: 1,
            msg: '获取所有笔记列表成功',
            data: candidates
        }
    }
    /**
     * @params 编辑
     */
    async edit() {
        const {
            ctx,
            service,
        } = this;
        const {
            id,
            notesTitle,
            notesSubtitle,
            notesContent,
        } = ctx.request.body;
        service.dbdo.editNotes(
            {
                id
            },
            {
                notesTitle,
                notesSubtitle,
                notesContent,
            });
        return ctx.body = {
            code: 1,
            msg: '更新成功',
            data: ''
        }
    }

    /**
     * @params 删除笔记
     */
    async delete() {
        const {
            ctx,
            service,
        } = this;
        const {
            id
        } = ctx.query;
        const deleteresult = await service.dbdo.deleteNotes({
            id
        });
        if (deleteresult) {
            return ctx.body = {
                code: 1,
                msg: '删除笔记成功',
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

module.exports = CreateNotesController;