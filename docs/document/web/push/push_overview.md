# 离线推送概述

<Toc />

即时通讯 IM 支持集成第三方消息推送服务，为开发者提供低延时、高送达、高并发、不侵犯用户个人数据的离线消息推送服务。

客户端断开连接或应用进程被关闭等原因导致用户离线时，即时通讯 IM 会通过第三方消息推送服务向该离线用户的设备推送消息通知。当用户再次上线时，服务器会将离线期间的消息发送给用户（这里角标表示的是离线消息数，并不是实际的未读消息数）。例如，当你离线时，有用户向你发送了消息，你手机的通知中心会弹出消息通知，当你再次打开 app 并登录成功，即时通讯 IM SDK 会主动拉取你不在线时的消息。

若应用在后台运行，则用户仍为在线状态，即时通讯 IM 不会向用户推送消息通知。多设备登录时，可在环信控制台的**证书管理**页面配置推送在所有设备离线或任一设备离线时发送推送消息，该配置对所有推送通道生效。

:::tip
1. 应用在后台运行或手机锁屏等情况，若客户端未断开与服务器的连接，则即时通讯 IM 不会收到离线推送通知。<br/>
2. 多端登录时若有设备被踢下线，即使接入了 IM 离线推送，也收不到离线推送消息。
:::

除了满足用户离线条件外，要使用第三方离线推送，用户还需在环信控制台配置推送证书信息，例如，对于华为推送，需配置**证书名称**和**推送密钥**，并调用客户端 Web SDK 提供的 `uploadPushToken` 方法向环信服务器上传 device token。

## Web 端可设置的功能

**环信 IM Web SDK 本身不支持离线推送，只支持对移动端离线推送进行如下配置**：

- 设置推送通知，包括推送通知方式和免打扰模式：
  - 设置 app 的推送通知；
  - 获取 app 的推送通知设置；
  - 设置会话的推送通知；
  - 获取一个或多个会话的推送通知设置；
  - 清除会话的推送通知方式的设置。
- 设置推送翻译。
- 设置推送模板。
- 设置推送扩展功能：包括强制推送和发送静默消息。

其中，**推送高级功能包括设置推送通知方式、免打扰模式和自定义推送模板**。使用前，你需要在 [环信即时通讯控制台](https://console.easemob.com/user/login)的**即时通讯 > 功能配置 > 功能配置总览**页面激活。如需关闭推送高级功能必须联系商务，因为该操作会删除所有相关配置。

![image](/images/web/push_web_enable_push.png)