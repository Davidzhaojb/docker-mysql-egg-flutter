'use strict';

const Controller = require('egg').Controller;

class QuestionController extends Controller {
    async questionList() {
        const {
            ctx,
            service
        } = this;
        let {
            page,
            pageSize
        } = ctx.query;
        page = Number.parseInt(page);
        pageSize = Number.parseInt(pageSize);
        if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
            return ctx.body = {
                code: 0,
                msg: '分页字段错误',
                data: ''
            }
        }
        const offset = Number.parseInt(pageSize * (page - 1));
        const result = await service.dbdo.getQuestions({
        }, pageSize, offset);
        return ctx.body = {
            code: 1,
            msg: '获取题库列表成功',
            data: result
        }
    }
    async qlTotal() {
        const {
            ctx,
            service
        } = this;
        const questions = await service.dbdo.getQuestions({
        });
        return ctx.body = {
            code: 1,
            msg: '获取题库总数成功',
            data: questions.length
        }
    }
    async createQuestion() {
        const {
            ctx,
            service,
        } = this;
        const {
            id,
            userName
        } = ctx.user;
        const {
            questionType,
            questionContent,
            questionAnswer,
            questionTypeName
        } = ctx.request.body;
        service.dbdo.createQuestion({
            creatorId: id,
            creatorName: userName,
            questionType,
            questionTypeName,
            questionContent,
            questionAnswer
        });
        return ctx.body = {
            code: 1,
            msg: '创建题库成功',
            data: ''
        }
    }
    async editQuestion() {
        const {
            ctx,
            service,
        } = this;
        const {
            id,
            questionType,
            questionContent,
            questionAnswer,
            questionTypeName
        } = ctx.request.body;
        service.dbdo.editQuestion(
        {
            id
        },
        {
            questionType,
            questionTypeName,
            questionContent,
            questionAnswer
        });
        return ctx.body = {
            code: 1,
            msg: '更新题库成功',
            data: ''
        }
    }
    async questionTypeList() {
        const {
            ctx,
            service
        } = this;
        let {
            page,
            pageSize
        } = ctx.query;
        page = Number.parseInt(page);
        pageSize = Number.parseInt(pageSize);
        if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
            return ctx.body = {
                code: 0,
                msg: '分页字段错误',
                data: ''
            }
        }
        const offset = Number.parseInt(pageSize * (page - 1));
        const result = await service.dbdo.getQuestionTypes({
        }, pageSize, offset);
        return ctx.body = {
            code: 1,
            msg: '获取题库类型列表成功',
            data: result
        }
    }
    async qtlTotal() {
        const {
            ctx,
            service
        } = this;
        const questionTypes = await service.dbdo.getQuestionTypes({
        });
        return ctx.body = {
            code: 1,
            msg: '获取题库类型总数成功',
            data: questionTypes.length
        }
    }
    async allQtl() {
        const {
            ctx,
            service
        } = this;
        const questionTypes = await service.dbdo.getQuestionTypes({
        });
        return ctx.body = {
            code: 1,
            msg: '获取全部题库类型列表成功',
            data: questionTypes
        }
    }
    async createQuestionType() {
        const {
            ctx,
            service,
        } = this;
        const {
            id,
            userName
        } = ctx.user;
        const {
            questionName,
            status
        } = ctx.request.body;
        service.dbdo.createQuestionType({
            creatorId: id,
            creatorName: userName,
            questionName,
            status
        });
        return ctx.body = {
            code: 1,
            msg: '创建题库类型成功',
            data: ''
        }
    }
    async editQuestionType() {
        const {
            ctx,
            service,
        } = this;
        const {
            id,
            questionName,
            status
        } = ctx.request.body;
        service.dbdo.editQuestionType(
        {
            id
        },
        {
            questionName,
            status
        });
        return ctx.body = {
            code: 1,
            msg: '更新题库类型成功',
            data: ''
        }
    }

    async getQuestionsBasedOnType() {
        const {
            ctx,
            service
        } = this;

        let {
            questionType
        } = ctx.query;

        // if (typeof questionType === 'undefined') {
        //     return ctx.body = {
        //         code: 0,
        //         msg: '题目类型错误',
        //         data: ''
        //     }
        // }

        const result = await service.dbdo.getQuestionsBasedOnType({
            questionType
        });

        return ctx.body = {
            code: 1,
            msg: '获取带题目类型的题库列表成功',
            data: result
        }
    }

    async getQuestionsForCandidate() {
        const {
            ctx,
            service
        } = this;

        const {
            id
        } = ctx.query;

        const result = await service.dbdo.getQuestionsForCandidate({
            id
        });

        return ctx.body = {
            code: 1,
            msg: '获取对应的参试者题目成功',
            data: result
        };
    }

    async getBothQuestionsAndAnswerForCandidate() {
        const {
            ctx,
            service
        } = this;

        const {
            id
        } = ctx.query;

        const result = await service.dbdo.getBothQuestionsAndAnswerForCandidate({
            id
        });

        return ctx.body = {
            code: 1,
            msg: '获取对应的参试者题目成功',
            data: result
        };
    }

    async deleteQuestion() {
        const {
            ctx,
            service
        } = this;

        const {
            id
        } = ctx.query;

        service.dbdo.deleteQuestion({
            id
        });

        return ctx.body = {
            code: 1,
            msg: '删除题目成功',
            data: ''
        };
    }
}

module.exports = QuestionController;