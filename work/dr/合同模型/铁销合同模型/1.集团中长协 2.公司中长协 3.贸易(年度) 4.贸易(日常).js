/**
 * 时间需要 从 string => long
 *
 * versions <==> versions 必填
 * createId <==> createId 必填 可以为 ""
 * createName <==> createName 必填 身份名称
 * createTimes <==> createTimes 创建时间
 * modifyId <==> modifyId 必填 可以为 ""
 * modifyName <==> modifyName 必填 身份名称
 * modifyTimes <==> modifyTimes 修改时间
 *
 * "fileUrl": "/2021/01/04/test/pdf/test/a138f52d238942d2a593bc825b115517.pdf", => 需要转为 /zhihuiyunxiao/a138f52d238942d2a593bc825b115517.pdf
 *
 * >>>>>>>>>>>>> 数据库表对应 <<<<<<<<<<<<<<<<<
 * bus_con_rly             合同铁销: 主数据
 * bus_con_rly_take        合同铁销: 收货信息
 * bus_con_rly_send        合同铁销: 供货信息
 * bus_con_rly_coal        合同铁销: 供货煤种信息
 * bus_con_rly_file        合同铁销: 附件
 * bus_con_attribute       合同属性: 附件信息(类似于key:value)
 * elec_contract_log       电子合同: 主要是生成的ddf
 *
 * >>>>>>>>>>>>> 回填逻辑 <<<<<<<<<<<<<<<<<
 *
 *
 * >>>>>>>>>>>>> 附加名称获取表 <<<<<<<<<<<<<<<<<
 * sys_org                  机构
 * bus_sal_bargainor        出卖人
 * bus_cus_customer_group   集团客户
 * bus_cus_customer         分公司客户
 * bus_sal_rly_stand        站点
 * bus_sal_rly_line         专线
 * bus_sal_supplier         供货单位
 * bus_sal_dct_rly_policy   铁销优惠政策
 * bus_sal_chasten_rly      铁销热值奖惩
 * bus_sal_coal_type        煤种
 * bus_sal_coal_variety     品种
 *
 */
let entity =
    {
        "id": "",
        "attributes": attributes,
        "platformDomainId": "LC",
        "bizDomainIds": [
            "yx",
            "t",
            "???"// 铁销集团中长协,铁销分公司中长协标识,铁销贸易(年度),铁销贸易(日常) 业务标识(4选1)
        ],
        "additionalBizDomainIds": [
            ""
        ],
        "orgDomainIds": [
            "", // =>> bus_con_rly.bargainorOrgId 出卖人
            "", // =>> bus_con_rly.createOrg 创建组织机构 (可操作)
            "", // =>> bus_con_rly.officeOrgId 关联办事处
        ],
        "ascriptionDomain": {},
        "accredit": {},
        "createTime": 0,
        "creatorIdentity": "",
        "creatorName": "",// =>> bus_con_rly.createName
        "creatorProxy": "",
        "creatorProxyName": "",
        "updateTime": 0,
        "menderIdentity": "",
        "menderName": "",// =>> bus_con_rly.modifyName
        "menderProxy": "",
        "menderProxyName": "",
        "state": 0,
        "customTags": {},
        "version": 0,
        "orderIndex": 0.00
    }

/**
 * 应用数据结构
 */
let attributes = {
    bus_con_rly: bus_con_rly, // 主数据
    bus_con_rly_file: bus_con_rly_file,// 附件信息
    bus_con_rly_take: bus_con_rly_take,// 收货信息
    bus_con_rly_send: bus_con_rly_send,// 发货信息
    bus_con_rly_coal: bus_con_rly_coal,// 煤种信息
    bus_con_attribute: bus_con_attribute,// 自由附加信息
    elec_contract_log: elec_contract_log,// 生成的文档信息
}

/**
 * 主数据
 *
 * 数据库 bus_con_rly
 *
 */
