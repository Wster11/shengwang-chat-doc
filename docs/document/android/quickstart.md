# 快速开始

<Toc />

本文介绍如何快速集成环信即时通讯 IM Android SDK 实现单聊。

## 实现原理

下图展示在客户端发送和接收一对一文本消息的工作流程。

![img](/images/android/sendandreceivemsg.png)

## 前提条件

- Android Studio 3.0 或以上版本；
- Android SDK API 等级 21 或以上；
- Android 5.0 或以上版本的设备；
- 有效的环信即时通讯 IM 开发者账号和 App key，见 [环信即时通讯云控制台](https://console.easemob.com/user/login)。

## 准备开发环境

本节介绍如何创建项目，将环信即时通讯 IM Android SDK 集成到你的项目中，并添加相应的设备权限。

### 1. 创建 Android 项目

参考以下步骤创建一个 Android 项目。

1. 打开 Android Studio，点击 **Start a new Android Studio project**。
2. 在 **Select a Project Template** 界面，选择 **Phone and Tablet > Empty Activity**，然后点击 **Next**。
3. 在 **Configure Your Project** 界面，依次填入以下内容：
   - **Name**：你的 Android 项目名称，如 HelloWorld。
   - **Package name**：你的项目包的名称，如 com.hyphenate.helloworld。
   - **Save location**：项目的存储路径。
   - **Language**：项目的编程语言，如 Java。
   - **Minimum API level**：项目的最低 API 等级。

然后点击 **Finish**。根据屏幕提示，安装所需插件。

上述步骤使用 **Android Studio 3.6.2** 示例。你也可以直接参考 Android Studio 官网文档 [创建首个应用](https://developer.android.com/training/basics/firstapp)。

### 2. 集成 SDK

选择如下任意一种方式将环信即时通讯 IM SDK 集成到你的项目中。

:::notice

- 以下集成方式只需选择一种，同时使用多种集成方式可能会报错。
- 请点击查看[发版说明](releasenote.html)获得最新版本号。
  :::

#### 方法一：使用 mavenCentral 自动集成

该方法仅适用于 v3.8.2 或以上版本。

1. 在项目的 `build.gradle` 中添加 `mavenCentral()`仓库。

```gradle
buildscript {
    repositories {
        ...
        mavenCentral()
    }
    ...
}

allprojects {
    repositories {
        ...
        mavenCentral()
    }
}
```

2. 在 `module` 的 `build.gradle` 中添加如下依赖：

```gradle
...
dependencies {
    ...
    // x.y.z 请填写具体版本号，如：4.5.0。
    // 可通过 SDK 发版说明获得最新版本号。
    implementation 'io.hyphenate:hyphenate-chat:x.x.x'
}
```

获取最新 SDK 的版本号：[SDK 更新日志](releasenote.html)

:::notice
如果使用 3.8.0 之前的版本，gradle 依赖需要按照下面格式添加：
:::

```gradle
implementation 'io.hyphenate:hyphenate-sdk:3.7.5' // 完整版本，包含音视频功能

implementation 'io.hyphenate:hyphenate-sdk-lite:3.7.5' // 精简版，只包含IM功能
```

#### 方法二：手动复制 SDK 文件

打开 [SDK 下载](https://www.easemob.com/download/im)页面，获取最新版的环信即时通讯 IM Android SDK，然后解压。

![img](/images/android/sdk-files.png)

将 SDK 包内 libs 路径下的如下文件，拷贝到你的项目路径下：

| 文件或文件夹         | 项目路径               |
| :------------------- | :--------------------- |
| hyphenatechat_xxx.jar 文件 | /app/libs/             |
| arm64-v8a 文件夹     | /app/src/main/jniLibs/ |
| armeabi-v7a 文件夹   | /app/src/main/jniLibs/ |
| x86 文件夹           | /app/src/main/jniLibs/ |
| x86_64 文件夹        | /app/src/main/jniLibs/ |

如果对生成的 `apk` 大小比较敏感，我们建议使用 `jar` 方式，并且手工拷贝 `so`，而不是使用 `Aar`，因为 `Aar` 方式会把各个平台的 `so` 文件都包含在其中。采用 `jar` 方式，可以仅保留一个 `ARCH` 目录，建议仅保留 `armeabi-v7a`，这样虽然在对应平台执行的速度会降低，但是能有效减小 `apk` 的大小。

#### 方法三：动态加载 .so 库文件

为了减少应用安装包的大小，SDK 从 4.5.0 开始提供了 `EMOptions#setNativeLibBasePath` 方法支持动态加载 SDK 所需的 `.so` 文件。以 SDK 4.5.0 为例，`.so` 文件包括 `libcipherdb.so` 和 `libhyphenate.so` 两个文件。**从 4.11.0 开始，`.so` 文件还包含 `libaosl.so` 文件。**

该功能的实现步骤如下：

1. 下载最新版本的 SDK 并解压缩。
2. 集成 `hyphenatechat_4.5.0.jar` 到你的项目中。
3. 将所有架构的 `.so` 文件上传到你的服务器，并确保应用程序可以通过网络下载目标架构的 `.so` 文件。
4. 应用运行时，会检查 `.so` 文件是否存在。如果未找到，应用会下载该 `.so` 文件并将其保存到你自定义的应用程序的私有目录中。
5. 调用 `EMClient#init` 初始化时，将 `.so` 文件所在的 app 私有目录作为参数设置进 `EMOptions#setNativeLibBasePath` 方法中。
6. 调用 `EMClient#init` 初始化后，SDK 会自动从指定路径加载 `.so` 文件。

:::tip
1. 该方法仅适合手动集成 Android SDK，不适用于通过 Maven Central 集成。
2. so 库的路径取决于 `EMOptions#setNativeLibBasePath` 方法的 `path` 参数：
- `path` 参数为空或者不调用该方法时，SDK 内部会使用 `system.loadLibrary` 从系统默认路径中搜索并加载 so 库。
- `path` 参数不为空时，SDK 内部会使用 `System.load` 从设置的路径下搜索和加载 so 库。该路径必须为有效的 app 的私有目录路径。
:::

```java
//假设用户已经通过动态下发的方式，将环信 SDK 中的 libcipherdb.so 和 libhyphenate.so 两个 so 库，放到 app 的 /data/data/packagename/files 目录下。
String filesPath = mContext.getFilesDir().getAbsolutePath();

EMOptions options = new EMOptions();
options.setNativeLibBasePath(filesPath);

EMClient.getInstance().init(mContext, options);

```

### 3. 添加项目权限

根据场景需要，在 `/app/src/main/AndroidManifest.xml` 文件中添加如下行，获取相应的设备权限：

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="https://schemas.android.com/apk/res/android"
    package="Your Package"
    android:versionCode="100"
    android:versionName="1.0.0">

    <!-- IM SDK required start -->
    <!-- 允许程序振动，用于本地通知设置振动 -->
    <uses-permission android:name="android.permission.VIBRATE" />
    <!-- 访问网络权限 -->
    <uses-permission android:name="android.permission.INTERNET" />
    <!-- 麦克风权限，用于语音消息时录制语音，不使用录制语音可以移除 -->
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <!-- 相机权限，用于图片消息时拍摄图片，不使用拍照可以移除 -->
    <uses-permission android:name="android.permission.CAMERA" />
    <!-- 获取运营商信息，用于获取网络状态 -->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <!-- 获取读存储权限，用于附件等的获取 -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <!-- 访问 GPS 定位，用于定位消息，如果不用定位相关可以移除 -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <!-- 允许程序在手机屏幕关闭后后台进程仍然运行 -->
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <!-- 申请闹钟定时权限，SDK 心跳中使用，3.9.8及以后版本可以不添加 -->
    <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
    <!-- IM SDK required end -->

</manifest>
```

关于 App Key 对应的 value 获取，在 [环信即时通讯 IM 管理后台](https://console.easemob.com/user/login) 创建应用后，申请 App Key 并进行相关配置。

### 4. 防止代码混淆

在 app/proguard-rules.pro 文件中添加如下行，防止混淆 SDK 的代码：

```java
-keep class com.hyphenate.** {*;}
-dontwarn  com.hyphenate.**
```

### 5. 其他集成问题

当同时集成环信 SDK 4.11.0 和声网 RTM SDK 2.2.0 或 RTC SDK 4.3.0 及以上版本时，由于同时包含 `libaosl.so` 库，编译时可能会出现以下错误：

```java
com.android.builder.merge.DuplicateRelativeFileException: More than one file was found with OS independent path 'lib/x86/libaosl.so'
```

可在 app 的 `build.gradle` 文件的 Android 节点中添加 `packagingOptions` 节点，指定在构建过程中优先选择第一个匹配的文件：

```java
android {
  // ...
  packagingOptions {
    pickFirst 'lib/x86/libaosl.so'
    pickFirst 'lib/x86_64/libaosl.so'
    pickFirst 'lib/armeabi-v7a/libaosl.so'
    pickFirst 'lib/arm64-v8a/libaosl.so'
  }
}
```

然后 Gradle 文件同步，重新构建项目。

如欲了解详情，请点击[这里](https://doc.shengwang.cn/faq/integration-issues/rtm2-rtc-integration-issue)。

## 实现单聊

本节介绍如何实现单聊。

### 1. SDK 初始化

在主进程中进行初始化：

```java
EMOptions options = new EMOptions();
options.setAppKey("Your appkey");
......// 其他 EMOptions 配置。
EMClient.getInstance().init(context, options);
```

### 2. 创建账号

可以使用如下代码创建账户：

```java
try {
        // 注册失败会抛出 HyphenateException。
        // 同步方法，会阻塞当前线程。
        EMClient.getInstance().createAccount(userName, pwd);
        //成功
        //callBack.onSuccess(createLiveData(userName));
    } catch (HyphenateException e) {
        //失败
        //callBack.onError(e.getErrorCode(), e.getMessage());
    }
```

:::notice
该注册模式为在客户端注册，主要用于测试，简单方便，但不推荐在正式环境中使用，需要在[环信控制台](https://console.easemob.com/user/login)中手动开通开放注册功能；正式环境中应使用服务器端调用 Restful API 注册，具体见[注册单个用户](/document/server-side/account_system.html#开放注册单个用户)。
:::

### 3. 登录账号

使用如下代码实现用户登录：

```java
EMClient.getInstance().login(mAccount, mPassword, new EMCallBack() {
    // 登录成功回调
    @Override
    public void onSuccess() {

    }

    // 登录失败回调，包含错误信息
    @Override
    public void onError(final int code, final String error) {

    }

    @Override
    public void onProgress(int i, String s) {

    }

});
```

:::notice
1. 除了注册监听器，其他的 SDK 操作均需在登录之后进行。
2. 登录成功后需要调用 `EMClient.getInstance().chatManager().loadAllConversations();` 和 `EMClient.getInstance().groupManager().loadAllGroups();`，确保进入主页面后本地会话和群组均加载完毕。
3. 如果之前登录过，App 长期在后台运行后切换到前台运行可能会导致加载到内存的群组和会话为空。为了避免这种情况，可在主页面的 `oncreate` 里也添加这两种方法，不过，最好将这两种方法放在程序的开屏页。
:::

### 4. 发送一条单聊消息

```java
// `content` 为要发送的文本内容，`toChatUsername` 为对方的账号。
EMMessage message = EMMessage.createTextSendMessage(content, toChatUsername);
// 发送消息
EMClient.getInstance().chatManager().sendMessage(message);
```
