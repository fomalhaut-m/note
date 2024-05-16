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
 * bus_con_hwy_let              主数据
 * bus_con_hwy_file             附件
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
            "d",
            "???"// 5.成交函 6.虚拟成交函
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
    bus_con_hwy_let: bus_con_hwy_let, // 主数据
    bus_con_hwy_let_file: bus_con_hwy_let_file, // 附件
}

/**
 * 主数据
 */
let bus_con_hwy_let
    = {

    "conHwyLetId": "000436c646004d7ebd667b9335fccd78",
    "conHwyId": "d1402552ecff4df4bf7d56197584befb",
    "conHwyLetNo": "NBHG2301060074",
    "conHwyLetNoPrefix": null,
    "conHwyLetNoSerial": null,
    "bargainorId": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d",
    "bargainorName": "陕煤运销集团榆林销售有限公司",
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "acf9ab42222749bdb6e8c3808d26e98a",
    "customerName": "陕西东鑫垣化工有限责任公司",
    "transactionDate": "2023-01-06",
    "coalTypeId": "741dbd5bba6345f68b5e5d249a77b7da",
    "coalVarietyId": "17c2d707175041358586b9a855c4d64d",
    "coalTypeName": "长焰煤",
    "coalVarietyName": "洗中块（5-2）",
    "supplierId": "aa1e915e03c94ccc837dcc3fc9c31bf4",
    "supplierName": "陕煤集团神木红柳林矿业有限公司",
    "heat": null,
    "biddingVolume": "20000",
    "remainingAmount": "0.00",
    "shippingVolume": "19970.44",
    "finalPrice": "1390.00",
    "startingBid": "1390.00",
    "letterOfAuction": null,
    "contactPerson": "柴雄",
    "contactDetails": "13892297577",
    "flag": "1",
    "orgId": "0474a5383993454da59cccc16d2d5d55",
    "orgName": "",// 增加(冗余字段) orgName 组织名称 (关联组织)
    "description": null,
    "versions": 15,
    "createId": "ea50c9b0121649c79b0d731fa90ccbf1",
    "createName": "高浩",
    "createTimes": 1672993038097,
    "modifyId": "e495272932cc4295b2e3fe66cd5242f8",
    "modifyName": "高铜轩",
    "modifyOrg": null,
    "modifyTimes": 1673909531109,
    "delFlag": "1",
    "billId": null,
    "conHwyNo": "HTSMYLD22023HG0007",
    "typeOfLetter": "specialReserved",
    "yearOrDaily": null,
    "startTime": "2023-01-07",
    "endTime": "2023-01-16",
    "checkState": "1",
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
    "conHwySaleId": null,
    "dataSource": null,
    "relationLetId": null,
    "relationLetNo": null,
    "relationState": null,
    "actProcessStatus": null,
    "actProcessInstanceId": null,
    "isFictitiousLet": null,
    "qualityIndexIds": null,
    "qualityIndexNames": null,
    "deliveryPoint": "红柳林矿坑口",
    "isPush": 0,
    "pushMine": "HLL",
    "saleMode": "0",
    "dealerId": "0474a5383993454da59cccc16d2d5d55",
    "dealerName": "榆林销售公司"
}

// 附件数据
let bus_con_hwy_let_file
    = [{
    "fileId": "077bdc6bf0c8428993f53bab4d103c9e",// ID
    "conHwyId": "f511e6f04fb5471f8bdd810461f839b0",// 关联 主数据
    "fileName": "乾丰GL-30.docx",
    "fileUrl": "/2021/01/26/test/word/test/bd5918b415384dcfa611e3a9399e5ccc.docx", // 需要转为 /zhihuiyunxiao/a138f52d238942d2a593bc825b115517.pdf
    "fileServer": "/jd/cloud/oos",
    "fileType": "word",
    "fileSize": "24 KB",
    "fileSuffix": ".docx",
    "weightOrder": null,
    "versions": 1,
    "createId": "79535e45d1d44a3cbb5402e565a9d513",
    "createName": "常玲茹",
    "createTimes": 1611650042142,
    "modifyId": "79535e45d1d44a3cbb5402e565a9d513",
    "modifyName": "常玲茹",
    "modifyTimes": 1611650042142
}]
