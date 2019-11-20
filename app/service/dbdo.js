'use strict';

const Service = require('egg').Service;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class DbdoService extends Service {

    /**
     *
     * 用户 相关
     *
     */
    async createUser(data) {
        console.log('createdata', data);
        return this.ctx.model.User.create(data);
    }
    async findUser(where) {
        return this.ctx.model.User.findOne({
            where
        });
    }
    async upUser(where, data) {
        return this.ctx.model.User.update(data, {
            where
        })
    }
    /**
     * @params 笔记相关
     * @param author David 2019-11-20
     */

     /**
      * @params 创建笔记
      */
     async createNotes(data) {
        console.log('createdata', data);
        return this.ctx.model.Notes.create(data);
    }
    /**
     *
     * 题库 相关
     *
     */
    // 获取题库列表
    async getQuestions(where, limit, offset) {
        return this.ctx.model.Questionbank.findAll({
            where,
            limit,
            offset,
            'order': [
                ['id', 'DESC']
            ]
        })
    }

    // 创建题库
    async createQuestion(data) {
        return this.ctx.model.Questionbank.create(data);
    }

    // 编辑题库
    async editQuestion(where, data) {
        return this.ctx.model.Questionbank.update(data, {
            where
        });
    }

    async deleteQuestion(where) {
        return this.ctx.model.Questionbank.destroy({
            where
        });
    }

    /**
     *
     * 题库类型 xiang guan
     *
     */

    // 获取题库类型列表
    async getQuestionTypes(where, limit, offset) {
        return this.ctx.model.Questiontype.findAll({
            where,
            limit,
            offset,
            'order': [
                ['id', 'DESC']
            ]
        })
    }

    // 创建题库类型
    async createQuestionType(data) {
        return this.ctx.model.Questiontype.create(data);
    }

    // 编辑题库类型
    async editQuestionType(where, data) {
        return this.ctx.model.Questiontype.update(data, {
            where
        });
    }

    async getQuestionsBasedOnType(where) {
        return this.ctx.model.Questionbank.findAll({
            where
        })
    }

    async getQuestionsForCandidate(data) {
        return this.ctx.model.Questionbank.findAll({
            attributes: ['id', 'questionContent'],
            where: {
                id: {
                    [Op.in]: JSON.parse(data.id)
                }
            }
        })
    }

    async getBothQuestionsAndAnswerForCandidate(data) {
        return this.ctx.model.Questionbank.findAll({
            where: {
                id: {
                    [Op.in]: JSON.parse(data.id)
                }
            }
        })
    }

    /**
     *
     * 参试者 相关
     *
     */
    async createCandidate(data) {
        return this.ctx.model.Examination.create(data);
    }

    async getAllCandidatesNum(where, limit, offset) {
        return this.ctx.model.Examination.findAll({
            where,
            limit,
            offset,
            'order': [
                ['id', 'DESC']
            ]
        });
    }

    async getCandidateList(where, limit, offset) {
        return this.ctx.model.Examination.findAll({
            where,
            limit,
            offset,
            'order': [
                ['id', 'DESC']
            ]
        })
    }

    async editCandidate(where, data) {
        return this.ctx.model.Examination.update(data, {
            where
        });
    }

    async getCandidateById(where) {
        return this.ctx.model.Examination.findOne({
            where
        });
    }

    async updateCandidateStartTime(where, data) {
        return this.ctx.model.Examination.update(data, {
            where
        });
    }

    /**
     *
     * 答案 相关
     *
     */

    async createAnswers(data) {
        return this.ctx.model.Answer.bulkCreate(
            data.candidateAnswers
        );
    }

    async getAnswersByCandidateId(where) {
        return this.ctx.model.Answer.findAll({
            where
        });
    }

    async updateAnswer(where, data) {
        return this.ctx.model.Answer.update(data, {
            where
        });
    }

}

module.exports = DbdoService;