let bus_con_rly
    = {
    "conRlyId": "6fd95f9c945f4b018919ad2575385281", // 主键 ID
    "agtRlyId": null,
    "conRlyNo": "HTSMHLT22023QT0037",
    "conRlyNoPrefix": "HTSMHLT22023QT",
    "conRlyNoSerial": 37,
    "conRlyType": "2",
    "bargainorId": "6f370712dd254590ac4d7df7f6849c45",
    "bargainorName": "",
<<<<<<< Updated upstream
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
=======
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 买受人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 买受人组织名称
>>>>>>> Stashed changes
    "customerId": "89379b13aa5d449d94e885d5766a5c4e",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "2",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "2",
    "beTocost": "2",
    "transportTyp": "1",
    "signedPlace": "黄陵县店头镇",
    "signedTime": "2023-04-03",
    "saleSumAmount": "10000",
    "transportationType": "railwayDirectSell",
    "startTime": "2023-04-03",
    "endTime": "2023-04-30",
    "participateCustomerId": "89379b13aa5d449d94e885d5766a5c4e",
    "participateCustomerName": "", // 增加(冗余字段) participateCustomerName 第三方客户名称
    "conTime": "2023",// 需要字符串转Long
    "yearOrMonth": null,
    "month01Amount": "837",
    "month02Amount": "833",
    "month03Amount": "833",
    "month04Amount": "833",
    "month05Amount": "833",
    "month06Amount": "833",
    "month07Amount": "833",
    "month08Amount": "833",
    "month09Amount": "833",
    "month10Amount": "833",
    "month11Amount": "833",
    "month12Amount": "833",
    "flag": "1",
    "state": null,
    "orgId": "03a96b11da734b44836e5ab564279896",
    "orgName": "",// 增加(冗余字段) orgName 组织名称 (关联组织)
    "description": null,
    "versions": 2,
    "actProcessInstanceId": "10163638",
    "actProcessStatus": "submited",
    "createId": "5df63ca6bbcd45f4a7dea568af8b0a88",
    "createName": "祁贵杰",
    "createOrg": "03a96b11da734b44836e5ab564279896",
    "createTimes": 1680503036253,
    "modifyId": "43fc7274447648e3adadf9958fdb216b",
    "modifyName": "吴涛",
    "modifyOrg": null,
    "modifyTimes": 1680506838052,
    "delFlag": "1",
    "regionlId": null,
    "industry": null,
    "coalUse": null,
    "yearOrDaily": "daily",
    "transportCapMark": null,
    "coalTradeType": "2",
    "pid": "main",
    "tableTreeId": null,
    "eleContractUrl": null,
    "groupOrgId": null,
    "groupOrgName": null,
    "officeOrgId": null,
    "officeOrgName": null,
    "allocationFlag": null,
    "isGroupCreate": null,
    "geographicArea": "inProvince",
    "transportAmount": null,
    "eleCoalQuality": "<p class=\"ql-align-justify\">\t      <strong>2、煤炭品种、质量</strong></p><p class=\"ql-align-justify\">\t      2.1品种质量约定</p><p class=\"ql-align-justify\">\t品种名称：<u>混煤</u>；发热量（Qnet,ar）:<u>5800</u>千卡/千克；挥发份（Vdaf）: ≥<u>35</u>%；全硫：（St,d）≤<u>0.6</u>%；。</p><p><br></p>",
    "eleConPrice": "<p class=\"ql-align-justify\">\t      <strong>3、合同价格</strong></p><p class=\"ql-align-justify\">\t       煤炭价格（含税）定价机制：基准价+浮动价（不含矿区专用线费）。</p><p class=\"ql-align-justify\">\t      3.1基准价格为<u>&nbsp;&nbsp;&nbsp;390&nbsp;&nbsp;&nbsp;</u>元/吨（小数点后保留两位，四舍五入，下同）。</p><p class=\"ql-align-justify\">\t      3.2浮动价采用<u>[（上月最后一期BSPI指数-535）×50%+（上月最后一期陕西动力煤指数-313）×50%]×50% </u></p><p class=\"ql-align-justify\">          3.3基准价格根据国家发改委指导意见执行，若有变化，由发货人和乙方签订补充协议；具体价格及煤炭质量奖罚等条款由发货人、乙方协商签订补充协议。</p><p><br></p>",
    "eleSendTake": "<p class=\"ql-align-justify\">\t       <strong>4、交、收货人地点、方式及所有权的转移</strong></p><p class=\"ql-align-justify\">\t       4.1交货地点：<u>发站火车上</u></p><p class=\"ql-align-justify\">\t       4.2交货方式：<u>火车车板交货&nbsp;</u></p><p class=\"ql-align-justify\">\t       4.3发、收货人信息</p><p>\t       4.3.1 发货人（全称）：<u id=\"fahuo\" >&nbsp;陕煤运销集团（）销售有限公司</u></p><p>\t                 发&nbsp;&nbsp;站：<u>&nbsp;神木/神木西&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><p>\t                专用线：<u>&nbsp;&nbsp;&nbsp;&nbsp;陕西红柠铁路有限责任公司专用线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><p>\t       4.3.2 收货人（全称）：<u>&nbsp;安徽昊源化工集团有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><p>\t                到&nbsp;&nbsp;站：<u>&nbsp;&nbsp;口孜集/周口&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><p>                    专用线：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;铁路货场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><p class=\"ql-align-justify\">\t      4.4物权转移</p><p class=\"ql-align-justify\">\t      4.4.1发货人将煤炭运至本合同约定的交货地点，完成交货，煤炭的所有权及损毁灭失风险同时转移给乙方；</p><p><br></p>",
    "saleType": null,
    "sourceType": "10",
}

