'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const User = app.model.define('user',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userName: STRING(30),
        userEmail: STRING(40),
        avatar: STRING(40),
        pwd: STRING(40),
        token: STRING(700),
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        }
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return User;
}