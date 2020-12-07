'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW, TEXT } = app.Sequelize;
    const Password = app.model.define('password', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userName: STRING(15),
        passWord: STRING(15),
        webSite: STRING(15),
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        }
    }, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Password;
}
