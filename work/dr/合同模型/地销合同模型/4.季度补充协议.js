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
 * bus_con_hwy_sup              主数据
 * bus_con_hwy_sup_coal         供货煤种信息
 * bus_con_hwy_sup_file         附件
 * bus_con_hwy_sup_send         供货信息
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
 */
let entity =
    {
        "id": "",
        "attributes": attributes,
        "platformDomainId": "LC",
        "bizDomainIds": [
            "yx",
            "d",
            "???"// 季度补充协议
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
    bus_con_hwy_sup: bus_con_hwy_sup, // 主数据
    bus_con_hwy_sup_coal: bus_con_hwy_sup_coal, // 供货煤种信息
    bus_con_hwy_sup_file: bus_con_hwy_sup_file, // 附件
    bus_con_hwy_sup_send: bus_con_hwy_sup_send, // 供货信息
}

/**
 * 主数据
 */
let bus_con_hwy_sup
    = {
    "conHwySupId": "a9fd37aa5fc34a25b2f355b84385d7e7",// 主键 ID
    "conHwyId": "0a7b93ed68114a728b34726cd570e1ce",// 合同父级 ID
    "conHwySupNo": "HTSMJTD12023QT0010-SMTC(03)",
    "conHwySupNoPrefix": "HTSMJTD12023QT0010-SMTC",
    "conHwySupNoSerial": 3,
    "conHwyType": "1",
    "bargainorId": "a9845ae11c1f4f50a1485c772f51b9a4",
    "bargainorName": "d20f1a3451b04fa6ae5dcd3a1b1b8a5d",// 增加(冗余字段) 出卖人名称
    "bargainorOrgId": "",// 增加(冗余字段) bargainorOrgId 出卖人组织ID
    "bargainorOrgName": "",// 增加(冗余字段) bargainorOrgName 出卖人组织名称
    "customerId": "2a5d0acba633408ead181f9fb033d3b4",
    "customerName": "", // 增加(冗余字段) customerName 买受人名称
    "beImportant": "2",
    "bePrepaid": "1",
    "planMark": null,
    "balanceType": "1",
    "beTocost": "1",
    "transportTyp": "2",
    "signedPlace": "陕西铜川",
    "signedTime": "2023-03-31",
    "saleSumAmount": "75000",
    "transportationType": "CAR_TRANSPORTATION",
    "startTime": "2023-04-01",
    "endTime": "2023-06-30",
    "participateCustomerId": "2a5d0acba633408ead181f9fb033d3b4",
    "participateCustomerName": "", // 增加(冗余字段) participateCustomerName 第三方客户名称
    "conTime": "2023",
    "yearMonthTime": null,
    "month01Amount": "0",
    "month02Amount": "0",
    "month03Amount": "0",
    "month04Amount": "25000",
    "month05Amount": "25000",
    "month06Amount": "25000",
    "month07Amount": "0",
    "month08Amount": "0",
    "month09Amount": "0",
    "month10Amount": "0",
    "month11Amount": "0",
    "month12Amount": "0",
    "flag": "1",
    "state": null,
    "orgId": "cb860ccf46fe431d8c2d6c318a7fa3b3",
    "description": "用户自提",
    "versions": 3,
    "actProcessInstanceId": "10129606",
    "actProcessStatus": "approve",
    "createId": "019e7268683e42f186437141b671137d",
    "createName": "邓德云",
    "createOrg": "cb860ccf46fe431d8c2d6c318a7fa3b3",
    "createTimes": 1680247423923,
    "modifyId": "99908d4a308f4ac29cae8b570cf86c08",
    "modifyName": "王帅",
    "modifyOrg": null,
    "modifyTimes": 1680485297340,
    "delFlag": "1",
    "conHwySupType": "1",
    "yearOrDaily": null,
    "conHwyLetId": null,
    "coalTradeType": "1",
    "tableTreeId": "f3f12b0b630846f194d166643e23d946",
    "eleContractUrl": null,
    "eleConContent": "<p><strong>一、执行周期：</strong></p><p>本协议执行周期为23年2季度（自4月1日至6月30日）。</p><p><strong>二、季度价格比例：</strong></p><p>本季度铁销月度长协价与地销市场当期算数平均价格构成比例为5：5。</p><p><strong>三、其他收费：</strong></p><p>过衡（磅）**元/吨；扬尘**元/吨；煤管票**元/吨。（各分、子公司根据实际情况签订）</p><p><strong>四、结算方式：</strong></p><p>一票结算。</p><p><strong>五、煤质奖罚</strong></p><p style=\"white-space: normal; text-indent: 28px; line-height: 24px;\">1、以卡计价，发热量（Qnet,ar）每升降1大卡加减0.094489元/吨；</p><p style=\"margin-left: 13px; white-space: normal; text-indent: 14px; line-height: 24px;\">2、当挥发份（Vdaf）＜28%时，每降低1%， 吨煤价格下降1元/吨；</p><p style=\"white-space: normal; text-indent: 28px; line-height: 24px;\">3、当全硫（St,d）＞1.5%时，每升高0.01%，吨煤价格下降0.1元/吨；</p><p style=\"white-space: normal; text-indent: 28px; line-height: 24px;\">4、当全水份（Mt）＞15%时，每升高1%，吨煤价格下降1元/吨</p><p><strong>六、票据收取：</strong></p><p>乙方全额预付货款，若支付银行承兑汇票，收取贴现息**%。（根据集团关于票据收取的相关规定执行）</p><p><strong>七、其他事项</strong></p><p>1、其它条款执行2022年原合同条款，未尽事宜双方另行协商解决。</p><p>2、本协议一式肆份, 双方签字盖章后生效，甲、乙双方各执两份。</p><p>3、本协议和合同等同效力，一并执行。</p>",
    "tmpCustomerId": "2a5d0acba633408ead181f9fb033d3b4",
    "tmpCustomerName": "陕西能源煤炭运销有限责任公司",
    "hwyPriceRatio": "5.0",
    "hwyPriceRatio": "5.0"
}

// 附件数据
let bus_con_hwy_sup_file
    = [
    {
        "fileId": "000a4131e2b84604be03c2a5f5ce6e3e",// ID
        "conHwySupId": "aa12be7f86d14d099822655753a975ad",// 关联 主数据
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
let bus_con_hwy_sup_send
    = [{
    "hwySupSendId": "b15eff81340c44788bccda68df1c7726",// ID
    "conHwySupId": "a9fd37aa5fc34a25b2f355b84385d7e7",// 关联主数据ID
    "supplierName": null,// 增加(冗余字段) supplierName 供货单位名称
    "supplierNo": null,// 增加(冗余字段) supplierNo 供货单位编号
    "supplierSimpleName": null,// 增加(冗余字段) supplierNo 供货单位简称
    "sendAddressName": null,
    "deliveryWay": null,
    "deliveryAddress": null,
    "description": null,
    "versions": 1,
    "createId": "019e7268683e42f186437141b671137d",
    "createName": "邓德云",
    "createTimes": 1680247423938,
    "modifyId": "019e7268683e42f186437141b671137d",
    "modifyName": "邓德云",
    "modifyTimes": 1680247423938,
    "sendAddressId": null
}]

let bus_con_hwy_sup_coal
    = [
    {
        "hwySupCoalId": "00028054841f420289506f6a9fa49119",// ID
        "conHwySupId": "0c6a0b88ccf84b06ba5550977383fcf4",// 关联主数据ID
        "coalTypeId": "c26a834fa2ba4715a78fc50c0af4c046",
        "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
        "coalVarietyId": "6b59239b95504239a0ac472babc4cf24",
        "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
        "priceHwyStratId": null,
        "priceHwyBaseId": "24a1c5abed3343ef91bc50021a4da8b0",
        "priceHwyBaseName": "02b7517cc716439eb3ad1a7e3202a5a1",// 增加(冗余字段) priceHwyBaseName 价格名称
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
    [
    {
        "hwySupCoalId": "003d981443e84e1193bd8da2b8059b1b",// ID
        "conHwySupId": "c162fadbd6fe4b4ebcea4b2f32ff751c",// 关联主数据ID
        "coalTypeId": "c26a834fa2ba4715a78fc50c0af4c046",
        "coalTypeName": "61f4c471af2a44ffaf06c7b2d0986022",// 增加(冗余字段) coalTypeName 煤种名称
        "coalVarietyId": "6b59239b95504239a0ac472babc4cf24",
        "coalVarietyName": "6863e60e8579425faf562fb1d7c75f5d",// 增加(冗余字段) coalVarietyName 品种名称
        "priceHwyStratId": null,
        "priceHwyBaseId": null,
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
        "createId": "27884a9c04be41b08298f654185a7446",
        "createName": "贺震",
        "createTimes": 1656290322037,
        "modifyId": "27884a9c04be41b08298f654185a7446",
        "modifyName": "贺震",
        "modifyTimes": 1656290322037,
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