// 附件数据
let bus_con_rly_file
    = [
    {
        "fileId": "000a4131e2b84604be03c2a5f5ce6e3e",// ID
        "conRlyId": "aa12be7f86d14d099822655753a975ad",// 关联 主数据
        "fileName": "HTSMJTT12020DL0037华电六安-黄陵.pdf",
        "fileUrl": "/2021/01/04/test/pdf/test/a138f52d238942d2a593bc825b115517.pdf",// 需要转为 /zhihuiyunxiao/a138f52d238942d2a593bc825b115517.pdf
        "fileServer": "/jd/cloud/oos",
        "fileType": "pdf",
        "fileSize": "2 MB",
        "fileSuffix": ".pdf",
        "weightOrder": null,
        "versions": 1,
        "createId": "3e4bb7e79a404686a9c10e8951c50955",
        "createName": "张新峰",
        "createTimes": 1609747026368,
        "modifyId": "3e4bb7e79a404686a9c10e8951c50955",
        "modifyName": "张新峰",
        "modifyTimes": 1609747026368
    }
]

// 收货信息
let bus_con_rly_take
    = [
    {
        "rlyTakeId": "000d54d1643a423c867febf8e317063f", // ID
        "conRlyId": "0bab861fe41e46f38fe908e4a3fd37ab",// 关联主数据ID
        "customerId": "1900db47500e4096bd8ccef5e4db0cf1",
        "customerName": "",// 增加(冗余字段) customerName 客户名称
        "standId": "00199b83f229427499fca78d0ef6ddca",
        "standName": "",// 增加(冗余字段) standName 站点名称
        "lineId": "33cf3be27fc147d68fdd444b9324cc69",
        "lineName": "",// 增加(冗余字段) lineName 专线名称
        "linkmanName": null,
        "linkmanPhone": null,
        "description": null,
        "versions": 1,
        "createId": "9bbb1fbff20d4648a6013cebdae94504",
        "createName": "冯姗",
        "createTimes": 1643078827373,
        "modifyId": "9bbb1fbff20d4648a6013cebdae94504",
        "modifyName": "冯姗",
        "modifyTimes": 1643078827373,
        "takeName": null,
        "takeId": null
    }
]

