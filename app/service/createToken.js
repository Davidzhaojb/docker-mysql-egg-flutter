'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
class CreateTokenService extends Service {
    async generateToken(data,time) {
        let created = Math.floor(Date.now());
        let cert = fs.readFileSync(path.join(__dirname,'../secretPWD/private.key'));
        let token = jwt.sign({
            data,
            exp: created + time*24*60*60*1000
        },cert,{algorithm: 'RS256'});
        return token;
    };
}

module.exports = CreateTokenService;