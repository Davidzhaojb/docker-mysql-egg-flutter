'use strict';

const Controller = require('egg').Controller;

class CreateNotesController extends Controller {
    async create() {
        const {
            ctx,
            service
        } = this;
        const {
            notesTitle,
            notesSubtitle,
            notesAuthor,
            notesContent
        } = ctx.request.body;
        const res = await service.dbdo.createNotes({
            notesTitle,
            notesSubtitle,
            notesAuthor,
            notesContent,
        });
        // console.log(res.dataValues);
        return ctx.body = {
            code: 1,
            msg: '保存成功',
            data: ''
        }
    }
}

module.exports = CreateNotesController;