# 单群聊 UIKit 通用特性

本文介绍单群聊 UIKit 通用特性，包括会话列表、聊天、群组和联系人等相关功能。

<Toc />

## 会话列表

会话列表呈现了用户所有正在进行的对话，帮助用户快速找到所需联系人并查看消息进展。

<ImageGallery>
  <ImageItem src="/images/uikit/chatuikit/ios/main_conversation_list.png" title="会话列表" />
</ImageGallery>

## 聊天	

聊天是即时通讯的核心功能之一，它允许用户与其他用户进行实时文字交流。聊天通常以会话的形式进行，每个会话由两个或多个用户组成。

<ImageGallery>
  <ImageItem src="/images/uikit/chatuikit/ios/main_chat.png" title="聊天页面" />
</ImageGallery>

## 创建会话

创建会话是即时通讯的核心功能之一，它允许用户启动与一个或多个其他用户交流。

![img](/images/uikit/chatuikit/feature/common/conversation_create.png)

## 创建群组	

群组是允许多个用户加入的聊天会话。用户可以邀请其他用户加入群组，并对群组进行管理。

![img](/images/uikit/chatuikit/feature/common/group_create.png)

## 群组管理员	

群组管理员拥有对群组的所有权限，包括：添加或删除群成员，修改群组名称、描述和头像，禁言或踢出群成员等。

![img](/images/uikit/chatuikit/feature/common/group_admin.png) 

## 用户列表	

用户列表显示了用户的所有联系人，包括联系人列表，群成员列表和黑名单等。用户可以通过用户列表快速找到需要联系的人。

<ImageGallery>
  <ImageItem src="/images/uikit/chatuikit/ios/main_contact_list.png" title="用户列表" />
</ImageGallery>

## 文件共享	

文件共享允许用户通过即时通讯应用发送和接收文件。文件共享可以用于分享文档、图片、视频等文件。

![img](/images/uikit/chatuikit/feature/common/file_share.png =600x630) 

## 未读消息数	

未读消息数是指用户收到的但尚未查看的消息数量。

![img](/images/uikit/chatuikit/feature/common/message_unread_count.png =600x630) 

## 已发送回执	

已发送回执用于告知消息发送者，其发送的消息已经成功发送到服务器、接收方以及发送失败。

![img](/images/uikit/chatuikit/feature/common/message_delivery_receipt.png) 

## 已读回执

已读回执用于告知消息发送者，接收者已经阅读了其发送的消息。

![img](/images/uikit/chatuikit/feature/common/message_read_receipt.png =300x630) 

## 联系人名片	

联系人名片指包含联系人详细信息的电子卡片，通常包括头像和昵称等信息。通过联系人名片，用户可以快速添加联系人或开始会话。

![img](/images/uikit/chatuikit/feature/common/contact_namecard.png) 

## 语音消息

语音消息指以语音形式发送和接收的消息，可替代文字交流。

![img](/images/uikit/chatuikit/feature/common/message_audio.png =700x730) 

## 消息审核

消息审核对用户发送的消息内容进行审查，判断其是否符合平台的社区准则、服务条款和相关法律法规。

![img](/images/uikit/chatuikit/feature/common/message_report.png =300x630) 

## 本地消息搜索

本地消息搜索功能允许用户快速在会话内搜索历史消息内容，支持关键词匹配。该功能帮助用户高效找到所需信息，提高工作效率和信息管理的便捷性。

在消息搜索页面，输入关键字搜索当前会话的历史消息，如果有结果会以列表的形式返回，点击搜索结果可以跳转到该消息的位置。

![img](/images/uikit/chatuikit/feature/common/message_search.png) 

## 群组 @ 提及

群组 @ 提及功能使用户能在群聊中通过 @ 符号直接提及特定成员，被提及者将收到特别通知。该功能便于高效传递重要信息，确保关键消息得到及时关注和回应。

![img](/images/uikit/chatuikit/feature/common/group_@.png) 

