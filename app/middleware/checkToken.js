'use strict';

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

module.exports = (options, app) => {
    return async function (ctx, next) {
        let token = ctx.get('Authorization').replace(/\"/g, "");
        if (token) {
            let result = verifyToken(token);
            if (!result) {
                ctx.status = 401;
                return ctx.body = {
                    code: -1,
                    data: 'token不合法'
                }
            } else {
                const {
                    id,
                    userName
                } = result;
                if(id && userName) {
                    const user = await ctx.service.dbdo.findUser({id, userName});
                    if ( user) {
                        const moToken = user.dataValues.token;
                        if( !moToken ) {
                            ctx.status = 401;
                            return ctx.body = {
                                code: -4,
                                data: 'token失效'
                            }
                        } else if ( moToken == token ) {
                            ctx.user = user.dataValues;
                            await next();
                        } else {
                            ctx.status = 401;
                            return ctx.body = {
                                code: -5,
                                data: '异地登录'
                            }
                        }
                    } else {
                        ctx.status = 401;
                        return ctx.body = {
                            code: -3,
                            data: 'token不合法'
                        }
                    }
                } else {      //客户端token没有用户信息
                    ctx.status = 401;
                    return ctx.body = {
                        code: -2,
                        data: 'token 无效,请重新登录'
                    }
                }
            }
        } else {          //客户端没有token
            ctx.status = 401;
            return ctx.body = {
                code: 0,
                data: '没有登录'
            }
        }
    };
};
function verifyToken(token) {
    let privateKey = fs.readFileSync(path.join(__dirname, '../secretPWD/private.key'));
    let cert = fs.readFileSync(path.join(__dirname, '../secretPWD/public.key'));
    let res;
    try {
        let result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
        let { exp, iat } = result, current = Math.floor(Date.now());
        if (current <= exp) {
            res = result.data || {};
        } else {
            // //重新发送新签token
            // const data = result.data || {};
            // const newToken = generateToken(data,1*24*60*60);
            // res = data
            res = false;
        }
    } catch (e) {
        console.log(e)
    }
    return res;
};
function generateToken(data, time) {
    let created = Math.floor(Date.now());
    let cert = fs.readFileSync(path.join(__dirname, '../public/secretPWD/private.key'));
    let token = jwt.sign({
        data,
        exp: created + time
    }, cert, { algorithm: 'RS256' });
    return token;
}