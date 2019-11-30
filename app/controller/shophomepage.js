'use strict';

const Controller = require('egg').Controller;

class CreateShopController extends Controller {
    /**
     * @params 添加笔记
     */
    // async create() {
    //     const {
    //         ctx,
    //         service
    //     } = this;
    //     const {
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent
    //     } = ctx.request.body;
    //     const res = await service.dbdo.createNotes({
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent,
    //     });
    //     return ctx.body = {
    //         code: 1,
    //         msg: '保存成功',
    //         data: ''
    //     }
    // }
    /**
     * @params 获取首页内容
     */
    async findshops() {
        const {
            ctx,
            service,
        } = this;
        // const candidates = await service.dbdo.getAllShops({
        // });
        return ctx.body = {
            code: 1,
            msg: '获取首页内容成功',
            data: {
                "code": "0",
                "message": "success",
                "data": {
                    "slides": [
                        {
                            "image": "http://images.baixingliangfan.cn/advertesPicture/20190116/20190116140738_7766.jpg",
                            "goodsId": "35df1fdd5d8c468ca525cd7021bd32d8"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/advertesPicture/20190116/20190116173351_2085.jpg",
                            "goodsId": "6fe4fe0fb5394c0d9b9b4792a827e029"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/advertesPicture/20190116/20190116140753_5620.jpg",
                            "goodsId": "2171c20d77c340729d5d7ebc2039c08d"
                        }
                    ],
                    "shopInfo": {
                        "leaderImage": "http://images.baixingliangfan.cn/leaderImage/20181121/20181121133310_65.jpg",
                        "leaderPhone": "03936188699"
                    },
                    "integralMallPic": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20180817/20180817080054_5422.png",
                        "TO_PLACE": "1"
                    },
                    "toShareCode": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20180629/20180629125808_7351.png",
                        "TO_PLACE": "1"
                    },
                    "recommend": [
                        {
                            "image": "http://images.baixingliangfan.cn/compressedPic/20181210150050_5409.jpg",
                            "mallPrice": 329,
                            "goodsName": "(限购2瓶)沱牌品味舍得52°500ml",
                            "goodsId": "c0999c03df344e1ab322b3ce6dffdeb1",
                            "price": 350
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/compressedPic/20181121172615_4947.jpg",
                            "mallPrice": 558,
                            "goodsName": "红花郎15年53°500ml",
                            "goodsId": "d0a2f888f9df48609aab3ed3721d8d88",
                            "price": 613.8
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/compressedPic/20181121171744_3826.jpg",
                            "mallPrice": 118,
                            "goodsName": "茅台王子酒酱香型53度500ml",
                            "goodsId": "d772898204664d7596b20f1d5f4d1dfe",
                            "price": 118
                        }
                    ],
                    "advertesPicture": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20190131/20190131165032_5788.png",
                        "TO_PLACE": "1"
                    },
                    "floor1": [
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116133522_9332.jpg",
                            "goodsId": "faa86c6ee451445a9475870656f04192"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116135616_4151.jpg",
                            "goodsId": "80817b9fd00b48f296ce939ae197030b"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116133626_1248.jpg",
                            "goodsId": "00cee04d12474910bfeb7930f6251c22"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116133740_8452.jpg",
                            "goodsId": "bdfa9a9a358f436594a740e486fd2060"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116133753_7874.jpg",
                            "goodsId": "516f9db6ee8e499cb8a8758cf2e567c7"
                        }
                    ],
                    "floor2": [
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116134240_8923.jpg",
                            "goodsId": "04e338da9dbd4ad9913c38e7a4ae5677"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116134314_7748.jpg",
                            "goodsId": "ca055522081f4315a654384ebb524051"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190117/20190117151627_6993.jpg",
                            "goodsId": "c0999c03df344e1ab322b3ce6dffdeb1"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116134424_3185.jpg",
                            "goodsId": "3236991d77754e47a5cbf8e5d1a04902"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116134608_5991.jpg",
                            "goodsId": "1140c709d608439d8fc85b650e0c477b"
                        }
                    ],
                    "floor3": [
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190122/20190122143838_7004.jpg",
                            "goodsId": "ec3c55fb0d4a4f68beb80dc6d1fbf7eb"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116135202_4384.jpg",
                            "goodsId": "81f919f9719e4e7498a3a53f5b294376"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190122/20190122144023_7291.jpg",
                            "goodsId": "138f0836ea664544b06f0ddba5331564"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116135302_3912.jpg",
                            "goodsId": "b7e06b8248f049d2a50ed727d5988558"
                        },
                        {
                            "image": "http://images.baixingliangfan.cn/homeFloor/20190116/20190116135334_5716.jpg",
                            "goodsId": "80cd0b81997d41ceacdf3781a36dc13d"
                        }
                    ],
                    "saoma": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20181112/20181112115518_3523.png",
                        "TO_PLACE": "1"
                    },
                    "newUser": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20190201/20190201172941_4626.png",
                        "TO_PLACE": "1"
                    },
                    "floor1Pic": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20190111/20190111080720_8987.jpg",
                        "TO_PLACE": "4"
                    },
                    "floor2Pic": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20190111/20190111080754_8924.jpg",
                        "TO_PLACE": "4"
                    },
                    "floorName": {
                        "floor1": "特产礼盒",
                        "floor2": "甄选水果",
                        "floor3": "酒！便宜"
                    },
                    "category": [
                        {
                            "mallCategoryId": "4",
                            "mallCategoryName": "白酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c94621970a801626a35cb4d0175",
                                    "mallCategoryId": "4",
                                    "mallSubName": "名酒",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94621970a801626a363e5a0176",
                                    "mallCategoryId": "4",
                                    "mallSubName": "宝丰",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94621970a801626a3770620177",
                                    "mallCategoryId": "4",
                                    "mallSubName": "北京二锅头",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cc035c15a8",
                                    "mallCategoryId": "4",
                                    "mallSubName": "大明",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cc2af915a9",
                                    "mallCategoryId": "4",
                                    "mallSubName": "杜康",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cc535115aa",
                                    "mallCategoryId": "4",
                                    "mallSubName": "顿丘",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cc77b215ab",
                                    "mallCategoryId": "4",
                                    "mallSubName": "汾酒",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cca72e15ac",
                                    "mallCategoryId": "4",
                                    "mallSubName": "枫林",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cccae215ad",
                                    "mallCategoryId": "4",
                                    "mallSubName": "高粱酒",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ccf0d915ae",
                                    "mallCategoryId": "4",
                                    "mallSubName": "古井",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cd1d6715af",
                                    "mallCategoryId": "4",
                                    "mallSubName": "贵州大曲",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cd3f2815b0",
                                    "mallCategoryId": "4",
                                    "mallSubName": "国池",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cd5d3015b1",
                                    "mallCategoryId": "4",
                                    "mallSubName": "国窖",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cd7ced15b2",
                                    "mallCategoryId": "4",
                                    "mallSubName": "国台",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cd9b9015b3",
                                    "mallCategoryId": "4",
                                    "mallSubName": "汉酱",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cdbfd215b4",
                                    "mallCategoryId": "4",
                                    "mallSubName": "红星",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c946891d16801689474e2a70081",
                                    "mallCategoryId": "4",
                                    "mallSubName": "怀庄",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cdddf815b5",
                                    "mallCategoryId": "4",
                                    "mallSubName": "剑南春",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cdfd4815b6",
                                    "mallCategoryId": "4",
                                    "mallSubName": "江小白",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb1016802277c37160e",
                                    "mallCategoryId": "4",
                                    "mallSubName": "金沙",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ce207015b7",
                                    "mallCategoryId": "4",
                                    "mallSubName": "京宫",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ce46d415b8",
                                    "mallCategoryId": "4",
                                    "mallSubName": "酒鬼",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb101680226de23160d",
                                    "mallCategoryId": "4",
                                    "mallSubName": "口子窖",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ce705515b9",
                                    "mallCategoryId": "4",
                                    "mallSubName": "郎酒",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ce989e15ba",
                                    "mallCategoryId": "4",
                                    "mallSubName": "老口子",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cec30915bb",
                                    "mallCategoryId": "4",
                                    "mallSubName": "龙江家园",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cef15c15bc",
                                    "mallCategoryId": "4",
                                    "mallSubName": "泸州",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cf156f15bd",
                                    "mallCategoryId": "4",
                                    "mallSubName": "鹿邑大曲",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cf425b15be",
                                    "mallCategoryId": "4",
                                    "mallSubName": "毛铺",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cf9dc915c0",
                                    "mallCategoryId": "4",
                                    "mallSubName": "绵竹",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cfbf1c15c1",
                                    "mallCategoryId": "4",
                                    "mallSubName": "难得糊涂",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cfdd7215c2",
                                    "mallCategoryId": "4",
                                    "mallSubName": "牛二爷",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7cf71e715bf",
                                    "mallCategoryId": "4",
                                    "mallSubName": "茅台",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7d7eda715c3",
                                    "mallCategoryId": "4",
                                    "mallSubName": "绵竹",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7d96e5c15c4",
                                    "mallCategoryId": "4",
                                    "mallSubName": "难得糊涂",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dab93b15c5",
                                    "mallCategoryId": "4",
                                    "mallSubName": "牛二爷",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dae16415c6",
                                    "mallCategoryId": "4",
                                    "mallSubName": "牛栏山",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7db11cb15c7",
                                    "mallCategoryId": "4",
                                    "mallSubName": "前门",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7db430c15c8",
                                    "mallCategoryId": "4",
                                    "mallSubName": "全兴",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7db6cac15c9",
                                    "mallCategoryId": "4",
                                    "mallSubName": "舍得",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7db9a4415ca",
                                    "mallCategoryId": "4",
                                    "mallSubName": "双沟",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dc30b815cb",
                                    "mallCategoryId": "4",
                                    "mallSubName": "水井坊",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dc543e15cc",
                                    "mallCategoryId": "4",
                                    "mallSubName": "四特",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dc765c15cd",
                                    "mallCategoryId": "4",
                                    "mallSubName": "潭酒",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dc988a15ce",
                                    "mallCategoryId": "4",
                                    "mallSubName": "沱牌",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dcba5a15cf",
                                    "mallCategoryId": "4",
                                    "mallSubName": "五粮液",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dcd9e815d0",
                                    "mallCategoryId": "4",
                                    "mallSubName": "西凤",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dcf6d715d1",
                                    "mallCategoryId": "4",
                                    "mallSubName": "习酒",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dd11b215d2",
                                    "mallCategoryId": "4",
                                    "mallSubName": "小白杨",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dd2f3c15d3",
                                    "mallCategoryId": "4",
                                    "mallSubName": "洋河",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7dd969115d4",
                                    "mallCategoryId": "4",
                                    "mallSubName": "伊力特",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ddb16c15d5",
                                    "mallCategoryId": "4",
                                    "mallSubName": "张弓",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7ddd6c715d6",
                                    "mallCategoryId": "4",
                                    "mallSubName": "中粮",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7de126815d7",
                                    "mallCategoryId": "4",
                                    "mallSubName": "竹叶青",
                                    "comments": null
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170036_4477.png"
                        },
                        {
                            "mallCategoryId": "1",
                            "mallCategoryName": "啤酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946016ea9b016016f79c8e0000",
                                    "mallCategoryId": "1",
                                    "mallSubName": "百威",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94608ff843016095163b8c0177",
                                    "mallCategoryId": "1",
                                    "mallSubName": "福佳",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "402880e86016d1b5016016db9b290001",
                                    "mallCategoryId": "1",
                                    "mallSubName": "哈尔滨",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "402880e86016d1b5016016dbff2f0002",
                                    "mallCategoryId": "1",
                                    "mallSubName": "汉德",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647cd6830e0022",
                                    "mallCategoryId": "1",
                                    "mallSubName": "崂山",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647cd706a60023",
                                    "mallCategoryId": "1",
                                    "mallSubName": "林德曼",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e1411b15d8",
                                    "mallCategoryId": "1",
                                    "mallSubName": "青岛",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e1647215d9",
                                    "mallCategoryId": "1",
                                    "mallSubName": "三得利",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e182e715da",
                                    "mallCategoryId": "1",
                                    "mallSubName": "乌苏",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c9468118c9c016811ab16bf0001",
                                    "mallCategoryId": "1",
                                    "mallSubName": "雪花",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c9468118c9c016811aa6f440000",
                                    "mallCategoryId": "1",
                                    "mallSubName": "燕京",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e19b8f15db",
                                    "mallCategoryId": "1",
                                    "mallSubName": "智美",
                                    "comments": null
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170044_9165.png"
                        },
                        {
                            "mallCategoryId": "2",
                            "mallCategoryName": "葡萄酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c9460337d540160337fefd60000",
                                    "mallCategoryId": "2",
                                    "mallSubName": "澳大利亚",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "402880e86016d1b5016016e083f10010",
                                    "mallCategoryId": "2",
                                    "mallSubName": "德国",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "402880e86016d1b5016016df1f92000c",
                                    "mallCategoryId": "2",
                                    "mallSubName": "法国",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94621970a801626a40feac0178",
                                    "mallCategoryId": "2",
                                    "mallSubName": "南非",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e5c9a115dc",
                                    "mallCategoryId": "2",
                                    "mallSubName": "葡萄牙",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e5e68f15dd",
                                    "mallCategoryId": "2",
                                    "mallSubName": "西班牙",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e609f515de",
                                    "mallCategoryId": "2",
                                    "mallSubName": "新西兰",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e6286a15df",
                                    "mallCategoryId": "2",
                                    "mallSubName": "意大利",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e6486615e0",
                                    "mallCategoryId": "2",
                                    "mallSubName": "智利",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7e66c6815e1",
                                    "mallCategoryId": "2",
                                    "mallSubName": "中国",
                                    "comments": null
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170053_878.png"
                        },
                        {
                            "mallCategoryId": "3",
                            "mallCategoryName": "清酒洋酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "402880e86016d1b5016016e135440011",
                                    "mallCategoryId": "3",
                                    "mallSubName": "清酒",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "402880e86016d1b5016016e171cc0012",
                                    "mallCategoryId": "3",
                                    "mallSubName": "洋酒",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170101_6957.png"
                        },
                        {
                            "mallCategoryId": "5",
                            "mallCategoryName": "保健酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c94609a62be0160a02d1dc20021",
                                    "mallCategoryId": "5",
                                    "mallSubName": "黄酒",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94648837980164883ff6980000",
                                    "mallCategoryId": "5",
                                    "mallSubName": "药酒",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170110_6581.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647ccd76a6001b",
                            "mallCategoryName": "预调酒",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d02f6250026",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccd76a6001b",
                                    "mallSubName": "果酒",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d031bae0027",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccd76a6001b",
                                    "mallSubName": "鸡尾酒",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d03428f0028",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccd76a6001b",
                                    "mallSubName": "米酒",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170124_4760.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647ccf3b97001d",
                            "mallCategoryName": "下酒小菜",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dc18e610035",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccf3b97001d",
                                    "mallSubName": "熟食",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dc1d9070036",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccf3b97001d",
                                    "mallSubName": "火腿",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dc1fc3e0037",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccf3b97001d",
                                    "mallSubName": "速冻食品",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170133_4419.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                            "mallCategoryName": "饮料",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d09cbf6002d",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "茶饮",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d09f7e8002e",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "水饮",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d0a27e1002f",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "功能饮料",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d0b1d4d0030",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "果汁",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d14192b0031",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "含乳饮料",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647d24d9600032",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccdb0e0001c",
                                    "mallSubName": "碳酸饮料",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170143_361.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647cd108b60020",
                            "mallCategoryName": "乳制品",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd4ac8c0048",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd108b60020",
                                    "mallSubName": "常温纯奶",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd4f6a40049",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd108b60020",
                                    "mallSubName": "常温酸奶",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd51ab7004a",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd108b60020",
                                    "mallSubName": "低温奶",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170151_9234.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                            "mallCategoryName": "休闲零食",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dc51d93003c",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "方便食品",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd204dc0040",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "面包糕点",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd22f760041",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "糖果巧克力",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd254530042",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "膨化食品",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7fa132b15e7",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "坚果炒货",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7f4bfc415e2",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "肉干豆干",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7f5027a15e3",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "饼干",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94679b4fb10167f7f530fd15e4",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "冲调",
                                    "comments": null
                                },
                                {
                                    "mallSubId": "2c9f6c94683a6b0d016846b49436003b",
                                    "mallCategoryId": "2c9f6c946449ea7e01647ccfddb3001e",
                                    "mallSubName": "休闲水果",
                                    "comments": null
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20190131/20190131170200_7553.png"
                        },
                        {
                            "mallCategoryId": "2c9f6c946449ea7e01647cd08369001f",
                            "mallCategoryName": "粮油调味",
                            "bxMallSubDto": [
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd2e8270043",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd08369001f",
                                    "mallSubName": "油/粮食",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd31bca0044",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd08369001f",
                                    "mallSubName": "调味品",
                                    "comments": ""
                                },
                                {
                                    "mallSubId": "2c9f6c946449ea7e01647dd35a980045",
                                    "mallCategoryId": "2c9f6c946449ea7e01647cd08369001f",
                                    "mallSubName": "酱菜罐头",
                                    "comments": ""
                                }
                            ],
                            "comments": null,
                            "image": "http://images.baixingliangfan.cn/firstCategoryPicture/20181212/20181212115842_9733.png"
                        }
                    ],
                    "floor3Pic": {
                        "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20190111/20190111081455_1309.jpg",
                        "TO_PLACE": "4"
                    },
                    "reservationGoods": []
                }
            }
        }
    }
    /**
     * @params 编辑
     */
    // async edit() {
    //     const {
    //         ctx,
    //         service,
    //     } = this;
    //     const {
    //         id,
    //         notesTitle,
    //         notesSubtitle,
    //         notesContent,
    //     } = ctx.request.body;
    //     service.dbdo.editNotes(
    //         {
    //             id
    //         },
    //         {
    //             notesTitle,
    //             notesSubtitle,
    //             notesContent,
    //         });
    //     return ctx.body = {
    //         code: 1,
    //         msg: '更新成功',
    //         data: ''
    //     }
    // }

    /**
     * @params 删除笔记
     */
    // async delete() {
    //     const {
    //         ctx,
    //         service,
    //     } = this;
    //     const {
    //         id
    //     } = ctx.query;
    //     const deleteresult = await service.dbdo.deleteNotes({
    //         id
    //     });
    //     if (deleteresult) {
    //         return ctx.body = {
    //             code: 1,
    //             msg: '删除笔记成功',
    //             data: ''
    //         }
    //     } else {
    //         return ctx.body = {
    //             code: 0,
    //             msg: '数据库未找到或删除失败',
    //             data: ''
    //         }
    //     }

    // }
}

module.exports = CreateShopController;