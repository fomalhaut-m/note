# 三款日志收集工具

## logstash

开源界鼎鼎大名ELK stack中的"L"，社区活跃，生态圈提供大量插件支持。

logstash基于JRuby实现，可以跨平台运行在JVM上。

模块化设计，有很强的扩展性和互操作性。

## fluentd

开源社区中流行的日志收集工具，td-agent是其商业化版本，由Treasure Data公司维护，是本文选用的评测版本。

fluentd基于CRuby实现，并对性能表现关键的一些组件用C语言重新实现，整体性能不错。

fluentd设计简洁，pipeline内数据传递可靠性高。相较于logstash，其插件支持相对少一些。

## logtail

阿里云日志服务的生产者，目前在阿里集团内部机器上运行，经过3年多时间的考验，目前为阿里公有云用户提供日志收集服务。

采用C++语言实现，对稳定性、资源控制、管理等下过很大的功夫，性能良好。相比于logstash、fluentd的社区支持，logtail功能较为单一，专注日志收集功能。

# 日志文件收集场景 - 功能对比

|            功能项             |                 logstash                 |                 fluentd                  |       logtail        |
| :---------------------------: | :--------------------------------------: | :--------------------------------------: | :------------------: |
|           日志读取            |                   轮询                   |                   轮询                   |       事件触发       |
|           文件轮转            |                   支持                   |                   支持                   |         支持         |
| Failover处理 (本地checkpoint) |                   支持                   |                   支持                   |         支持         |
|         通用日志解析          |      支持grok（基于正则表达式）解析      |            支持正则表达式解析            |  支持正则表达式解析  |
|         特定日志类型          | 支持delimiter、key-value、json等主流格式 | 支持delimiter、key-value、json等主流格式 |  支持key-value格式   |
|         数据发送压缩          |                 插件支持                 |                 插件支持                 |         LZ4          |
|           数据过滤            |                   支持                   |                   支持                   |         支持         |
|        数据buffer发送         |                 插件支持                 |                 插件支持                 |         支持         |
|         发送异常处理          |                 插件支持                 |                 插件支持                 |         支持         |
|           运行环境            |          JRuby实现，依赖JVM环境          |        CRuby、C实现，依赖Ruby环境        | C++实现，无特殊要求  |
|           线程支持            |                支持多线程                |             多线程受GIL限制              |      支持多线程      |
|            热升级             |                  不支持                  |                  不支持                  |         支持         |
|        中心化配置管理         |                  不支持                  |                  不支持                  |         支持         |
|         运行状态自检          |                  不支持                  |                  不支持                  | 支持cpu/内存阈值保护 |