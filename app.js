module.exports = app => {
    // app.beforeStart(async ()=>{
    //     const mysqlConfig = await app.configCenter.fetch('mysql');
    //     app.database = app.mysql.createInstance(mysqlConfig);
    // });
    app.beforeStart(async ()=>{
        await app.model.sync({force: false}); //创建表,false:表存在不创建,true: 每次启动创建表
    })
};