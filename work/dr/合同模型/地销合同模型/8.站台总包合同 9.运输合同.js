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
 * gzt_auxiliary_contract                   主业务(辅助合同)
 * gzt_charges_details_contract             公转铁费用明细
 * gzt_transport_take_contract              公转铁运输方式及收货地点
 * gzt_transport_goods_details_contract     公转铁运输货物明细
 * sys_upload_file_log                      附件
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
    gzt_auxiliary_contract: gzt_auxiliary_contract, // 主业务(辅助合同)
    gzt_charges_details_contract: gzt_charges_details_contract, // 公转铁费用明细
    gzt_transport_take_contract: gzt_transport_take_contract, // 公转铁运输方式及收货地点
    gzt_transport_goods_details_contract: gzt_transport_goods_details_contract, // 公转铁运输货物明细
    sys_upload_file_log: sys_upload_file_log, // 附件
}

/**
 * 主数据
 */
let gzt_auxiliary_contract
    = {
    "auxiliaryId": "0b3ea64f352b43bba9443e81067b99a0",
    "auxiliaryNo": "HTSMYL2022YS0002",
    "auxiliaryNoPrefix": "HTSMYL2022YS",
    "auxiliaryNoSerial": 2,
    "bargainorId": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d",
    "bargainorName": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d",// 增加(冗余字段) 出卖人名称
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "3ef6bd866d2a4dbda406ec1a17efa8e2",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "conType": "2",
    "startTime": "2022-07-01",
    "endTime": "2023-04-30",
    "conTime": "2022",
    "signedPlace": "神木",
    "signedTime": "2022-06-30",
    "goodsAmount": "1000000",
    "remainingAmount": "-756000.00",
    "shippingVolume": "1053336.88",
    "qualityAmount": null,
    "feesSettlementWay": null,
    "goodsCopyrightAscription": null,
    "flag": "1",
    "fileIds": "",
    "description": null,
    "actProcessInstanceId": "6871890",
    "actProcessStatus": "approve",
    "createId": "7c57ffdb903a4780a5f8d6e3191658a8",
    "createName": "李晨",
    "createOrgId": "0474a5383993454da59cccc16d2d5d55",
    "createTimes": 1661386832531,
    "modifyId": "9e67b3c4f8364214b216f8cb9eb62d75",
    "modifyName": "沈显友",
    "modifyOrgId": "0474a5383993454da59cccc16d2d5d55",
    "modifyTimes": 1675122754122,
    "pushMine": "ZJM"
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

// 公转铁费用明细
let gzt_charges_details_contract
    = [{
    "detailsId": "0b73d055e1c640a1872a9e10273ca299",
    "gztConId": "203696f6306841e088d0cd3a71191a2b",
    "chargesName": "站台服务费",
    "supplierId": "578623e11ae049ed854b839342389935",
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "coalTypeId": "c26a834fa2ba4715a78fc50c0af4c046",
    "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
    "coalVarietyId": "6b59239b95504239a0ac472babc4cf24",
    "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
    "standId": "fe68c6870601493b885fbcd6defd4794",
    "freightPrice": "0",
    "pId": "fc50cb109c4b4bf38c411383b7c48067",
    "remarks": "25元/吨，含税6%",
    "createId": "16989aa7040b4fdba976baa74c9f3058",
    "createName": "介北矿",
    "createOrg": null,
    "createTimes": 1660880920075,
    "modifyId": "16989aa7040b4fdba976baa74c9f3058",
    "modifyName": "介北矿",
    "modifyOrg": null,
    "modifyTimes": 1660880920075
}]

// 公转铁运输方式及收货地点
let gzt_transport_take_contract
    = [{
    "gztTransportTakeId": "04773d9c7f75470ab412cf1a303a98f6",// ID
    "gztConId": "770804ecdcbb47fe9a3e2419201abb55",// 主业务ID
    "transportationWay": "1",
    "supplierId": "aa1e915e03c94ccc837dcc3fc9c31bf4",
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "standId": "7ec1c6d74f824fce91b4e492f199a83a",
    "standName": "我是站点名称", // 增加(冗余字段) 站点名称
    "deliveryAddress": "",
    "createId": "26c8fbb1ca644620b48bb087c57d8b70",
    "createName": "yg002",
    "createOrg": null,
    "createTimes": 1665973386266,
    "modifyId": "26c8fbb1ca644620b48bb087c57d8b70",
    "modifyName": "yg002",
    "modifyOrg": null,
    "modifyTimes": 1665973386266
}]

// 公转铁运输货物明细
let gzt_transport_goods_details_contract
    = [{
    "detailsId": "367c40c1bd15426d83d3a97c1db9c019",
    "gztConId": "638e1ef35328400b9a07afc072f5be88",
    "supplierId": "aa1e915e03c94ccc837dcc3fc9c31bf4",
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "coalTypeId": "c26a834fa2ba4715a78fc50c0af4c046",
    "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
    "coalVarietyId": "6b59239b95504239a0ac472babc4cf24",
    "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
    "plannedShipmentVolume": "35000",
    "createId": "58f028118238493684aecbde37ef7e61",
    "createName": "贠晓琛",
    "createOrg": null,
    "createTimes": 1669946122997,
    "modifyId": "58f028118238493684aecbde37ef7e61",
    "modifyName": "贠晓琛",
    "modifyOrg": null,
    "modifyTimes": 1669946122997
}]