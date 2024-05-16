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
 * bus_con_rly_sup              主数据
 * bus_con_rly_sup_coal         供货煤种信息
 * bus_con_rly_sup_file         附件
 * bus_con_rly_sup_send         供货信息
 * bus_con_rly_sup_take         收货信息
 * bus_con_attribute            附件信息(类似于key:value)
 * elec_contract_log            主要是生成的ddf
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
    bus_con_rly_sup: bus_con_rly_sup, // 主数据
    bus_con_rly_sup_coal: bus_con_rly_sup_coal, // 供货煤种信息
    bus_con_rly_sup_file: bus_con_rly_sup_file, // 附件
    bus_con_rly_sup_send: bus_con_rly_sup_send, // 供货信息
    bus_con_rly_sup_take: bus_con_rly_sup_take, // 收货信息
    bus_con_attribute: bus_con_attribute, // 附件信息(类似于key:value)
    elec_contract_log: elec_contract_log, // 主要是生成的ddf
}

/**
 * 主数据
 */
let bus_con_rly_sup
    = {
    "conRlySupId": "6fd95f9c945f4b018919ad2575385281", // 主键 ID
    "conRlyId": "1b88fd70943246579137417a215af546", // 合同父级 ID
    "conRlySupNo": "HTSMJTT12022HG0041-SMYL(10)",
    "conRlySupNoPrefix": "HTSMJTT12022HG0041-SMYL",
    "conRlySupNoSerial": 10,
    "conRlyType": "1",
    "bargainorId": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d",
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "e85cf46599bf45af9dc4d32284f2c7f4",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "1",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "2",
    "beTocost": "2",
    "transportTyp": "1",
    "signedPlace": "陕西西安",
    "signedTime": "2022-09-01",
    "saleSumAmount": "10500",
    "transportationType": "HwyToRly",
    "startTime": "2022-09-01",
    "endTime": "2022-09-30",
    "participateCustomerId": "e85cf46599bf45af9dc4d32284f2c7f4",
    "participateCustomerName": "", // 增加(冗余字段) participateCustomerName 第三方客户名称
    "conTime": "2022",
    "yearMonthTime": null,
    "month01Amount": "875",
    "month02Amount": "875",
    "month03Amount": "875",
    "month04Amount": "875",
    "month05Amount": "875",
    "month06Amount": "875",
    "month07Amount": "875",
    "month08Amount": "875",
    "month09Amount": "875",
    "month10Amount": "875",
    "month11Amount": "875",
    "month12Amount": "875",
    "flag": "1",
    "state": null,
    "orgId": "f825f045efca4af6806b6ff94fb7be6e",
    "orgName": "",// 增加(冗余字段) orgName 组织名称 (关联组织)
    "description": null,
    "versions": 3,
    "actProcessInstanceId": "7163906",
    "actProcessStatus": "approve",
    "createId": "b6c142d51b664a41aa51e4d2f6022a3f",
    "createName": "李宇申",
    "createOrg": "f825f045efca4af6806b6ff94fb7be6e",
    "createTimes": 1663038694720,
    "modifyId": "4c27b83af73f4a5fb9ad14cbf98d7ed4",
    "modifyName": "张少飞",
    "modifyOrg": null,
    "modifyTimes": 1663552860920,
    "delFlag": "1",
    "regionlId": null,
    "industry": null,
    "conRlySupType": "1",
    "yearOrDaily": null,
    "coalTradeType": "1",
    "tableTreeId": "52be9b5bddf94da2a03d2bab9f226db9",
    "eleContractUrl": null,
    "eleCoalQuality": "<p style=\"text-indent:32px;line-height:16px\"><strong><span style=\"font-family: 宋体;font-size: 16px\">2</span></strong><strong><span style=\"font-family: 宋体;font-size: 16px\">、煤炭品种、质量</span></strong></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">2.1</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">品种质量约定</span> </span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">依据陕西煤业化工集团有限责任公司《水煤浆气化用煤：</span>Q/SM 0001—2021》相关标准，供应商品煤质量如下：</span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">品种名称：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">混煤</span></span><span style=\";font-family:宋体;font-size:16px\">；灰分</span><span style=\";font-family:宋体;font-size:12px\"><span style=\"font-family:宋体\">（</span>Ad）：</span><span style=\";font-family:宋体;font-size:16px\">≤</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">13</span></span><span style=\";font-family:宋体;font-size:16px\">%</span><span style=\";font-family:宋体;font-size:16px\">；全硫</span><span style=\";font-family:宋体;font-size:12px\">（</span><span style=\";font-family:宋体;font-size:12px\">St,d</span><span style=\";font-family:宋体;font-size:12px\">）</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">：</span>≤</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">0.6</span></span><span style=\";font-family:宋体;font-size:16px\">%</span><span style=\";font-family:宋体;font-size:16px\">；全水</span><span style=\";font-family:宋体;font-size:12px\"><span style=\"font-family:宋体\">（</span>Mt）</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">：</span>≤</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">15</span></span><span style=\";font-family:宋体;font-size:16px\">%</span><span style=\";font-family:宋体;font-size:16px\">。</span></p><p><br/></p>",
    "eleConPrice": "<p style=\"text-indent:32px;line-height:16px\"><strong><span style=\"font-family: 宋体;font-size: 16px\">3</span></strong><strong><span style=\"font-family: 宋体;font-size: 16px\">、合同价格</span></strong></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">煤炭价格（含税）定价机制：基准价</span><span style=\";font-family:宋体;font-size:16px\">+</span><span style=\";font-family:宋体;font-size:16px\">调价机制（不含矿区专用线费）</span><span style=\";font-family:宋体;font-size:16px\">。</span></p><p style=\"text-indent:32px;line-height:16px\"><strong><span style=\";font-family:宋体;font-size:16px\">3.1 </span></strong><strong><span style=\"font-family: 宋体;font-size: 16px\">基准价格：</span></strong></p><p style=\"text-indent:32px;line-height:16px\"><span style=\"font-family: 宋体;font-size: 16px\"><span style=\"font-family:宋体\">按陕煤运销集团榆林销售有限公司当年</span>1月份动力煤（基准热值5500大卡/千克）长协价格折算为5800大卡/千克+30元。</span><span style=\";font-family:宋体;font-size:16px\">（小数点后保留两位，四舍五入）</span><span style=\";font-family:宋体;font-size:16px\">。</span></p><p style=\"text-indent:32px;line-height:16px\"><strong><span style=\";font-family:宋体;font-size:16px\">3.</span></strong><strong><span style=\";font-family:宋体;font-size:16px\">2</span></strong><strong><span style=\";font-family:宋体;font-size:16px\">&nbsp;<span style=\"font-family:宋体\">调价机制</span></span></strong></p><p style=\"text-indent:32px;line-height:16px\"><span style=\"font-family: 宋体;font-size: 16px\">3.2.1榆林公司调价机制</span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\"font-family: 宋体;font-size: 16px\">浮动价采用</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\"><span style=\"font-family:宋体\">（西煤交易中心榆林煤炭综合价格指数上月平均价格</span>-西煤交易中心榆林煤炭综合价格指数上年度平均价格）* 0.7+（卓创资讯上月尿素平均价格-卓创资讯上年度尿素平均价格）*</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">0.1</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">*</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">0.3</span></span><span style=\"font-family: 宋体;font-size: 16px\">。</span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\"font-family: 宋体;font-size: 16px\">3.3</span><span style=\"font-family: 宋体;font-size: 16px\">当年动力煤长协价格的基准价根据国家发改委指导意见执行，若有变化，由发货人和乙方签订补充协议；具体价格及煤炭质量奖罚等条款由发货人、</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">乙方协商签订补充协议。</span> </span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">3.4 若相关指数停发或当期煤炭销售价格低于同期同品质动力煤销售价格时，甲方可根据市场供需实际情况制定月度销售价格意见，并与乙方协商后确认。</span></p><p><br/></p>",
    "eleSendTake": "<p style=\"text-indent:32px;line-height:16px\"><strong><span style=\"font-family: 宋体;font-size: 16px\">4</span></strong><strong><span style=\"font-family: 宋体;font-size: 16px\">、交、收货人地点、方式及所有权的转移</span></strong></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">4.1</span><span style=\";font-family:宋体;font-size:16px\">交货地点：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">发站火车上</span></span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">4.2</span><span style=\";font-family:宋体;font-size:16px\">交货方式：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">火车车板交货</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">4.3</span><span style=\";font-family:宋体;font-size:16px\">发、收货人信息</span></p><p style=\"text-indent: 32px;line-height: 16px\"><span style=\";font-family:宋体;font-size:16px\">4.3.1 </span><span style=\";font-family:宋体;font-size:16px\">发货人（全称）：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">陕</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">煤运销集团榆林销售有限公司</span></span></p><p style=\"text-indent: 80px;line-height: 16px\"><span style=\";font-family:宋体;font-size:16px\">发</span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">站：</span> </span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\"><span style=\"font-family:宋体\">神木</span>/神木西</span></span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;</span></p><p style=\"text-indent: 80px;line-height: 16px\"><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">专用线：</span> </span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">陕西红柠铁路有限责任公司专用线</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p style=\"text-indent: 32px;line-height: 16px\"><span style=\";font-family:宋体;font-size:16px\">4.3.2 </span><span style=\";font-family:宋体;font-size:16px\">收货人（全称）：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">连云港市工投集团金桥供销有限公司</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;&nbsp;&nbsp;</span></span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p><p style=\"text-indent: 80px;line-height: 16px\"><span style=\";font-family:宋体;font-size:16px\">到</span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;</span><span style=\";font-family:宋体;font-size:16px\"><span style=\"font-family:宋体\">站：</span> </span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">梁山北</span></span><span style=\";font-family:宋体;font-size:16px\">&nbsp;&nbsp;&nbsp;</span><span style=\";font-family:宋体;font-size:16px\">&nbsp;</span></p><p style=\"margin-left:144px;text-align:justify;text-justify:inter-ideograph;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">专用线：</span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">铁路货场</span></span><span style=\"text-decoration:underline;\"><span style=\"font-family: 宋体;font-size: 16px\">&nbsp;</span></span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\"font-family: 宋体;font-size: 16px\">4.4</span><span style=\"font-family: 宋体;font-size: 16px\">物权转移</span></p><p style=\"text-indent:32px;line-height:16px\"><span style=\";font-family:宋体;font-size:16px\">4.4.1</span><span style=\"font-family: 宋体;font-size: 16px\">发货人将煤炭运至本合同约定的交货地点，完成交货，煤炭的所有权及损毁灭失风险同时转移给乙方；</span></p><p><br/></p>",
    "saleType": null,
    "sourceType": "10"
}

