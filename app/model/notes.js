'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const Notes = app.model.define('notes',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        notesTitle: STRING(15),
        notesSubtitle: STRING(15),
        notesAuthor: STRING(10),
        notesContent: STRING(700),
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        }
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Notes;
}