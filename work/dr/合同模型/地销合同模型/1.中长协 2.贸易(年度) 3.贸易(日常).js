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
 * bus_con_hwy             主数据
 * bus_con_hwy_take        收货信息
 * bus_con_hwy_send        供货信息
 * bus_con_hwy_coal        供货煤种信息
 * bus_con_hwy_file        附件
 * elec_contract_log       主要是生成的ddf
 *
 * >>>>>>>>>>>>> 回填逻辑 <<<<<<<<<<<<<<<<<
 *
 *
 * >>>>>>>>>>>>> 附加名称获取表 <<<<<<<<<<<<<<<<<
 * sys_org                  机构
 * bus_sal_bargainor        出卖人
 * bus_cus_customer         分公司客户
 * bus_sal_supplier         供货单位
 * bus_sal_dct_hwy_policy   地销优惠政策
 * bus_sal_chasten_hwy      地销热值奖惩
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
            "???"// 1.中长协 2.贸易(年度) 3.贸易(日常) 3选1
        ],
        "additionalBizDomainIds": [
            ""
        ],
        "orgDomainIds": [
            "", // =>> bus_con_hwy.bargainorOrgId 出卖人
            "", // =>> bus_con_hwy.createOrg 创建组织机构 (可操作)
            "", // =>> bus_con_hwy.officeOrgId 关联办事处
        ],
        "ascriptionDomain": {},
        "accredit": {},
        "createTime": 0,
        "creatorIdentity": "",
        "creatorName": "",// =>> bus_con_hwy.createName
        "creatorProxy": "",
        "creatorProxyName": "",
        "updateTime": 0,
        "menderIdentity": "",
        "menderName": "",// =>> bus_con_hwy.modifyName
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
    bus_con_hwy: bus_con_hwy, // 主数据
    bus_con_hwy_take: bus_con_hwy_take,// 收货信息
    bus_con_hwy_send: bus_con_hwy_send,// 供货信息
    bus_con_hwy_coal: bus_con_hwy_coal,// 供货煤种信息
    bus_con_hwy_file: bus_con_hwy_file,// 附件
    elec_contract_log: elec_contract_log,// 主要是生成的ddf
}

/**
 * 主数据
 *
 * 数据库 bus_con_hwy
 *
 */
let bus_con_hwy
    = {
    "conHwyId": "00000b8717c1439caf0d019503f3ac4f", // 主键 ID
    "agtHwyId": null,
    "conHwyNo": "HTSMYZD22021QT0023",
    "conHwyNoPrefix": "HTSMYZD22021QT",
    "conHwyNoSerial": 23,
    "conHwyType": "2",
    "bargainorId": "a869a7447c424c21b06562461526efaf",
    "bargainorName": "",
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "6d985adfe3b543ac8e841e24f61715ef",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "2",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "2",
    "beTocost": "2",
    "transportTyp": "2",
    "signedPlace": "榆林市榆阳区",
    "signedTime": "2021-01-13",
    "saleSumAmount": null,
    "transportationType": "CAR_TRANSPORTATION",
    "startTime": "2021-01-13",
    "endTime": "2021-12-31",
    "participateCustomerId": null,
    "participateCustomerName": "", // 增加(冗余字段) participateCustomerName 第三方客户名称
    "conTime": "2021",
    "yearOrMonth": null,
    "month01Amount": null,
    "month02Amount": null,
    "month03Amount": null,
    "month04Amount": null,
    "month05Amount": null,
    "month06Amount": null,
    "month07Amount": null,
    "month08Amount": null,
    "month09Amount": null,
    "month10Amount": null,
    "month11Amount": null,
    "month12Amount": null,
    "flag": "1",
    "state": null,
    "orgId": "16ff12aa514c4ccdb1e72f26b0834789",
    "orgName": "",// 增加(冗余字段) orgName 组织名称 (关联组织)
    "description": null,
    "versions": 651,
    "actProcessInstanceId": "908a84bd29ff4d6aab658e7dddc2eab3",
    "actProcessStatus": "approve",
    "createId": "49c3d6eecb7944298cddadb1b04e20a8",
    "createName": "张楠",
    "createOrg": "16ff12aa514c4ccdb1e72f26b0834789",
    "createTimes": 1610508331370,
    "modifyId": "2c555010792b4f7f9905eda6f44e6e44",
    "modifyName": "赵勇",
    "modifyOrg": null,
    "modifyTimes": 1680481658203,
    "delFlag": "1",
    "remainingAmount": null,
    "shippingVolume": "1179520.61",
    "ifMutualInsuranceCont": "2",
    "coalUse": null,
    "yearOrDaily": "year",
    "conHwyLetId": null,
    "coalTradeType": "2",
    "pid": null,
    "tableTreeId": null,
    "eleContractUrl": null,
    "ifAllot": "2",
    "officeOrgId": null,
    "officeOrgName": null,
    "bargaionrName": null,
    "allocationFlag": null,
    "isGroupCreate": null,
    "geographicArea": null,
    "transportAmount": null,
    "eleCoalQuality": null,
    "eleConPrice": null,
    "eleSendTake": null,
    "tmpCustomerId": null,
    "tmpCustomerName": null,
    "groupOrgId": null,
    "groupOrgName": null,
    "pushMine": "",
    "saleMode": "0",
    "dealerId": "16ff12aa514c4ccdb1e72f26b0834789",
    "dealerName": "榆中销售公司"
}