// 发货信息
let bus_con_rly_send
    = [
    {
        "rlySendId": "00091adb604d47f4bff79c1e45f5fc33",// ID
        "conRlyId": "5deae074d267402e857488a279f8324e",// 关联主数据ID
        "supplierId": null,
        "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
        "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
        "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
        "standId": "574267bd59644471bee2a290093c042c",
        "standName": "我是站点名称",// 增加(冗余字段) standName 站点名称
        "lineId": "25a4b0bcc6db46788908d877ed6e38e5",
        "lineName": "我是专线名称",// 增加(冗余字段) lineName 专线名称
        "sendAddressId": null,
        "deliveryWay": "1",
        "deliveryAddress": "发站火车上",
        "description": null,
        "versions": 1,
        "createId": "b6c142d51b664a41aa51e4d2f6022a3f",
        "createName": "李宇申",
        "createTimes": 1673407315884,
        "modifyId": "b6c142d51b664a41aa51e4d2f6022a3f",
        "modifyName": "李宇申",
        "modifyTimes": 1673407315884,
        "sendAddressName": null,
        "sender": "陕煤运销集团榆中销售有限公司 ",
        "linkmanName": null,
        "linkmanPhone": null
    }
]

let bus_con_rly_coal
    = [
    {
        "rlyCoalId": "447798c511a040379a9e53c7ede48c6b",// ID
        "conRlyId": "6fd95f9c945f4b018919ad2575385281",// 关联主数据ID
        "coalTypeId": "61f4c471af2a44ffaf06c7b2d0986022",
        "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
        "coalVarietyId": "6863e60e8579425faf562fb1d7c75f5d",
        "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
        "priceRlyStratId": null,
        "priceRlyBaseId": "02b7517cc716439eb3ad1a7e3202a5a1",
        "priceRlyBaseName": "02b7517cc716439eb3ad1a7e3202a5a1",// 增加(冗余字段) priceRlyBaseName 价格名称
        "priceValue": "1100",
        "iqcMt": null,
        "iqcMad": null,
        "iqcAd": null,
        "iqcVdaf": null,
        "iqcSt": null,
        "iqcHad": null,
        "iqcQnet": null,
        "iqcGr": null,
        "iqcOther": null,
        "description": null,
        "versions": 1,
        "createId": "5df63ca6bbcd45f4a7dea568af8b0a88",
        "createName": "祁贵杰",
        "createTimes": 1680503036257,
        "modifyId": "5df63ca6bbcd45f4a7dea568af8b0a88",
        "modifyName": "祁贵杰",
        "modifyTimes": 1680503036257,
        "otherId": null,
        "otherName": null, // 增加(冗余字段) 其他优惠名称
        "advancePaymentId": "",
        "advancePaymentName": "", // 增加(冗余字段) 铁销先款后货名称
        "internalEnterpriseId": "",
        "internalEnterpriseName": "", // 增加(冗余字段) 铁销内部企业名称
        "redemptionRateId": "",
        "redemptionRateName": "", // 增加(冗余字段) 铁销兑现率优惠名称
        "volumeId": "",
        "volumeName": "", // 增加(冗余字段) 铁销量价优惠名称
        "chastenId": "",
        "chastenName": "",// 增加(冗余字段) 铁销热值奖惩名称
        "coalUse": "1",
        "pid": null,
        "supplierId": null,
        "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
        "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
        "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
        "qualityIndexIds": null,
        "qualityIndexNames": null
    }
]

let bus_con_attribute
    = [
    {
        "id": "00019eb09571765e5d7bf5c4ca76811a",// ID
        "conId": "7fb2491827b44244a4ee09b1d6b8a0bc",// 关联主数据ID
        "attKey": "是否包运费",// key
        "attValue": "否",// value
        "attWay": "1",// 方式
        "weightOrder": "2"// 排序
    }
]

let elec_contract_log
    = [
    {
        "conLogId": "005e3dff997942948021e1a305dd531e",// ID
        "busId": "5b88101a90cd4219bb86f4d3fc965a3b",// 关联主数据ID
        "busType": "地销贸易年度",
        "module": "地销贸易年度合同",
        "fileUrl": "/2022/12/30/elec-/word/18561fb295c.docx", // 需要转为 /zhihuiyunxiao/a138f52d238942d2a593bc825b115517.pdf
        "createId": "27884a9c04be41b08298f654185a7446",
        "createName": "贺震",
        "createOrgId": "0474a5383993454da59cccc16d2d5d55",
        "createOrgName": "榆林销售公司",
        "createTimes": 1672386128556,
        "modifyId": "27884a9c04be41b08298f654185a7446",
        "modifyName": "贺震",
        "modifyTimes": 1672386128556
    }
]