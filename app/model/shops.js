'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW ,TEXT} = app.Sequelize;
    const Shops = app.model.define('shops',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        Name: STRING(15),
        Price: STRING(15),
        Img: STRING(15),
        createdTime: {
            type: DATE,
            defaultValue: NOW,
        }
    },{
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: true,
    });

    return Shops;
}
