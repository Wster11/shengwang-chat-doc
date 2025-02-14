# 修改消息

对于单聊或群组聊天会话中已经发送成功的文本消息，SDK 支持对这些消息的内容进行修改。

:::tip
1. 聊天室会话不支持消息修改功能。
2. 若使用该功能，需联系环信商务开通。
:::

## 技术原理

消息内容修改流程如下：

1. 用户调用 SDK 的 API 修改一条消息。
2. 服务端存储的该条消息，修改成功后回调给 SDK。
3. SDK 修改客户端上的该条消息。成功后，SDK 将修改后的消息回调给用户。

修改消息没有时间限制，即只要这条消息仍在服务端存储就可以修改。消息修改后，消息生命周期（在服务端的保存时间）会重新计算，例如，消息可在服务器上保存 180 天，用户在消息发送后的第 30 天（服务器上的保存时间剩余 150 天）修改了消息，修改成功后该消息还可以在服务器上保存 180 天。

对于修改后的消息，消息体中除了内容变化，还新增了修改者的用户 ID、修改时间和修改次数属性。除消息体外，该消息的其他信息（例如，消息发送方、接收方和扩展属性）均不会发生变化。

- 对于单聊会话，只有消息发送方才能对消息进行修改。
- 对于群聊会话，普通群成员只能修改自己发送的消息。群主和群管理员除了可以修改自己发送的消息，还可以修改普通群成员发送的消息。这种情况下，消息的发送方不变，消息体中的修改者的用户 ID 属性为群主或群管理员的用户 ID。


## 实现方法

你可以调用 `ChatManager#modifyMessage` 方法修改已经发送成功的消息。一条消息默认最多可修改 10 次。

示例代码如下：

```typescript
let messageBody = new TextMessageBody("new content");
ChatClient.getInstance().chatManager()?.modifyMessage(messageId, messageBody).then((result) => {
  // 消息修改成功的逻辑
})
```

消息修改后，消息的接收方会收到 `ChatMessageListener#onMessageContentChanged` 事件，该事件中会携带修改后的消息对象、最新一次修改消息的用户以及消息的最新修改时间。对于群聊会话，除了修改消息的用户，群组内的其他成员均会收到该事件。

:::tip
若通过 RESTful API 修改自定义消息，消息的接收方也通过 `ChatMessageListener#onMessageContentChanged` 事件接收修改后的自定义消息。
:::

```typescript
let listener: ChatMessageListener = {
  onMessageReceived: (messages: ChatMessage[]): void => {
    
  },
  onMessageContentChanged: (modifiedMessage: ChatMessage, operatorId: string, operationTime: number) => {
    let operationCount = modifiedMessage.getBody();
    // operatorId、operationTime也可通过以下方式来获取,数据与上述参数一致
    let id = modifiedMessage.getBody()?.operatorId();
    let time = modifiedMessage.getBody()?.operationTime();
  }
}
```



