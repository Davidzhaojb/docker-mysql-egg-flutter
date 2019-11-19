'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW, BOOLEAN, TEXT } = app.Sequelize;
    const Questionbank = app.model.define('questionbank',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        creatorId: INTEGER,
        creatorName: STRING(30),
        questionType: INTEGER,
        questionTypeName: STRING(50),
        questionContent: TEXT,
        questionAnswer: TEXT,
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        },
        updateTime: {
            type: DATE,
            defaultValue: NOW,
        },
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Questionbank;
}