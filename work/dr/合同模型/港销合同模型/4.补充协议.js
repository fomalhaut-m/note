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
 * bus_con_pat_sup          补充协议
 * bus_con_pat_sup_coal     供货煤种信息
 * bus_con_pat_sup_file     附件
 * bus_con_pat_sup_send     供货信息
 *
 * >>>>>>>>>>>>> 回填逻辑 <<<<<<<<<<<<<<<<<
 *
 *
 * >>>>>>>>>>>>> 附加名称获取表 <<<<<<<<<<<<<<<<<
 * sys_org                  机构
 * bus_sal_bargainor        出卖人
 * bus_cus_customer_group   集团客户
 * bus_cus_customer         分公司客户
 * bus_sal_pat_stand        站点
 * bus_sal_pat_line         专线
 * bus_sal_supplier         供货单位
 * bus_sal_dct_pat_policy   铁销优惠政策
 * bus_sal_chasten_pat      铁销热值奖惩
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
            "d",
            "???"// 补充协议 业务标识
        ],
        "additionalBizDomainIds": [
            ""
        ],
        "orgDomainIds": [
            "", // =>> bus_con_pat.bargainorOrgId 出卖人
            "", // =>> bus_con_pat.createOrg 创建组织机构 (可操作)
            "", // =>> bus_con_pat.officeOrgId 关联办事处
        ],
        "ascriptionDomain": {},
        "accredit": {},
        "createTime": 0,
        "creatorIdentity": "",
        "creatorName": "",// =>> bus_con_pat.createName
        "creatorProxy": "",
        "creatorProxyName": "",
        "updateTime": 0,
        "menderIdentity": "",
        "menderName": "",// =>> bus_con_pat.modifyName
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
    bus_con_pat_sup: bus_con_pat_sup,// 补充协议
    bus_con_pat_sup_coal: bus_con_pat_sup_coal,// 供货煤种信息
    bus_con_pat_sup_file: bus_con_pat_sup_file,// 附件
    bus_con_pat_sup_send: bus_con_pat_sup_send,// 供货信息
}

/**
 * 主数据
 */
let bus_con_pat_sup
    = {
    "conPatSupId": "00300f67e0004a12a2f4652ca978a353",
    "conPatId": "fd108e9d2def4fe8b3f5551a49b205a4",
    "conPatSupNo": "HTSMJTG12021HG0002-SMYZ(01)",
    "conPatSupNoPrefix": "HTSMJTG12021HG0002-SMYZ",
    "conPatSupNoSerial": 1,
    "bargainorId": "a869a7447c424c21b06562461526efaf",
    "bargainorName": "",// 增加(冗余字段) bargainorName 出卖人名称
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "c10955ec56b841fbab50b3abb8819e27",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "1",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "1",
    "beTocost": "1",
    "transportTyp": "1",
    "signedPlace": "陕西西安",
    "signedTime": "2020-11-26",
    "saleSumAmount": "200000",
    "transportationType": "2",
    "startTime": "2021-01-01",
    "endTime": "2021-12-31",
    "participateCustomerId": null,
    "conTime": "2021",
    "yearMonthTime": null,
    "month01Amount": "16674",
    "month02Amount": "16666",
    "month03Amount": "16666",
    "month04Amount": "16666",
    "month05Amount": "16666",
    "month06Amount": "16666",
    "month07Amount": "16666",
    "month08Amount": "16666",
    "month09Amount": "16666",
    "month10Amount": "16666",
    "month11Amount": "16666",
    "month12Amount": "16666",
    "flag": "1",
    "state": null,
    "orgId": "f41de1b902a54fcaa4102b810696f65b",
    "orgName": "",// 增加(冗余字段) orgName 组织名称 (关联组织)
    "description": null,
    "versions": 3,
    "actProcessInstanceId": "1c0c9ff52dc5492795a769fb5f1b0dd9",
    "actProcessStatus": "approve",
    "createId": "914eb61ea732454294e904c0d85749dc",
    "createName": "曹延鹏",
    "createOrgId": "f41de1b902a54fcaa4102b810696f65b",
    "createOrgName": "港口办事处",
    "createTimes": 1610506724745,
    "modifyId": "80d2163390424bed8e645626715ccda2",
    "modifyName": "石旭东",
    "modifyOrg": null,
    "modifyTimes": 1610670825386,
    "delFlag": "1",
    "conPatType": "1",
    "conPatSupType": "1",
    "yearOrDaily": null,
    "coalTradeType": "1",
    "tableTreeId": "572f65f2add447a184b0806d71ca80e6",
    "eleContractUrl": null,
    "eleConPrice": null,
    "eleChasten": null,
    "eleSendTake": null
}

// 附件数据
let bus_con_pat_sup_file
    = [{
    "fileId": "000a4131e2b84604be03c2a5f5ce6e3e",// ID
    "conPatSupId": "aa12be7f86d14d099822655753a975ad",// 关联 主数据
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

// 发货信息
let bus_con_pat_sup_send
    = [{
    "patSupSendId": "005c6432a4124540b4b82a5e762cd6b1",// ID
    "conPatSupId": "6519976534bb4282b9dc0962f5516edd",// 关联 主数据
    "supplierId": null,
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "standId": "c3781abf33454262bdedf8988784bd18",
    "standName": "我是站点名称",// 增加(冗余字段) standName 站点名称
    "lineId": null,
    "lineName": "我是专线名称",// 增加(冗余字段) lineName 专线名称
    "sendAddressId": null,
    "deliveryWay": "平仓交货、场地交货",
    "deliveryAddress": "曹妃甸港、日照港、黄骅港等北方港口",
    "description": null,
    "versions": 1,
    "createId": "dd623194146241dbb91f8430b585723f",
    "createName": "陈胜环",
    "createTimes": 1647564488300,
    "modifyId": "dd623194146241dbb91f8430b585723f",
    "modifyName": "陈胜环",
    "modifyTimes": 1647564488300,
    "sendAddressName": "",
    "deliveryTime": "平仓交货以船舶靠泊日期为准，场地交货（转列）以货权转移日期为准"
}]

let bus_con_pat_sup_coal
    = [{
    "patSupCoalId": "0020080606dc400ea23ce5317bd7a532",// ID
    "conPatSupId": "fc1d7662610e435f92c899d64a758030",// 关联 主数据
    "coalTypeId": null,
    "coalVarietyId": null,
    "pricePatStratId": null,
    "pricePatBaseId": null,
    "priceValue": null,
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
    "createId": "dd623194146241dbb91f8430b585723f",
    "createName": "陈胜环",
    "createTimes": 1672966297514,
    "modifyId": "dd623194146241dbb91f8430b585723f",
    "modifyName": "陈胜环",
    "modifyTimes": 1672966297514,
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
    "tradeIdSumAmount": "0",
    "qualityIndexIds": null,
    "qualityIndexNames": null
}]
