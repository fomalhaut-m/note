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
 * bus_con_pat          港销合同
 * bus_con_pat_send     发货信息
 * bus_con_pat_file     附件
 * bus_con_pat_coal     煤种信息
 * bus_con_pat_take     收货信息
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
            "g",
            "???"// 铁销集团中长协,铁销分公司中长协标识,铁销贸易(年度),铁销贸易(日常) 业务标识(4选1)
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
    "bus_con_pat": bus_con_pat,// 港销合同
    "bus_con_pat_send": bus_con_pat_send,// 发货信息
    "bus_con_pat_file": bus_con_pat_file,// 附件
    "bus_con_pat_coal": bus_con_pat_coal,// 煤种信息
    "bus_con_pat_take": bus_con_pat_take,// 收货信息
}

/**
 * 主数据
 *
 * 数据库 bus_con_pat
 *
 */
let bus_con_pat
    = {
    "conPatId": "0b2f1e10e5e344e99f21741d8cbd4a67",
    "agtPatId": null,
    "conPatNo": "HTSMJTG12021DL0001",
    "conPatNoPrefix": "HTSMJTG12021DL",
    "conPatNoSerial": 1,
    "bargainorId": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d,a869a7447c424c21b06562461526efaf",
    "bargainorName": "",// 增加(冗余字段) bargainorName 出卖人名称
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "17fad3b7a2e2458db857bf8e656312bf",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "1",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "1",
    "beTocost": "1",
    "transportTyp": "1",
    "signedPlace": "陕西西安",
    "signedTime": "2020-11-26",
    "saleSumAmount": "2000000",
    "transportationType": "2",
    "startTime": "2021-01-01",
    "endTime": "2021-12-31",
    "participateCustomerId": null,
    "conTime": "2021",
    "yearOrMonth": null,
    "month01Amount": "166674",
    "month02Amount": "166666",
    "month03Amount": "166666",
    "month04Amount": "166666",
    "month05Amount": "166666",
    "month06Amount": "166666",
    "month07Amount": "166666",
    "month08Amount": "166666",
    "month09Amount": "166666",
    "month10Amount": "166666",
    "month11Amount": "166666",
    "month12Amount": "166666",
    "flag": "1",
    "state": null,
    "orgId": "f922a3e68d43494188a46c3c6ff44f1b",
    "description": null,
    "versions": 3,
    "actProcessInstanceId": "bad4e23cfe294ce7b050c300426ccd5e",
    "actProcessStatus": "approve",
    "createId": "914eb61ea732454294e904c0d85749dc",
    "createName": "曹延鹏",
    "createOrgId": "f922a3e68d43494188a46c3c6ff44f1b",
    "createOrgName": "陕西省煤炭运销（集团）有限责任公司",
    "createTimes": 1606266634069,
    "modifyId": "26c8fbb1ca644620b48bb087c57d8b70",
    "modifyName": "超级管理员",
    "modifyOrg": null,
    "modifyTimes": 1641379153000,
    "delFlag": "1",
    "conPatType": "1",
    "coalUse": null,
    "yearOrDaily": null,
    "coalTradeType": "1",
    "pid": "main",
    "tableTreeId": null,
    "eleContractUrl": null,
    "groupOrgId": "9310c4921d494020a926b306bcfaafcd",
    "groupOrgName": "陕西省煤炭运销（集团）有限责任公司",
    "officeOrgId": "f41de1b902a54fcaa4102b810696f65b",
    "officeOrgName": "港口办事处",
    "bargainorName": "榆林销售公司,榆中销售公司",
    "allocationFlag": "1",
    "isGroupCreate": "1",
    "geographicArea": "outsideProvince",
    "transportAmount": "0",
    "eleConPrice": null,
    "eleChasten": null,
    "eleSendTake": null
}

// 附件数据
let bus_con_pat_file
    = [{
    "fileId": "000a4131e2b84604be03c2a5f5ce6e3e",// ID
    "conPatId": "aa12be7f86d14d099822655753a975ad",// 关联 主数据
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
}]

// 收货信息
let bus_con_pat_take
    = [{
    "patTakeId": "960b78376c5d406eb427ba2d4c3e6b36",// ID
    "conPatId": "ddd195ffe796445d9ffbfc002ff1126d",// 关联主数据ID
    "customerId": "4508408adcc74df89857f52f36291b01",
    "customerName": "",// 增加(冗余字段) customerName 客户名称
    "standId": "00199b83f229427499fca78d0ef6ddca",
    "standName": "",// 增加(冗余字段) standName 站点名称
    "lineId": "33cf3be27fc147d68fdd444b9324cc69",
    "lineName": "",// 增加(冗余字段) lineName 专线名称
    "linkmanName": null,
    "linkmanPhone": null,
    "addressName": null,
    "description": null,
    "versions": 1,
    "createId": "031b56dc5d0e475f8383d7080d1d1b43",
    "createName": "员工001",
    "createTimes": 1601014531609,
    "modifyId": "031b56dc5d0e475f8383d7080d1d1b43",
    "modifyName": "员工001",
    "modifyTimes": 1601014531609,
    "takeName": null,
    "takeId": null
}]

// 发货信息
let bus_con_pat_send
    = [{
    "patSendId": "07bdcd9c359f49b99b8c60735852f364",// ID
    "conPatId": "458ca26400fb4ab3b79ffd7e8a552d69",// 关联主数据ID
    "supplierId": null,
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "standId": "574267bd59644471bee2a290093c042c",
    "standName": "我是站点名称",// 增加(冗余字段) standName 站点名称
    "lineId": "25a4b0bcc6db46788908d877ed6e38e5",
    "lineName": "我是专线名称",// 增加(冗余字段) lineName 专线名称
    "sendAddressId": null,
    "deliveryWay": "平仓交货、场地交货",
    "deliveryAddress": "曹妃甸港、日照港、黄骅港等北方港口",
    "description": null,
    "versions": 1,
    "createId": "914eb61ea732454294e904c0d85749dc",
    "createName": "曹延鹏",
    "createTimes": 1610506276167,
    "modifyId": "914eb61ea732454294e904c0d85749dc",
    "modifyName": "曹延鹏",
    "modifyTimes": 1610506276167,
    "sendAddressName": null,
    "deliveryTime": "平仓交货以船舶靠泊时间为准，场地交货（转列）以货权转移时间为准"
}]

let bus_con_pat_coal
    = [{
    "patCoalId": "000f3a622c4c4ec096bb26099582ff22",
    "conPatId": "2d15986346f94cae848bf8bc4c0e14a7",
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
    "createTimes": 1675148493648,
    "modifyId": "dd623194146241dbb91f8430b585723f",
    "modifyName": "陈胜环",
    "modifyTimes": 1675148493648,
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
    "coalUse": null,
    "pid": null,
    "supplierId": null,
    "tradeId": "3",
    "tradeName": "3",// 增加(冗余字段) tradeName 品名名称, 来源于字段
    "tradeIdSumAmount": "0",
    "qualityIndexIds": null,
    "qualityIndexNames": null
}]
