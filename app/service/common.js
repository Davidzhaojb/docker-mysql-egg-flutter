'use strict';
const utility = require('utility'); // 密码加密
const Service = require('egg').Service;
const fs = require('fs');
const appInfoParser = require('app-info-parser');
class CommonService extends Service {
    // 生成唯一标识 len 生成的长度 hasTime 是否整合时间戳
    creatOnlyFlag(len, hasTime = 0) {
        const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const capitalEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const lowerEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const config = num.concat(capitalEn).concat(lowerEn);
        // 初始化数组
        let arr = [];
        arr.push(getOne(num));
        arr.push(getOne(capitalEn));
        arr.push(getOne(lowerEn));
        for (let i = 3; i < len; i++) {
            // 从数组里面抽出一个数据
            arr.push(config[Math.floor(Math.random() * config.length)]);
        }
        // 乱序
        let newArr = [];
        for (let j = 0; j < len; j++) {
            newArr.push(arr.splice(Math.random() * arr.length, 1)[0]);
        }
        // 随机抽出数组一个数
        function getOne(originalArr) {
            return originalArr[Math.floor(Math.random() * originalArr.length)];
        }
        return hasTime ? newArr.join('') + new Date().getTime() : newArr.join('');
    }
    // md5加密
    md5string(str) {
        return utility.md5(str);
    }
    // sha1加密
    sha1string(str) {
        return utility.sha1(str);
    }
}
module.exports = CommonService;