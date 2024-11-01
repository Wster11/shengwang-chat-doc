# 群组概述

<Toc />

## 群组基本介绍

群组是支持多人沟通的即时通讯系统，成员关系相对稳定。所有群成员可以收到群中的消息，可以在群中发送消息。群成员离线时可以收到推送消息。群组成员支持多种角色：群主、群管理员和普通成员。群组提供丰富的管理能力，如群组禁言、群公告和群文件等。

### 群组分类

群组按照是否对用户公开，可以分为公开群和私有群。

| 群组分类 | 加群方式   |  获取群组信息       |
| :------- | :---------- | :---------- | 
| 公开群   | 任何用户可以搜索到该群，可申请加入群或者被管理员和群主邀请入群。任何用户均可申请入群，是否需要群主和群管理员审批，取决于群组的设置，例如 Android 为 `EMGroupStyle` 参数。 | - 对于群组详情和公开群列表，用户即使不加入群也能获取。<br/> - 对于群公告和群共享文件列表，用户只有加入群时才能获取。 |
| 私有群   | 群外用户不能搜索到此类群组，需要被邀请才能入群。除了群主和群管理员，群成员是否也能邀请其他用户进群取决于群组的设置，例如 Android 为 `EMGroupStyle` 参数。 | 用户只有加入群后才能获取群详情、群公告、群共享文件列表、和群成员列表等群组信息。   |

### 群组成员角色  

| 群成员角色<div style="width: 100px;"></div> | 描述<div style="width: 384px;"></div> | 管理权限 |
| :------ | :-------------- | :------------ |
| 普通成员   | 不具备管理权限的普通成员。 | 普通成员可以：<br/> - 在群组内发送和接收消息；<br/> - 获取群公告；<br/> - 上传、下载、删除、以及从服务器获取共享文件；<br/> - 获取群组列表；<br/> - 获取群成员列表；<br/> - 获取群组详情；<br/> - 查询自己已加入的群组数量；<br/> - 退出群组；<br/> - 屏蔽和解除屏蔽群消息；<br/> - 设置自己的自定义属性（key-value）；<br/> - 获取群管理员列表；<br/> - 创建和加入子区；<br/> - 获取子区详情，不论是否加入了群组中的子区；<br/> - 获取已加入和创建的子区；<br/> - 获取子区成员列表，不论是否加入了群组中的子区；<br/> - 退出子区；<br/> - 在所属子区中发送消息。<br/> - 批量获取子区中的最新一条消息。|
| 群管理员   | 由群主指定，协助群主进行管理，拥有一定的管理权限。 | 除了普通成员的权限，管理员还具备以下权限：<br/> - 修改群组名称和群组描述；<br/> - 更新群公告；<br/> - 审批是否允许用户加入群组；<br/> - 修改群组名称和群组描述信息；<br/> - 更新群公告；<br/> - 更新群扩展字段；<br/> - 邀请用户加入群组；<br/> - 将群成员被移出群组；<br/> - 管理群组白名单；<br/> - 管理群组黑名单；<br/> - 管理群组禁言列表；<br/> - 开启和关闭群组全员禁言；<br/> - 修改子区名称；<br/> - 将子区中的成员移出子区；<br/> - 解散群组中的子区。 |
| 群主       | 群组的创建者默认成为群主，在群中拥有最高权限。 | 除了管理员权限，群主还具备以下权限：<br/> - 添加和移除管理员；<br/> - 解散群组；<br/> - 将群主权限转移给群组中的其他成员。 |

### 群组与聊天室的区别

群组和聊天室均为支持多人沟通的即时通讯系统。两者的区别在于，群组中的成员会有固定的强的关系，成员加入后会长时间在群组中。聊天室中的成员没有固定关系，类似于一个开放的空间，大家可以自由加入，离开即退出聊天室。以下为功能对比：

