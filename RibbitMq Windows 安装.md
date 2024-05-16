【Windows安装RabbitMQ详细教程】

慕之寒

于 2021-12-14 21:35:27 发布

8449
 收藏 36
分类专栏： 软件安装 文章标签： rabbitmq windows java
版权

软件安装
专栏收录该内容
2 篇文章0 订阅
订阅专栏
Windows安装RabbitMQ详细教程
前言
一、RabbitMQ是什么？
二、安装步骤
1.安装准备工作
2.开始安装
3.结束安装
总结
前言
下面我将分享下RabbitMQ最新版本在Windows上的详细安装教程。
笔者在这里使用的系统环境如下：
windows系统：Windows 11 专业版 21H2
Erlang：24.1.7
RabbitMQ：3.9.11


一、RabbitMQ是什么？
  RabbitMQ 是一个由 Erlang 语言开发的 AMQP 的开源实现。  AMQP ：Advanced Message Queue，高级消息队列协议。它是应用层协议的一个开放标准，为面向消息的中间件设计，基于此协议的客户端与消息中间件可传递消息，并不受产品、开发语言等条件的限制。  RabbitMQ 最初起源于金融系统，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。

具体特点包括：

1.可靠性（Reliability）  RabbitMQ 使用一些机制来保证可靠性，如持久化、传输确认、发布确认。

2.灵活的路由（Flexible Routing）  在消息进入队列之前，通过 Exchange 来路由消息的。对于典型的路由功能，RabbitMQ已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个Exchange 绑定在一起，也通过插件机制实现自己的 Exchange 。

3.消息集群（Clustering）  多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker

4.高可用（Highly Available Queues）  队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。

5.多种协议（Multi-protocol）  RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。

6.多语言客户端（Many Clients）  RabbitMQ 几乎支持所有常用语言，比如 Java、.NET、Ruby 等等。

7.管理界面（Management UI）  RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。

8.跟踪机制（Tracing）  如果消息异常，RabbitMQ 提供了消息跟踪机制，使用者可以找出发生了什么。

9.插件机制（Plugin System）  RabbitMQ 提供了许多插件，来从多方面进行扩展，也可以编写自己的插件。



二、安装步骤
1.安装准备工作
这里通过官网下载需要的版本：RabbitMQ官方网址

进入官网向下拉，找到 Download + Installation 下载+安装，点击进入。


在新页面找到右侧，Install Windows 安装windows版本

然后页面下拉，找到 Dependencies 依赖关系

选择otp_win64_24.1.7.exe 我的系统是64位的，所以下载win64

这里笔者强调一下。我安装的是最新版本。如果你们觉得最新版可能存在未知bug或不兼容问题，可以选择自己想要下载的对应版本即可。

这里我截图一部分版本参照表，其他的可以自行查看


2.开始安装
第一步：找到我们下载的软件位置。
第二步：先安装otp_win64_24.1.7.exe

第三步：鼠标右键以管理员方式运行

第四步：接着选取要安装的路径，然后一路傻瓜式安装 next 下一步，安装即可。

【注意】不要安装在中文或带空格的文件路径下

第五步：配置系统环境变量

右键此电脑 - 属性 - 高级系统设置 - 环境变量

接着打开 - 此电脑（文件资源管理器） 找到刚刚我们安装的 erl - 24.1.7 文件 bin 目录下，复制路径 ctrl+c

切换窗口到环境变量，找到系统变量 path - 编辑

新建 - ctrl + v 粘贴刚才我们复制的路径，然后三次确定，关闭环境变量窗口

第六步：安装 RabbitMQ

右键管理员运行，然后选择安装路径，接着一路 next 下一步，遇到弹窗点允许，没有弹窗则无视。
【注意】不要安装在中文或带空格的文件路径下

第七步：安装完成后找到安装文件路径，找到 sbin 目录下，全选路径 输入 cmd

打开cmd命令窗口。



运行下面命令，回车运行。

rabbitmq-plugins enable rabbitmq_management
1

由于我已经安装过了，所以贴一张。运行成功的图片

第八步：打开任务资源管理器。win11 快捷键 Ctrl+Shift+Esc，找到rabbitmq服务右键重新启动。


3.结束安装
打开浏览器。访问 http://127.0.0.1:15672

出现管理页面：
账号：guest
密码：guest
登录成功后。进入下面页面即代表安装成功。至此大功告成。是不是很简单！

如果不小心安装到中文或带空格路径文件路径下，这个链接可以解决：
https://blog.csdn.net/leoma2012/article/details/97636859

如果想要彻底卸载RabbitMQ，则访问这个链接：
https://blog.csdn.net/qq_41463655/article/details/86747917

总结
以上就是今天要讲的内容，本文详细的介绍了RabbitMQ的安装步骤。有需要的请收藏，转发让更多的朋友知道。
------------------------------------------------
版权声明：本文为CSDN博主「慕之寒」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/tirster/article/details/121938987





RabbitMQ 默认只能用http://127.0.0.1:15672 或者 http://localhost:15672/ 登录，可以用guest帐号和guest密码登录，
用本机IP登录http://172.16.7.43:15672/登录时，用guest帐号和guest密码登录提示 User can only log in via localhost

window下面RabbitMQ登录提示User can only log in via localhost的解决方案(添加新的RabbitMQ帐号)
RabbitMQ默认只有一个guest帐号，guest帐号只能在RabbitMQ安装服务器上登录，在其它服务器用guest登录提示User can only log in via localhost。

这个情况的最佳解决办法是添加一个新的帐号
进入RabbitMQ安装目录 D:\develop_tool\RabbitMQ\rabbitmq_server-3.8.9\sbin

######第一步：添加 admin 用户并设置密码

rabbitmqctl add_user admin 123456

######第二步：添加 admin 用户为administrator角色

rabbitmqctl set_user_tags admin administrator

######第三步：设置 admin 用户的权限，指定允许访问的vhost以及write/read

rabbitmqctl set_permissions -p "/" admin ".*" ".*" ".*"

######第四步：查看vhost（/）允许哪些用户访问

rabbitmqctl list_permissions -p /

######第五步：查看用户列表

rabbitmqctl list_users

######第六步：重启RabbitMQ,然后用设置账户和密码登录。



------------------------------------------------
版权声明：本文为CSDN博主「年少~年」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_46124208/article/details/114687126



F:\mongoDB> mkdir e:\mongoDB\mdb0
F:\mongoDB> mkdir e:\mongoDB\mdb1
F:\mongoDB> mkdir e:\mongoDB\mdb2