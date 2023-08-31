## 创建推送

点击 **即时推送** 的 **创建推送** 页面，即可创建推送任务。

环信支持用户创建通知消息及透传消息。

- 通知消息：指定通知标题和内容后，由环信SDK自动处理后、在系统通知栏中以通知栏消息的形式展示，同时响铃或震动提醒用户。
- 透传消息：即自定义消息，消息体格式客户可以自己定义。透传消息环信只传递数据，不做任何处理，客户端接收到透传消息后需要自己去做后续动作处理，如通知栏展示、弹框等。

![img](@static/images/instantpush/push_notification_create.png)

### 通知消息

依次填写内容编辑、推送目标、推送设置的推送配置内容

#### 内容编辑：

- 目标平台（默认选择）：支持安卓、iOS 平台
- 通知栏标题
- 子标题：只有 iOS 支持
- 通知内容

![img](@static/images/instantpush/push_notification_edit.png)

#### 推送目标：

- 全量用户
- 指定用户：接受人以英文逗号分开，最多 1000 个接收人
- 指定标签用户：支持最多选择3个标签，支持交集运算

![img](@static/images/instantpush/push_user_certain.png)

![img](@static/images/instantpush/push_user_tagged.png)

#### 推送设置：

- 通知图标：支持环信通道
- 展开样式：支持普通样式、大文本样式、大图片样式（iOS 暂不支持）
- 后续动作：Android 支持启动应用、打开链接、打开特定页面；iOS 环信通道支持启动应用、打开链接；APNs 仅支持启动应用
- 附加字段
- 推送时段：选择立即推送或者定时推送（例如 1 个小时之后，一个月之内）
- 离线消息保留时长：离线消息保留时长设置只适用厂商通道，环信通道离线消息保留时长默认7天
- 通道策略：选择合适的推送发送策略
  - 环信通道优先，在线走环信，离线走厂商（默认策略）
  - 只通过第三方厂商推送（失败后直接丢弃）
  - 在线或者离线都通过环信通道推送
  - 厂商通道优先，失败时走环信通道
- 角标数字：该角标为环信通道角标设置
  - 厂商通道仅支持华为 EMUI4.1 以上
  - APNS 仅支持不变和设置数字
  - 选择不变时，表示不改变角标数字（小米设备由于系统控制，无论选择环信通道还是厂商通道下发，默认角标 +1 的效果）
- 提醒方式：设置提醒方式，包含提示音和震动

![img](@static/images/instantpush/push_setting.png)

另外，推送支持发送预览，Web界面会弹出推送预览界面，点击 **确认推送** 即可。

![img](@static/images/instantpush/push_preview.png)

推送完成后，在 **推送任务** 推送任务界面查看推送结果

### 透传消息

透传消息受厂商限制，仅支持环信通道。

透传消息可以进行推送目标、推送时间、附加字段的设置。

![img](@static/images/instantpush/push_transparent_message.png)

同样，透传消息支持 **发送预览** ，推送完成后，在 **推送任务** 推送任务界面查看推送结果。