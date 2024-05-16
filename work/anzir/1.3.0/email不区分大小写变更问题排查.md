# 关于登录时，邮箱不区分大小写改动影响分析

## 1.发现问题
1. 排查发现, 不区分大小写重复email

Stephanieliebert1926@gmail.com  94
stephanieliebert1926@gmail.com 	1226838628542451712
Spdorning@gmail.com 1226838534774591488
spdorning@gmail.com 1226920035570683904
Prestontrolson@yahoo.com 1219480227550334976
prestontrolson@yahoo.com 1223351835922796544
isabellepnock@gmail.com 1225870434545700864
Isabellepnock@gmail.com 1226837808954478592

## 2. 排查问题:

> 问题在于, 不区分大小写账号重复都登录使用过,如何判断谁可以删除;

1. 邮箱: 新注册的, 修改的, 都自动转为全部小写
2. 删除邮箱相关 账号

3. 大小写重复邮箱，以及登录信息：
    - Stephanieliebert1926@gmail.com  94                    无登录
    - stephanieliebert1926@gmail.com 	1226838628542451712   无登录
    - Spdorning@gmail.com             1226838534774591488   有登录 web端官网      
    - spdorning@gmail.com             1226920035570683904   有登录 gm-android端、 player-android端
    - Prestontrolson@yahoo.com        1219480227550334976   无登录
    - prestontrolson@yahoo.com        1223351835922796544   有登录 gm-android端、 player-android端
    - isabellepnock@gmail.com         1225870434545700864   有登录 gm-ios端、     player-ios端
    - Isabellepnock@gmail.com         1226837808954478592   有登录 web端创作平台

  - 无登录过的想通邮箱，选取大写的邮箱可以直接删除(最好可以和用户沟通一下)：
    - Stephanieliebert1926@gmail.com  94                    无登录
    - Prestontrolson@yahoo.com        1219480227550334976   无登录

  - 登录过的并且无法排除，需要联系用户确定删除一个：
  
    - isabellepnock@gmail.com         1225870434545700864   有登录 gm-ios端、     player-ios端
    - Isabellepnock@gmail.com         1226837808954478592   有登录 web端创作平台
    
    - Spdorning@gmail.com             1226838534774591488   有登录 web端官网      
    - spdorning@gmail.com             1226920035570683904   有登录 gm-android端、 player-android端

4. 沟通后, 删除确定的账号:
  保留:
    isabellepnock@gmail.com
    spdorning@gmail.com

## 3. 处理

1. 代码处理
登录, 注册, 发送验证码, 都会将email转为小写进行处理

2. 特殊账号处理
   
   根据调查结果, 删除指定的账号; [4.沟通后, 删除确定的账号]

3. 统一账号数据处理
使用脚本将现有的email刷为 小写
脚本如下
```js
db.t_anzir_account.updateMany(
  {},  // 过滤条件，空表示匹配所有文档
  [{
    $set: {
      email: { $toLower: "$email" }  // 将email字段的值转换为小写
    }
  }]
);
```