// 附件数据
let bus_con_hwy_file
    = [{
    "fileId": "000a4131e2b84604be03c2a5f5ce6e3e",// ID
    "conHwyId": "aa12be7f86d14d099822655753a975ad",// 关联 主数据
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
let bus_con_hwy_take
    = [{
    "hwyTakeId": "00372e00aaa64b8da4773d2d6055092b",// ID
    "conHwyId": "f2865c2aa4394cf997181da9244b19ce",// 关联主数据ID
    "customerId": "44994b1915c345338a41919714a1f98f",
    "customerName": "",// 增加(冗余字段) customerName 客户名称
    "takeName": null,
    "linkmanName": null,
    "linkmanPhone": null,
    "description": null,
    "versions": 1,
    "createId": "34ad43a0c1214a42a7602fa4c113a27a",
    "createName": "樊乃钦",
    "createTimes": 1669342334675,
    "modifyId": "34ad43a0c1214a42a7602fa4c113a27a",
    "modifyName": "樊乃钦",
    "modifyTimes": 1669342334675,
    "takeId": null
}]

// 发货信息
let bus_con_hwy_send
    = [{

    "hwySendId": "0000e38a517840bab6c6cce342883727",// ID
    "conHwyId": "1e79d5db4dde463780f92ed705088af6",// 关联主数据ID
    "supplierId": null,
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "sendAddressName": null,
    "deliveryWay": "3",
    "deliveryAddress": null,
    "description": null,
    "versions": 1,
    "createId": "49c3d6eecb7944298cddadb1b04e20a8",
    "createName": "张楠",
    "createTimes": 1608087270765,
    "modifyId": "49c3d6eecb7944298cddadb1b04e20a8",
    "modifyName": "张楠",
    "modifyTimes": 1608087270765,
    "sendAddressId": null,
    "supplierIds": "fc5ffc38a6a6412cb81e0208a601b179,05126e3d39c3483983fb25179170a696,c773d65465794e939cc3bcb340b59bc5", // 注意是逗号分隔的数据
    "supplierNames": "小保当矿,袁大滩矿,曹家滩矿"
}]

let bus_con_hwy_coal
    = [{
    "hwyCoalId": "00058144fd8146d0b418ffc238443fc2",// ID
    "conHwyId": "f0add6d9e55d4a03951f2c0df7d2e40a",// 关联主数据ID
    "coalTypeId": "61f4c471af2a44ffaf06c7b2d0986022",
    "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
    "coalVarietyId": "6863e60e8579425faf562fb1d7c75f5d",
    "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
    "priceHwyStratId": null,
    "priceHwyBaseId": "9f0dc2f5fd894ada8bafc21a7bab8727",
    "priceHwyBaseName": "02b7517cc716439eb3ad1a7e3202a5a1",// 增加(冗余字段) priceHwyBaseName 价格名称
    "priceValue": "636",
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
    "createId": "16989aa7040b4fdba976baa74c9f3058",
    "createName": "介北矿",
    "createTimes": 1651281694759,
    "modifyId": "16989aa7040b4fdba976baa74c9f3058",
    "modifyName": "介北矿",
    "modifyTimes": 1651281694759,
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
    "qualityIndexIds": null,
    "qualityIndexNames": null
}]

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