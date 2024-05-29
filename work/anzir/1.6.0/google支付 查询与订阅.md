

# 准备

[做好准备](https://developer.android.com/google/play/billing/getting-ready?hl=zh-cn#grant-rights)
[Google Play 结算系统](https://developer.android.com/distribute/play-billing?hl=zh-cn)
[一次性购买生命周期](https://developer.android.com/google/play/billing/lifecycle/one-time?hl=zh-cn)
[实时开发者通知参考指南](https://developer.android.com/google/play/billing/rtdn-reference?hl=zh-cn#encoding)

> 注意: Google Play 账号需要相对应权限, 我这里没有细研究, 给的是最大权限
>
> 

## 查询编码

### 重点
[错误1](没有开通API.log) 请开通 API
[没有权限](没有权限.log) 试了很久, 发现是缓存, 需要把商品重新保存一下.

### maven
```xml
    <!-- https://mvnrepository.com/artifact/com.google.apis/google-api-services-androidpublisher -->
    <!-- https://github.com/googleapis/google-api-java-client-services/tree/main/clients/google-api-services-androidpublisher/v3 -->
    <dependency>
        <groupId>com.google.apis</groupId>
        <artifactId>google-api-services-androidpublisher</artifactId>
        <version>v3-rev24-1.24.1</version>
    </dependency>
```

### 代码

```java
    // token
    String token = "kpgknnmdmalipbgdcianikfj.AO-J1OwdIz7J93mRku00ZzABfqTXAarRWt4kvbkEirR2nraZS4uybp8irxbFUXwjy9z70ctMQGXRV-0rpdVbw7UMFPmvGGy75ffH7BEdrhcIpStIBkGeIpQ";


    HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();

    JacksonFactory jsonFactory = new JacksonFactory();

    ResourceLoader resourceLoader = new DefaultResourceLoader();

    Resource resource = resourceLoader.getResource("classpath:google_pay/server-424606-4a820311c036.json");
    GoogleCredential credential = GoogleCredential.fromStream(resource.getInputStream())
            .createScoped(AndroidPublisherScopes.all());

    log.info("credential > {}", credential);

    AndroidPublisher publisher = new AndroidPublisher.Builder(httpTransport, jsonFactory, credential)
            .setApplicationName("Anzir Game Master").build();

    AndroidPublisher.Purchases.Products.Get request = publisher.purchases().products().get("com.fablefox.game_remaster", "01", token);

    log.info("request > {}", request);

    ProductPurchase purchase = request.execute();

    log.info("purchase > {}", purchase);

    System.out.println(purchase);
```


## 订阅接受

接收实体

```java
/**
 * 类用于表示从Google订阅服务接收到的消息请求。
 * 它包含消息数据和订阅的标识符。
 */
@NoArgsConstructor
@Data
public class GoogleMessageSubscriptionRequest {

    /**
     * Google消息体，包含实际的消息数据和其他元数据。
     */
    private GoogleMessage message;

    /**
     * 与消息相关的订阅标识符。
     */
    private String subscription;

    /**
     * 其他信息
     */
    private Map<String, Object> attributes;

    /**
     * MessageDTO 类封装了Google消息中的数据部分。
     */
    @NoArgsConstructor
    @Data
    public static class GoogleMessage {
        /**
         * 消息的Base64编码数据。
         */
        private String data;

        /**
         * 消息的ID，用于唯一标识消息。
         */
        private String messageId;

        /**
         * 消息的发布时间，以UNIX时间戳格式表示。
         */
        private String publishTime;
    }
}

```
解析实体

```java
{
        GoogleMessageSubscriptionRequest request = null;// 谷歌发送过来的实体
        // base64 解码
        String developerNotificationJson = new String(Base64.getDecoder().decode(request.getMessage().getData()), StandardCharsets.UTF_8);
        log.info("base64 解码 > developerNotificationJson = {}", developerNotificationJson);

        DeveloperNotification developerNotification = Serializations.json().fromJson(developerNotificationJson, DeveloperNotification.class);
        log.info("开发者通知 > developerNotification = {}", developerNotification);

}

```

通知模型
```java

package com.anzir.tc.service.provider.domain.third.google.model;


import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class DeveloperNotification {
    /**
     * 此通知的版本。最初，此值为“1.0”。此版本与其他版本字段不同。
     */
    private String version;
    /**
     * 与此通知相关的应用的软件包名称（例如“com.some.thing”）。
     */
    private String packageName;
    /**
     * 事件发生的时间戳，以从公元纪年开始计算的毫秒数表示。
     */
    private String eventTimeMillis;
    /**
     * 如果此字段存在，则此通知与订阅相关，并且此字段包含与订阅相关的其他信息。
     * 请注意，此字段与 oneTimeProductNotification、voidedPurchaseNotification 和 testNotification 互斥。
     */
    private OneTimeProductNotification oneTimeProductNotification;
    /**
     * 如果此字段存在，则此通知与一次性购买相关，并且此字段包含与购买交易相关的其他信息。
     * 请注意，此字段与 subscriptionNotification、voidedPurchaseNotification 和 testNotification 互斥。
     */
    private SubscriptionNotification subscriptionNotification;
    /**
     * 如果此字段存在，则此通知与作废的购买交易相关，并且此字段包含与作废的购买交易相关的其他信息。
     * 请注意，此字段与 oneTimeProductNotification、subscriptionNotification 和 testNotification 互斥。
     */
    private VoidedPurchaseNotification voidedPurchaseNotification;
    /**
     * 如果此字段存在，则此通知与测试发布相关。这些只通过 Google Play 管理中心发送。
     * 请注意，此字段与 oneTimeProductNotification、subscriptionNotification 和 voidedPurchaseNotification 互斥。
     */
    private TestNotification testNotification;

    @NoArgsConstructor
    @Data
    private static class OneTimeProductNotification {
        /**
         * 此通知的版本。最初，此值为“1.0”。此版本与其他版本字段不同。
         */
        private String version;
        /**
         * 通知的类型。它可以具有以下值：
         * <p>
         * (1) ONE_TIME_PRODUCT_PURCHASED - 用户成功购买了一次性商品。
         * (2) ONE_TIME_PRODUCT_CANCELED - 用户已取消待处理的一次性商品购买交易。
         */
        private int notificationType;
        /**
         * 购买时向用户设备提供的令牌。
         */
        private String purchaseToken;
        /**
         * 购买的一次性商品的商品 ID（例如“sword_001”）。
         */
        private String sku;
    }

    @NoArgsConstructor
    @Data
    private static class SubscriptionNotification {
        /**
         * 此通知的版本。最初，此值为“1.0”。此版本与其他版本字段不同。
         */
        private String version;
        /**
         * 订阅的 notificationType 可以具有以下值：
         * <p>
         * (1) SUBSCRIPTION_RECOVERED - 从账号保留状态恢复了订阅。
         * (2) SUBSCRIPTION_RENEWED - 续订了处于活动状态的订阅。
         * (3) SUBSCRIPTION_CANCELED - 自愿或非自愿地取消了订阅。如果是自愿取消，在用户取消时发送。
         * (4) SUBSCRIPTION_PURCHASED - 购买了新的订阅。
         * (5) SUBSCRIPTION_ON_HOLD - 订阅已进入账号保留状态（如果已启用）。
         * (6) SUBSCRIPTION_IN_GRACE_PERIOD - 订阅已进入宽限期（如果已启用）。
         * (7) SUBSCRIPTION_RESTARTED - 用户已通过 Play > 账号 > 订阅恢复了订阅。订阅已取消，但在用户恢复时尚未到期。如需了解详情，请参阅恢复。
         * (8) SUBSCRIPTION_PRICE_CHANGE_CONFIRMED - 用户已成功确认订阅价格变动。
         * (9) SUBSCRIPTION_DEFERRED - 订阅的续订时间点已延期。
         * (10) SUBSCRIPTION_PAUSED - 订阅已暂停。
         * (11) SUBSCRIPTION_PAUSE_SCHEDULE_CHANGED - 订阅暂停计划已更改。
         * (12) SUBSCRIPTION_REVOKED - 用户在到期时间之前已撤消订阅。
         * (13) SUBSCRIPTION_EXPIRED - 订阅已到期。
         * (20) SUBSCRIPTION_PENDING_PURCHASE_CANCELED - 订阅的待处理交易已取消。
         */
        private int notificationType;
        /**
         * 购买订阅时向用户设备提供的令牌。
         */
        private String purchaseToken;
        /**
         * 所购买订阅的商品 ID（例如“monthly001”）。
         */
        private String subscriptionId;
    }

    @NoArgsConstructor
    @Data
    private static class VoidedPurchaseNotification {
        /**
         * 与作废的购买交易关联的令牌。当有新的购买交易发生时，系统会向开发者提供此信息。
         */
        private String purchaseToken;
        /**
         * 与作废的交易关联的唯一订单 ID。对于一次性购买，此字段代表了为这笔购买交易生成的唯一订单 ID。对于自动续订型订阅，系统会为每笔续订交易生成一个新的订单 ID。
         */
        private String orderId;
        /**
         * 作废的购买交易的 productType 可以具有以下值：
         * <p>
         * (1) PRODUCT_TYPE_SUBSCRIPTION - 订阅购买交易已作废。
         * (2) PRODUCT_TYPE_ONE_TIME - 一次性购买交易已作废。
         */
        private int productType;
        /**
         * 作废的购买交易的 refundType 可以具有以下值：
         * <p>
         * (1) REFUND_TYPE_FULL_REFUND - 该购买交易已完全作废。
         * (2) REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND - 购买交易因基于数量的部分退款而被部分作废。该退款仅适用于多件购买交易。购买交易可以多次作废。
         * <p>
         * 请注意，当多件购买的剩余商品数量获得退款时，refundType 将为 REFUND_TYPE_FULL_REFUND。
         */
        private int refundType;
    }

    @NoArgsConstructor
    @Data
    private static class TestNotification {
        private String version;
    }
}

```