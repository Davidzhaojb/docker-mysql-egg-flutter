'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW, BOOLEAN, TEXT } = app.Sequelize;
    const Answer = app.model.define('answer',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        candidateId: INTEGER,
        questionbankId: INTEGER,
        answerContent: TEXT,
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        },
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Answer;
}