| 功能<div style="width: 100px;"></div> | 群组<div style="width: 300px;"></div> | 聊天室 |
| :----------- | :------------------- | :--------------------- |
| 使用场景     | 类似于 Signal，Skype 里的群聊，所有加入的用户拥有固定的关系。  | 类似 Twitch 的直播间，成员间没有固定关系，离开即退出。     |
| 创建方式 | 所有 app 用户都可以创建群组。   | 仅 [超级管理员](/document/server-side/chatroom.html#管理超级管理员) 有权限创建聊天室。  |
| 类型 | 分为公开群和私有群，创建群组时可设置入群是否需获得群主和群管理员的同意，支持不同使用场景。 | 没有公开和私有之分，所有用户均可自由加入或退出。      |
| 最大成员数   | 成员数支持取决于所选择的版本，最高版本默认支持 8,000 人。如需提升该上限，请联系商务。| 成员数支持取决于所选择的版本，最高版本默认支持 10,000 人。如需提升该上限，请联系商务。 |
| 离线消息存储 | 支持离线消息存储。用户离线时，服务器会先保存发送给这些用户的消息，等待这些用户上线时发送。对于单个终端用户，服务器对每个群最多可保存 200 条离线消息。<Container type="tip" title="提示">对于超过 3000 人的群组，若希望提供离线推送功能，你必须在创建群组之前联系商务开通，否则群组创建后无法再开通该功能。</Container>  | 不支持离线消息存储。离线时，不会收到推送通知和消息；成员（除聊天室白名单中的成员）离线超过 2 分钟会自动退出聊天室。        |
| 漫游消息/历史消息记录存储 | 支持漫游消息和历史记录的存储。服务器存储漫游消息和历史消息记录的时间取决于你订阅的 IM 套餐包，详见[产品价格](/product/pricing.html#套餐包功能详情)。<br/> - 你可以[调用 REST API 接口从服务端获取历史消息记录 JSON 文件](/document/server-side/message_historical.html)。<br/> - 你还可以[调用客户端接口从服务端获取指定会话的漫游消息](/document/android/message_retrieve.html#从服务器获取指定会话的消息)，在多设备间同步。 | 支持漫游消息和历史记录的存储。服务器存储漫游消息和历史消息记录的时间取决于你订阅的 IM 套餐包，详见[产品价格](/product/pricing.html#套餐包功能详情)。<br/> - 你可以[调用 REST API 接口从服务端获取历史消息记录 JSON 文件](/document/server-side/message_historical.html)。<br/> - 你还可以[调用客户端接口从服务端获取指定会话的漫游消息](/document/android/message_retrieve.html#从服务器获取指定会话的消息)，在多设备间同步。<br/> - 如果需要用户新加入聊天室时服务器发送最近的漫游消息，可以联系商务开通，每个会话默认支持 10 条消息，最多可调整至 200 条。|
| 消息可靠性   | 群组中发送的所有消息，用户都会收到。 | 当消息量大时，聊天室中超过阈值的消息会被丢弃。消息开始丢弃的阈值为每秒 100 条消息，可以根据需求进行调整。 |

## 群组功能

群组功能主要分为群组的创建和管理，群成员管理，以及群属性管理。

### 创建和管理群组

| 功能               | 描述  |
| :----------------- | :---------------------- |
| 创建群组           | 任何用户都可以创建群组。群组创建者为群主。群组创建时可以指定群组名称、头像、描述，是否是公开群、要加入群组的用户列表、是否需要审批、普通成员是否能邀请新用户加入群组，以及群扩展信息等。群组数量和群成员数量根据套餐版本有所不同，详见 [环信即时通讯 IM 价格](https://www.easemob.com/pricing/im)。 |
| 解散群组           | 只有群主才能解散群组。群组一旦解散，所有本地群组数据都会被删除，所有群成员都被强制退出群。 |
| 封禁/解禁群组           | - 可调用 REST API 封禁指定的群组。例如，群成员经常在群中发送违规消息，可以调用该 API 对该群进行封禁。群组被封禁后，群中任何成员均无法在群组以及该群组下的子区中发送和接收消息，也无法进行群组和子区管理操作。<br/> - 可调用 REST API 解除对指定群组的封禁。群组解禁后，群成员可以在该群组以及该群组下的子区中发送和接收消息并进行群组和子区管理相关操作。|
| 屏蔽和解除屏蔽群消息   | 所有群组成员都可以屏蔽和取消屏蔽群组消息。用户屏蔽群组消息后，他们将不再收到来自指定群组的消息。 |

### 查询群组信息

| 功能               | 描述  |
| :----------------- | :---------------------- |
| 获取群组详情     | - 群成员可以从内存获取群组详情。返回的结果包括群组 ID、群组名称、群组描述、群组基本属性、群主、群组管理员列表，默认不包含群成员。<br/> - 群成员可从服务器获取群组详情。返回的结果包括群组 ID、群组名称、群组描述、群组基本属性、群主、群组管理员列表、是否已屏蔽群组消息以及群组是否禁用等信息。另外，可通过参数设置是否获取群成员列表，默认最多包括 200 个成员。<br/> - 对于公有群，用户即使不加入群也能获取群组详情，而对于私有群，用户只有加入了群组才能获取群详情。 |
| 修改群组详情     | 修改群组详情，例如群组名称、群组描述和扩展信息。 |
| 获取群成员列表     | 所有群组用户都可以从服务器获取群组成员的分页列表。群成员按加入群组时的时间戳降序显示。 |
| 获取 app 中的群组列表 | 可调用 REST API 分页获取应用下的群组的信息。 |
| 获取群组列表       | 用户可以获取公开群列表和自己创建或加入的群组列表。 |
| 查询当前用户已加入的群组数量  | 用户可以从服务器获取当前用户已加入的群组数量。 |
| 获取单个用户加入的所有群组  | 可调用 REST API 根据用户 ID 分页获取指定用户加入的所有群组。 |
| 查看指定用户是否已加入群组  | 可调用 REST API 查看单个用户是否已加入了指定的群组。 |

:::tip
环信即时通讯 IM 支持用户登录多个设备，用户在一台设备上进行的群组操作，会在其他设备上收到这些操作对应的通知。
:::

### 群属性管理

| 功能             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| 修改群组信息 | 群主和群管理员可以修改群名称、群组描述和扩展字段。 |
| 修改/获取群公告 | 群主和群管理员可以设置和更新群公告，群成员可以获取群公告。   |
| 管理共享文件     | 群主和群管理员可以上传文件并删除所有群共享文件，群成员只能删除自己上传的文件。所有群成员均可以下载群组的共享文件以及从服务器获取共享文件列表。|

### 群组扩展字段

用户创建群组时可以设置群组扩展字段，群组扩展字段支持 JSON 格式的数据，用于自定义更多群组信息。群扩展字段的长度限制为 8 KB。

不过，仅群主和群管理员可以更新群扩展字段：

- 对于 Web 端，可以[调用修改群组信息的接口](/document/web/group_attributes.html#修改群组信息)更新群组扩展字段。
- 除 Web 端外，Android、iOS、Web 等其它各端可[调用单独的更新群组扩展字段的接口](/document/android/group_attributes.html#更新群扩展字段)修改群扩展字段。

### 群成员管理

| 功能                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| 加入群组              | 公开群和私有群中，群主和管理员均可以邀请用户加入群。<br/>支持需要用户确认后，再加入群。此外用户也可以申请加入公开群。|
| 退出群组              | 群主不支持退群操作，只能解散群。退出群组分为主动退群和被动退群。被动退群即为被群主或群管理员踢出群。         |
| 变更群主               | 群主可以将群组的所有权转让给指定的组成员。所有权转移后，群主成为普通群成员。 |
| 添加/移除/获取群管理员 | 群主可以添加成员到群组管理员列表，将管理员移出该列表。所有群成员均可获取群组下的管理员列表。 |
| 群组白名单             | 群主和管理员可以将群成员加入或移出白名单。白名单中的群成员可以在全员禁言状态下发送群消息。仅群主和群管理员可以获取群组白名单列表。 |
| 群组黑名单             | 群主和群管理员可以将群成员加入或移出黑名单，黑名单中的成员将被移出群且无法再次加入群。仅群主和群管理员可以获取群组白名单列表。 |
| 群组禁言               | - 群主和管理员可以将群成员加入或移出禁言列表，禁言列表中的成员无法发送群消息，但可以接收群消息。<br/> - 仅群主和群管理员可以获取群组禁言列表。<br/> - 群主和管理员可以开启或关闭全员禁言。开启全员禁言后，仅群组、管理员和白名单中的成员可以发送群消息。|
| 管理群成员的自定义属性 | 支持设置群成员自定义属性和获取单个群成员的自定义属性。群主可修改所有群成员的自定义属性，其他群成员只能修改自己的自定义属性。 |

### 群成员的扩展字段

设置群成员的扩展字段即设置群成员的自定义属性，例如在群组中的昵称和头像等。自定义属性为 key-value 格式，key 表示属性名称，value 表示属性值，若 value 设置为空字符串即删除该自定义属性。

- 单个群成员的自定义属性总长度不能超过 4 KB。对于单个自定义属性，属性 key 不能超过 16 字节，value 不能超过 512 个字节，否则会报错。
- 群主可修改所有群成员的自定义属性，其他群成员只能修改自己的自定义属性。

## 监听群组事件

你可以实现群组事件监听，群组内进行了相关操作，例如，有新成员入群、退群、被添加到禁言列表、黑名单列表等，群组中的其他人员会收到相关事件，详见[监听群组事件](/document/android/group_manage.html#监听群组事件)。

## 群组事件回调

你可以实现发送后回调，使环信 IM 服务器将群组事件同步给你的应用服务器。若群组内发生新成员入群、退群、被添加到禁言列表、黑名单列表等相关操作时，环信 IM 服务器向应用服务器发起 HTTP/HTTPS POST 请求，同步所发生的事件，详见[群组事件回调文档](/document/server-side/callback_configurations.html#群聊)。

## 群组限制

- 群组相关限制，包括群成员数量、群组/群成员属性以及群组共享文件的相关限制，详见[群组限制](/product/limitation.html#群组)文档。
- 群成员的数量根据不同的套餐版本而不同，详见[产品价格](/product/pricing.html#套餐包功能详情)。




