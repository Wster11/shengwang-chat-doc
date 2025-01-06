# 产品使用限制

<Toc />

本文介绍声网即时通讯 IM 的使用限制条件，包括调用频率、字符串大小和编码格式等。

## 消息相关

### 消息大小

对于不同的消息类型，消息长度限制如下：

| 消息类型       | 消息长度限制            |
| :------------- | :----------------------------------- |
| 文本消息       | 5 KB。                                 |
| 图片消息       | 图片不能超过 10 MB，图片消息大小限制为 5 KB。      |
| 语音消息       | 音频文件不能超过 10 MB，语音消息大小限制为 5 KB。  |
| 视频消息       | 视频文件不能超过 10 MB，视频消息大小限制为 5 KB。  |
| 文件消息       | 附件大小不能超过 10 MB，文件消息大小限制为 5 KB。  |
| 透传消息       | 5 KB。                                 |
| 自定义消息     | 5 KB。                                 |
| 合并消息       | 5 KB。                                 |
| 定向消息       | 5 KB。                                 |

:::tip
默认情况下，消息附件，例如图片、音频、视频和其他文件不能超过 10 MB，存储天数详见[消息存储](#消息存储)。
:::

### 消息存储

- **历史消息**：在服务器上的存储时间与你订阅的套餐包有关，详见[产品价格](/product/pricing.html#套餐包功能详情)。
- **聊天记录文件**：可从服务端获取用户的聊天记录文件。
  - 单次请求获取从指定起始时间开始一小时内的发送的聊天记录文件。
  - 你最多可以获取最近 3 天的聊天记录。若要提升该限制，你需要联系声网商务。
  - 查询历史消息记录时存在一定延时，无法实时获取。
- **消息附件/文件**：默认情况下，消息附件，例如图片、音频、视频和其他文件可存储 7 天。若要提升其中一个上限，请联系商务。消息附件的大小及存储时间限制与群组共享文件的相同。如果消息附件的其中一个限制进行了上调，群组共享文件的对应限制也会随之自动调整，反之亦然。
- **离线消息**：对于单聊和群聊，离线消息默认保存 7 天。对于每个终端用户，所有的单聊会话可存储 500 条离线消息，所有的群聊会话可存储 200 条离线消息。若超过存储天数和条数的上限，最新的离线消息会挤掉最早的。如需提升上限，可联系声网商务。
- **各类事件通知**：事件通知的存储时间与消息的存储一致。


### 消息撤回

默认情况下，发送方可撤回发出 2 分钟内的消息。你可以在[声网控制台](https://console.shengwang.cn/overview)的**功能配置** > **总览** > **消息功能配置**页面设置消息撤回时长，该时长不超过 7 天。

:::tip
除了透传消息，其他各类型的消息都支持撤回。
:::

### 消息回执

- 单聊会话支持消息送达回执、会话已读回执和消息已读回执。
- 群聊会话只支持消息已读回执。

群消息已读回执特性的使用限制如下表所示：

| 使用限制| 默认 | 描述 | 
| :--------- | :----- | :------- | 
| 功能开通   | 关闭   | 若要使用该功能，你需要在[声网控制台](https://console.shengwang.cn/overview)的 **功能配置** > **总览**> 页签下，搜索找到 **消息已读回执（群聊）** 开通功能。具体费用详见[产品价格](/product/pricing.html#增值服务费用)。   | 
| 使用权限  | 所有群成员    | 默认情况下，所有群成员发送消息时可要求已读回执。如果仅需群主和群管理员发消息时要求已读回执，可联系商务修改。   | 
| 已读回执有效期    | 3 天    | 群聊已读回执的有效期为 3 天，即群组中的消息发送时间超过 3 天，服务器不记录阅读该条消息的群组成员，也不会发送已读回执。   | 
| 群规模    |  200 人   | 该特性最大支持 200 人的群组。如果超过 200 人/群，群成员发送的消息不会返回已读回执。你可以联系商务提升群成员人数上限。 | 
| 查看返回已读回执数量    | 消息发送方 | 对消息返回的已读回执数量（或返回已读回执的人数），默认仅消息发送方可查看。如需所有群成员均可查看，可联系商务开通。 | 

### 修改消息

- 只能修改单聊或群组聊天会话中已经发送成功的文本消息。
- 聊天室会话不支持消息修改功能。
- 一条消息默认最多可修改 10 次。

### 转发消息

合并转发支持嵌套，最多支持 10 层嵌套，每层最多 300 条消息。

### 定向消息

- 适用于群组或聊天室会话。
- 最多可向 20 个成员发送定向消息。
- 适用于文本消息、图片消息和音视频消息等全类型消息。
- 对于单聊会话，只有消息发送方才能对消息进行修改。
- 对于群聊会话，普通群成员只能修改自己发送的消息。群主和群管理员除了可以修改自己发送的消息，还可以修改普通群成员发送的消息。

### 聊天室全局广播消息

你可以[调用 REST API 发送聊天室全局广播消息](/document/server-side/message_chatroom.html#发送聊天室全局广播消息)。该功能默认关闭，如果需要，请联系声网商务开通。

### 置顶消息

- 该功能只支持群组和聊天室会话，不支持单聊。
- 单个会话默认可置顶 20 条消息。你可以联系声网商务提升该上限，最大可调整至 100。

### 消息仅投递在线用户

该功能只支持单聊和群组聊天，不支持聊天室。

### 消息表情回复

- 一个消息表情即为一个 Reaction，若不同用户重复添加同一消息表情，Reaction 数量计为 1。
- 对于同一条 Reaction，一个用户只能添加一次，重复添加会报错误 1301。
- 每条消息默认可添加 20 个 Reaction，若需提升该上限，需联系声网商务。
- 创建 Reaction 时，设置的表情 ID 长度不能超过 128 个字符，对支持的字符集类型没有限制，但服务端与客户端的设置必须保持一致。若使用特殊字符，获取和删除 Reaction 时需对特殊字符进行 URL 编码。

### 获取消息流量统计

- SDK 只支持统计该功能开启后最近 30 天内发送和接收的消息。
- 仅 Android and iOS 端 SDK 支持该功能。

### 消息举报

举报消息的原因不能超过 512 字节。

## 会话

### 会话列表

对于每个终端用户，服务器默认存储 100 条会话。若提升该上限，需联系声网商务。如果你的会话条数超过了上限，新会话会覆盖之前的不活跃会话。

### 置顶会话

你最多可以置顶 50 个会话。

### 会话标记

- 支持对单聊和群组会话添加标记，不支持为聊天室聊天添加会话标记。
- 一个会话最多可添加 20 个标记。
- 每次最多可为 20 个会话添加标记。
- 每次最多可移除 20 个会话的同一标记。

## 群组

### 群组/群成员数量

- 群组总数、单个群的成员数和用户可加入的群组数取决于套餐版本，详见[套餐包功能详情](pricing.html#套餐包功能详情)。
- 对于单个群组，群主加管理员数量不能超过 100，即管理员最多可添加 99 个。
- 群组按照规模，可以分为普通群和大型群：
  - 普通群：群成员总数不超过 3000 人。
  - 大型群：群成员总数超过 3000 人。大型群不支持离线推送。如需默认创建大型群，请联系声网商务。

### 群组/群成员属性

- 群组名称，字符串类型，最大长度为 128 字符。
- 群组描述，字符串类型，最大长度为 512 字符。
- 群公告的长度限制为 512 个字符。
- 群组扩展信息，例如可以给群组添加业务相关的标记，最大长度为 8 KB。
- 单个群成员的自定义属性（key-value）总长度不能超过 4 KB。对于单个自定义属性，属性 key 不能超过 16 字节，value 不能超过 512 个字节。

### 群组共享文件

- 单个群组共享文件大小上限默认 10 MB。如果需要提升限制，请联系商务。
  该限制与消息附件的相同。如果消息附件的长度进行了上调，群组共享文件大小也会随之自动调整，反之亦然。
- 单个群组最多上传 10,000 个共享文件。
- 群组共享文件在服务器的存储时间与消息附件相同，即默认为 7 天。如果需要提升限制，请联系声网商务。
  如果消息附件在服务器上的存储时间进行了上调，群组共享文件的存储时间也会随之自动调整，反之亦然。

### 子区

- 单个 app 下的子区总数默认为 10 万，如需调整请联系声网商务。
- 子区名称，不能超过 64 个字符。

## 聊天室

不同套餐版本支持的聊天室总数，详见[套餐包功能详情](pricing.html#套餐包功能详情)。

### 聊天室成员

- 聊天室成员数上限（包括聊天室所有者）默认最大值为 10,000，如需调整请联系商务。
- 聊天室创建者和管理员的数量之和不能超过 100，即管理员最多可添加 99 个。
- 聊天室中的成员（除了聊天室白名单中的成员）离线超过 2 分钟会自动退出聊天室。

### 聊天室基本属性

- 聊天室名称，字符串类型，最大长度为 128 字符。
- 聊天室描述，字符串类型，最大长度为 512 字符。
- 聊天室公告，字符串类型，最大长度为 512 字符。
- 聊天室扩展信息不能超过 8 KB。

### 聊天室自定义属性（key-value）

每个聊天室最多支持 100 个自定义属性，每个应用的聊天室自定义属性总大小不超过 10 GB。

聊天室自定义属性为键值对（key-value）结构，单个 key 不能超过 128 个字符，支持以下字符集：
- 26 个小写英文字母 a-z；
- 26 个大写英文字母 A-Z；
- 10 个数字 0-9；
- “_”, “-”, “.”。

每个聊天室属性 value 不能超过 4096 个字符。

## 用户相关

### 用户注册

- 用户 ID：长度不能超过 64 字节，支持以下字符集：
  - 26 个小写英文字母 a-z；
  - 26 个大写英文字母 A-Z；
  - 10 个数字 0-9；
  - “_”, “-”, “.”。

:::tip
- 该参数不区分大小写，因此 Aa 和 aa 为相同用户名。
- 请确保同一个 app 下，用户 ID 唯一。
- 用户 ID 是会公开的信息，请勿使用 UUID、邮箱地址、手机号等敏感信息。
:::

- 密码：用户的登录密码，长度不可超过 64 个字符。

### 用户属性

- 默认单个用户的属性总长不得超过 2 KB。
- 默认单个 app 下所有用户的属性总长度不得超过 10 GB。

### 用户关系

- 单个 App Key 下的每个用户的好友数量上限与套餐包版本相关，详见[套餐包功能详情](/product/pricing.html#套餐包功能详情)。
- 好友备注的长度不能超过 100 个字符。
- 每个用户的黑名单最多可存 500 个用户。

### 在线状态订阅

- 订阅时长最长为 30 天，过期需重新订阅。如果未过期的情况下重复订阅，新设置的有效期会覆盖之前的有效期。
- 每次调用接口最多只能订阅 100 个账号，若数量较大需多次调用。
- 每个用户 ID 订阅的用户数不超过 3000。如果超过 3000，后续订阅也会成功，但默认会将订阅剩余时长较短的替代。
- 每个用户最多可被 3000 个用户订阅。

## 离线推送

### 推送昵称

离线推送时在接收方的客户端推送通知栏中显示的发送方的昵称支持自定义，长度不能超过 100 个字符，支持以下字符集：  
- 26 个小写英文字母 a-z；
- 26 个大写英文字母 A-Z；
- 10 个数字 0-9；
- 中文；
- 特殊字符。

### 推送模板名称

- 添加默认的推送模板时，模板名称应设置为 `default`。
- 自定义模板的名称最多可包含 64 个字符，支持以下字符集：
  - 26 个小写英文字母 a-z；
  - 26 个大写英文字母 A-Z；
  - 10 个数字 0-9。    

### 多设备登录

- 多端登录时，即时通讯 IM 每端默认最多支持 4 个设备同时在线。如需提升上限，可联系声网商务。

- 自定义设置登录设备的平台时，设备平台的取值范围为 [1,100]，设备数量的取值范围为 [0,4]。

## 调用频率限制

关于 RESTful API 的调用频率限制，详见 [RESTful API 调用频率限制](limitationapi.html)。