// 附件数据
let bus_con_rly_sup_file
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
let bus_con_rly_sup_take
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
let bus_con_rly_sup_send
    = [
    {
        "rlySupSendId": "00026fda968049be9e5039aabad2dc95",// ID
        "conRlySupId": "710baed7801945febb0c9d7c3a4f662b",// 关联主数据ID
        "supplierId": null,
        "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
        "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
        "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
        "standId": "c3781abf33454262bdedf8988784bd18",
        "standName": "我是站点名称",// 增加(冗余字段) standName 站点名称
        "lineId": null,
        "lineName": "我是专线名称",// 增加(冗余字段) lineName 专线名称
        "sendAddressId": null,
        "deliveryWay": "1",
        "deliveryAddress": "发站火车上",
        "description": null,
        "versions": 1,
        "createId": "43fc7274447648e3adadf9958fdb216b",
        "createName": "吴涛",
        "createTimes": 1669284839686,
        "modifyId": "43fc7274447648e3adadf9958fdb216b",
        "modifyName": "吴涛",
        "modifyTimes": 1669284839686,
        "sendAddressName": null,
        "sender": null,
        "linkmanName": null,
        "linkmanPhone": null
    }
]

let bus_con_rly_sup_coal
    = [
    {
        "rlySupCoalId": "00028054841f420289506f6a9fa49119",// ID
        "conRlySupId": "0c6a0b88ccf84b06ba5550977383fcf4",// 关联主数据ID
        "coalTypeId": "c26a834fa2ba4715a78fc50c0af4c046",
        "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
        "coalVarietyId": "6b59239b95504239a0ac472babc4cf24",
        "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
        "priceRlyStratId": null,
        "priceRlyBaseId": "24a1c5abed3343ef91bc50021a4da8b0",
        "priceRlyBaseName": "02b7517cc716439eb3ad1a7e3202a5a1",// 增加(冗余字段) priceRlyBaseName 价格名称
        "priceValue": null,
        "iqcMt": null,
        "iqcMad": null,
        "iqcAd": null,
        "iqcVdaf": null,
        "iqcSt": null,
        "iqcHad": null,
        "iqcQnet": "5000",
        "iqcGr": null,
        "iqcOther": null,
        "description": null,
        "versions": 1,
        "createId": "a05e3e60103f4b70a7ae7e6ec773d903",
        "createName": "郭向峰",
        "createTimes": 1640927581129,
        "modifyId": "a05e3e60103f4b70a7ae7e6ec773d903",
        "modifyName": "郭向峰",
        "modifyTimes": 1640927581129,
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