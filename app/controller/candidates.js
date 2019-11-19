'use strict';

const Controller = require('egg').Controller;

class CandidateController extends Controller {

    async createCandidate() {
        const {
            ctx,
            service,
        } = this;
        const {
            candidateName,
            questionList,
            // startTime,
            validTime,
            status
        } = ctx.request.body;
        service.dbdo.createCandidate({
            candidateName,
            questionList,
            // startTime,
            validTime,
            status
        });
        return ctx.body = {
            code: 1,
            msg: '创建参试人成功',
            data: ''
        }
    }

    async getAllCandidatesNum() {
        const {
            ctx,
            service,
        } = this;

        const candidates = await service.dbdo.getAllCandidatesNum({});

        return ctx.body = {
            code: 1,
            msg: '获取所有参试者数量成功',
            data: candidates.length
        }
    }

    async getCandidateList() {
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

        const result = await service.dbdo.getCandidateList({
        }, pageSize, offset);
        return ctx.body = {
            code: 1,
            msg: '获取参试者列表成功',
            data: result
        }
    }

    async editCandidate() {
        const {
            ctx,
            service
        } = this;

        const {
            id,
            candidateName,
            questionList,
            validTime,
            status
        } = ctx.request.body;

        service.dbdo.editCandidate(
            {
                id
            },
            {
                candidateName,
                questionList,
                validTime,
                status
            });
        return ctx.body = {
            code: 1,
            msg: '更新参试者信息成功',
            data: ''
        }
    }

    async updateCandidateStartTime() {
        const {
            ctx,
            service
        } = this;

        const {
            id,
            startTime,
        } = ctx.request.body;

        service.dbdo.updateCandidateStartTime(
            {
                id
            },
            {
                startTime
            });
        return ctx.body = {
            code: 1,
            msg: '更新参试者开始时间成功',
            data: ''
        }
    }

    async getCandidateById() {
        const {
            ctx,
            service
        } = this;

        const {
            id
        } = ctx.query;

        const result = await service.dbdo.getCandidateById({
            id
        });

        return ctx.body = {
            code: 1,
            msg: '获取参试者信息成功',
            data: result
        }
    }
}

module.exports = CandidateController;