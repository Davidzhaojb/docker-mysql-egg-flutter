'use strict';

const Controller = require('egg').Controller;

class AnswerController extends Controller {
    async createAnswers() {
        const {
            ctx,
            service
        } = this;

        const {
            candidateAnswers
        } = ctx.request.body;

        let result = service.dbdo.createAnswers({
            candidateAnswers
        });

        return ctx.body = {
            code: 1,
            msg: '保存参试者答案成功',
            result: result
        }
    }

    async getAnswersByCandidateId() {
        const {
            ctx,
            service
        } = this;
        let {
            candidateId
        } = ctx.query;

        const result = await service.dbdo.getAnswersByCandidateId({
            candidateId
        });
        return ctx.body = {
            code: 1,
            msg: '获取答案列表成功',
            data: result
        }
    }

    async updateAnswer() {
        const {
            ctx,
            service
        } = this;

        const {
            id,
            answerContent
        } = ctx.request.body;

        service.dbdo.updateAnswer(
            {
                id
            },
            {
                answerContent
            }
        );

        return ctx.body = {
            code: 1,
            msg: '更新答案成功',
        }
    }
}

module.exports = AnswerController;