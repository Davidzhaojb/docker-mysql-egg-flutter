'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW, BOOLEAN } = app.Sequelize;
    const Questiontype = app.model.define('questiontype',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        creatorId: INTEGER,
        creatorName: STRING(30),
        questionName: STRING(50),
        // reorder: {
        //     type: INTEGER,
        //     defaultValue: 0
        // },
        status: {
            type: BOOLEAN,
            defaultValue: true
        },
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        },
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Questiontype;
}