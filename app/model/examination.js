'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW, BOOLEAN, Text } = app.Sequelize;
    const Examination = app.model.define('examination',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        candidateName: STRING(30),
        questionList: STRING(100),
        startTime: STRING(20),
        validTime: INTEGER,
        status: INTEGER,
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        },
        isPassed: {
            type: BOOLEAN,
            defaultValue: false
        }
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Examination;
}