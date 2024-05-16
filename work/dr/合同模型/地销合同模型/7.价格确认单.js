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
 * bus_con_hwy_price        主业务
 * bus_con_hwy_price_coal   煤种品种
 * bus_con_hwy_price_send   发货信息
 * bus_con_hwy_price_send   发货信息
 * sys_upload_file_log      附件
 *
 * >>>>>>>>>>>>> 回填逻辑 <<<<<<<<<<<<<<<<<
 *
 *
 * >>>>>>>>>>>>> 附加名称获取表 <<<<<<<<<<<<<<<<<
 * sys_org                  机构
 * bus_sal_bargainor        出卖人
 * bus_cus_customer_group   集团客户
 * bus_cus_customer         分公司客户
 * bus_sal_hwy_stand        站点
 * bus_sal_hwy_line         专线
 * bus_sal_supplier         供货单位
 * bus_sal_dct_hwy_policy   铁销优惠政策
 * bus_sal_chasten_hwy      铁销热值奖惩
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
    bus_con_hwy_price: bus_con_hwy_price, //主业务
    bus_con_hwy_price_coal: bus_con_hwy_price_coal, //煤种品种
    bus_con_hwy_price_send: bus_con_hwy_price_send, //发货信息
    sys_upload_file_log: sys_upload_file_log, //附件
}

/**
 * 主数据
 */
let bus_con_hwy_price
    = {
    "conPriceId": "00878f1177b54448800fca93b515964b",// 主键 ID
    "conPriceNo": "HTSMJTD12022HG0040-SMPB(01)-22",
    "conHwyPriceNoSerial": 22,
    "conHwySupId": "bf1effb427ea4207a55ef44f71f6ebd1",// 季度补充协议ID
    "conHwyId": "f4721b7adcce4c8b8e49924ce2fcccd1",// 合同ID
    "conHwySupNo": "HTSMJTD12022HG0040-SMPB(01)",
    "conHwySupNoPrefix": "HTSMJTD12022HG0040-SMPB",
    "conHwySupNoSerial": 22,
    "conHwyType": "1",
    "bargainorId": "e111be82003949a6806151c77d6e31a1",
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "0ef295aa99fb4e5a8763145fa0d2a6c6",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "2",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "2",
    "beTocost": "2",
    "transportTyp": "2",
    "signedPlace": "铜川王益区",
    "signedTime": "2022-01-01",
    "saleSumAmount": "33333.33",
    "transportationType": "CAR_TRANSPORTATION",
    "startTime": "2022-01-22",
    "endTime": "2022-02-07",
    "participateCustomerId": "0ef295aa99fb4e5a8763145fa0d2a6c6",
    "participateCustomerName": "", // 增加(冗余字段) participateCustomerName 第三方客户名称
    "conTime": "2022",
    "yearMonthTime": null,
    "month01Amount": "33333",
    "month02Amount": "33333",
    "month03Amount": "33333",
    "month04Amount": "0",
    "month05Amount": "0",
    "month06Amount": "0",
    "month07Amount": "0",
    "month08Amount": "0",
    "month09Amount": "0",
    "month10Amount": "0",
    "month11Amount": "0",
    "month12Amount": "0",
    "flag": "1",
    "state": null,
    "orgId": "179faeaa152c4ebd94874deec3f7603b",
    "description": null,
    "versions": 1,
    "actProcessInstanceId": "6017071",
    "actProcessStatus": "approve",
    "createId": "16989aa7040b4fdba976baa74c9f3058",
    "createName": "介北矿",
    "createOrg": "179faeaa152c4ebd94874deec3f7603b",
    "createTimes": 1655955700147,
    "modifyId": "16989aa7040b4fdba976baa74c9f3058",
    "modifyName": "介北矿",
    "modifyOrg": null,
    "modifyTimes": 1655966422000,
    "delFlag": null,
    "conHwySupType": "1",
    "yearOrDaily": "1",
    "conHwyLetId": null,
    "coalTradeType": null,
    "tableTreeId": "489e46ad6d5e4ffcadae48c3967667b6",
    "eleContractUrl": null,
    "fileIds": null, // sys_upload_file_log 的 ID
    "shippingVolume": "0",
    "remainingAmount": "33333.33",
    "weightOrder": null,
    "pushMine": ""
}

// 附件数据
let sys_upload_file_log
    = [{
    "fileId": "005ddb03698a48708e4822072531b642",
    "fileName": "010303.jpg",
    "fileUrl": "/2023/01/03/test/image/test/ff9c024412324fb09b36b9770c62534f.jpg",// 需要转为 /zhihuiyunxiao/a138f52d238942d2a593bc825b115517.pdf
    "fileType": "image",
    "fileSize": "5 MB",
    "fileSuffix": ".jpg",
    "fileServer": "/jd/cloud/oos",
    "module": "test",
    "createId": "d34b320792ee4b47ad56a3336ada0498",
    "createName": "马娟娟",
    "createOrgName": "韩城分公司",
    "createOrgId": "105ef2076ecc4359aff798b5d4539f4f",
    "createPostName": "韩城-质检管理岗",
    "createPostId": "f378e9b65dd24ddaa863b85fae6de812",
    "createStaffName": "马娟娟",
    "createStaffId": "74c07edc2b1a4fcaa0b2cb8bff0582f6",
    "createTime": "2023-01-03T15:56:19.973"
}]

// 发货信息
let bus_con_hwy_price_send
    = [{
    "hwyPriceSendId": "00904fa806da4078bf2eb7195d59e202",// ID
    "conPriceId": "c93378890bf747578af353443c40fe3d",// 关联主数据ID
    "conHwySupId": "ab735d58f5f34d1485d7245579c5597e",// 季度补充协议ID
    "supplierId": "aa1e915e03c94ccc837dcc3fc9c31bf4",
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "sendAddressName": null,
    "deliveryWay": "3",
    "deliveryAddress": null,
    "description": null,
    "versions": 1,
    "createId": "27884a9c04be41b08298f654185a7446",
    "createName": "贺震",
    "createTimes": 1660704318882,
    "modifyId": "27884a9c04be41b08298f654185a7446",
    "modifyName": "贺震",
    "modifyTimes": 1660704318882,
    "sendAddressId": null
}]

let bus_con_hwy_price_coal
    = [{
    "hwyPriceCoalId": "012f255786984e6dac12be24b3905014",
    "conPriceId": "f924b3b855214d9c8eb7d3d85e2afca2",
    "conHwySupId": "4ca4807be65244e3a5d4810abbab3aa6",
    "coalTypeId": "61f4c471af2a44ffaf06c7b2d0986022",
    "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
    "coalVarietyId": "6863e60e8579425faf562fb1d7c75f5d",
    "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
    "priceHwyStratId": null,
    "priceHwyBaseId": "be3bdd947b0d4ec9b3be5083002a662b",
    "basePriceName": "2022年2月第二期-原煤-地销中长协",
    "priceValue": "743.5",
    "priceType": "1",
    "iqcMt": null,
    "iqcMad": null,
    "iqcAd": null,
    "iqcVdaf": null,
    "iqcSt": null,
    "iqcHad": null,
    "iqcQnet": "5800",
    "iqcGr": null,
    "iqcOther": null,
    "description": null,
    "versions": null,
    "createId": "27884a9c04be41b08298f654185a7446",
    "createName": "贺震",
    "createTimes": 1649921644536,
    "modifyId": null,
    "modifyName": null,
    "modifyTimes": null,
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
    "qualityIndexNames": null,
}]