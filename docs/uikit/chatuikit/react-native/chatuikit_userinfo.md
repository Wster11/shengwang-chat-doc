# 用户提供数据

<Toc />

`Chat UIKit SDK` UI 组件库数据分类主要包括：会话列表、联系人列表、群组列表、群成员列表、新请求列表和聊天页面。这些 UI 组件都需要显示头像和昵称。UI 库组件内部默认没有这些数据，而是提供了一套解决方案，由用户提供数据，UI 组件库使用提供的数据显示头像和昵称。如果用户没有提供数据，则使用默认头像和 ID。

数据提供的解决方案简称 `DataProfileProvider`, 可以实现头像和昵称的初始化、更新和获取。

从实现方式上主要分为两类：注册数据提供回调和主动更新数据。

- 注册数据提供回调：主要在应用初始化中，用户注册数据提供的回调接口，在数据需要加载时自动调用。

- 主动更新数据：主要在需要的时机 主动更新用户数据，刷新对应 UI 组件，同时这些数据也会被缓存起来，下次会直接使用。

## 注册数据提供回调

使用 `Container` 入口组件实现注册。

示例如下：

```tsx
export function App() {
  const onUsersHandler = React.useCallback(
    async (data: Map<string, DataModel>) => {
      if (data.size === 0) return data;
      const userIds = Array.from(data.keys());
      const ret = new Promise<Map<string, DataModel>>((resolve, reject) => {
        im.getUsersInfo({
          userIds: userIds,
          onResult: (res) => {
            if (res.isOk && res.value) {
              const finalUsers = [] as DataModel[];
              for (const user of res.value) {
                finalUsers.push({
                  id: user.userId,
                  type: "user",
                  name: user.userName,
                  avatar: user.avatarURL,
                  remark: user.remark,
                } as DataModel);
              }
              resolve(DataProfileProvider.toMap(finalUsers));
            } else {
              reject(data);
            }
          },
        });
      });
      return ret;
    },
    [im]
  );
  const onGroupsHandler = React.useCallback(
    async (data: Map<string, DataModel>) => {
      if (data.size === 0) return data;
      const ret = new Promise<Map<string, DataModel>>((resolve, reject) => {
        im.getJoinedGroups({
          onResult: (res) => {
            if (res.isOk && res.value) {
              const finalGroups = res.value.map<DataModel>((v) => {
                // !!! Not recommended: only for demo
                const g = v as ChatGroup;
                const avatar = g.options?.ext?.includes("http")
                  ? g.options.ext
                  : undefined;
                return {
                  id: v.groupId,
                  name: v.groupName,
                  avatar: v.groupAvatar ?? avatar,
                  type: "group",
                } as DataModel;
              });
              resolve(DataProfileProvider.toMap(finalGroups));
            } else {
              reject(data);
            }
          },
        });
      });
      return ret;
    },
    [im]
  );

  return (
    <Container
      options={{ appKey: "appKey" }}
      onGroupsHandler={onGroupsHandler}
      onUsersHandler={onUsersHandler}
    >
      {/* 添加子组件。 */}
    </Container>
  );
}
```

## 主动更新数据

和注册相比这种被动使用数据，这里还提供了主动更新数据。

通过使用 `ChatService.updateDataList` 接口实现数据更新。

示例如下：

```tsx
// 假设更新群组名称
export function SomeComponent() {
  const im = useChatContext();
  const updatedRef = React.useRef<boolean>(false);
  const updateData = React.useCallback(() => {
    if (updatedRef.current) {
      return;
    }
    updatedRef.current = true;
    im.getJoinedGroups({
      onResult: (r) => {
        if (r.value) {
          const groups: DataModel[] = [];
          r.value.forEach((conv) => {
            const avatar =
              conv.options?.ext && conv.options?.ext.includes("http")
                ? conv.options.ext
                : undefined;
            groups.push({
              id: conv.groupId,
              type: "group",
              name: conv.groupName,
              avatar: avatar,
            });
          });
          im.updateDataList({
            dataList: DataProfileProvider.toMap(groups),
            isUpdateNotExisted: true,
            dispatchHandler: (data) => {
              const items = [];
              for (const d of data) {
                const item = {
                  groupId: d[0],
                  groupName: d[1].name,
                  groupAvatar: d[1].avatar,
                } as GroupModel;
                items.push(item);
              }
              im.sendUIEvent(UIListenerType.Group, "onUpdatedListEvent", items);
              return false;
            },
          });
        }
      },
    });
  }, [im]);

  React.useEffect(() => {
    const listener: EventServiceListener = {
      onFinished: (params) => {
        if (params.event === "getAllConversations") {
          timeoutTask(500, updateData);
        }
      },
    };
    im.addListener(listener);
    return () => {
      im.removeListener(listener);
    };
  }, [im, updateData]);

  return <View>{/* 添加子组件。 */}</View>;
}
```

除此之外，还有公开的接口获取已经更新的数据。 详见 `ChatService.getDataModel`。通过这个接口可以获取指定用户的头像和昵称。方便自定义组件中使用。

## 会话列表页面和群组列表页面

这两个组件中都有群组类型的列表项，且群组有名称。因此，用户需要关注群组名称的变化通知，保证数据的一致性。

## 聊天页面

聊天页面除了使用 `DataProfileProvider` 来获取头像和昵称，还可以通过消息扩展字段携带头像和昵称，并且优先使用消息中的头像和昵称。

## 头像和昵称使用规则

- 如果用户提供了 `DataProfileProvider`，则使用该提供的数据。如果是用户数据，则使用默认头像和 ID。如果群组使用默认头像和名称。
- 如果是聊天页面，则优先使用消息中携带的头像和昵称，没有则使用 `DataProfileProvider`。
