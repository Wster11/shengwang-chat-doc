import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  { text: '产品简介', link: '/product/introduction.html' },
  {
    text: 'UIKit',
    children: [
      {
        text: '单群聊 UIKit',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/uikit/chatuikit/android/chatuikit_overview.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/uikit/chatuikit/ios/chatuikit_overview.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/uikit/chatuikit/web/chatuikit_overview.html'
          },
          {
            text: 'Uniapp',
            icon: '/icon-uni-app.svg',
            link: '/uikit/chatuikit/uniapp/chatuikit_overview.html'
          },
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/uikit/chatuikit/react-native/chatuikit_overview.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/uikit/chatuikit/flutter/chatuikit_overview.html'
          }
        ]
      },
      {
        text: '聊天室 UIKit',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/uikit/chatroomuikit/android/roomuikit_overview.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/uikit/chatroomuikit/ios/roomuikit_overview.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/uikit/chatroomuikit/web/roomuikit_overview.html'
          },
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/uikit/chatroomuikit/react-native/roomuikit_overview.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/uikit/chatroomuikit/flutter/roomuikit_overview.html'
          }
        ]
      }
    ]
  },
  {
    text: 'SDK/REST 集成',
    children: [
      {
        text: '平台',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: '/document/android/quickstart.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: '/document/ios/quickstart.html'
          },
          {
            text: 'Web',
            icon: '/icon-web.svg',
            link: '/document/web/quickstart.html'
          },
          {
            text: 'HarmonyOS',
            icon: '/icon-harmonyos.svg',
            link: '/document/harmonyos/quickstart.html'
          },
          {
            text: 'Windows',
            icon: '/icon-windows.svg',
            link: '/document/windows/quickstart.html'
          },
          {
            text: 'Linux',
            icon: '/icon-linux.svg',
            link: '/document/linux/overview.html'
          }
        ]
      },
      {
        text: '框架',
        children: [
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: '/document/react-native/quickstart.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: '/document/flutter/quickstart.html'
          },
          {
            text: 'Unity',
            icon: '/icon-unity.svg',
            link: '/document/unity/quickstart.html'
          },
          {
            text: '小程序',
            icon: '/icon-mini-program.svg',
            link: '/document/applet/overview.html'
          },
          {
            text: 'uni-app',
            icon: '/icon-uni-app.svg',
            link: '/document/applet/uniapp.html'
          },
          {
            text: 'Electron',
            icon: '/icon-Electron.svg',
            link: '/document/electron/overview.html'
          }
        ]
      },
      {
        text: '服务端',
        children: [
          {
            text: 'REST API',
            icon: '/icon-platform.svg',
            link: '/document/server-side/overview.html'
          },
          {
            text: 'Java',
            icon: '/icon-platform.svg',
            link: '/document/server-side/java_server_sdk_2.0.html'
          },
          {
            text: 'PHP',
            icon: '/icon-platform.svg',
            link: '/document/server-side/php_server_sdk.html'
          }
        ]
      }
    ]
  },
  {
    text: 'API 参考',
    children: [
      {
        text: '平台',
        children: [
          {
            text: 'Android',
            icon: '/icon-Android.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/android/chat3.0/annotated.html'
          },
          {
            text: 'iOS',
            icon: '/icon-iOS.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/ios/chat3.0/annotated.html'
          },
          {
            text: 'Web/小程序',
            icon: '/icon-web.svg',
            link: 'https://doc.easemob.com/jsdoc/index.html'
          },
          {
            text: 'HarmonyOS',
            icon: '/icon-harmonyos.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/harmony/chat3.0/classes/ChatClient.ChatClient.html'
          },
          {
            text: 'Windows',
            icon: '/icon-windows.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/unity/annotated.html'
          }
        ]
      },
      {
        text: '框架',
        children: [
          {
            text: 'React Native',
            icon: '/icon-ReactNative.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/rn/modules.html'
          },
          {
            text: 'Flutter',
            icon: '/icon-flutter.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/flutter/index.html'
          },
          {
            text: 'Unity',
            icon: '/icon-unity.svg',
            link: 'https://sdkdocs.easemob.com/apidoc/unity/annotated.html'
          },
          {
            text: 'Electron',
            icon: '/icon-Electron.svg',
            link: 'https://downloads.easemob.com/doc/desktop/apidoc/index.html'
          }
        ]
      },
      {
        text: '服务端',
        children: [
          {
            text: 'Java 1.0',
            icon: '/icon-platform.svg',
            link: 'https://easemob.github.io/easemob-im-server-sdk/'
          },
          {
            text: 'Java 2.0',
            icon: '/icon-platform.svg',
            link: 'https://github.com/easemob/easemob-im-server-sdk/tree/master_java_2.0/src/test/java/com/easemob/im/api'
          },
          {
            text: 'PHP',
            icon: '/icon-platform.svg',
            link: 'https://easemob.github.io/im-php-server-sdk/annotated.html'
          }
        ]
      }
    ]
  }
  // {
  //   text: '即时推送',
  //   link: '/push/push_overview.html'
  // }
  // {
  //   text: "私有部署",
  //   children: [
  //     {
  //       text: "即时通讯",
  //       link: "/private/im/uc_deploy.html",
  //     },
  //    {
  //      text: "音视频",
  //      link: "/private/media/common_introduction.html",
  //    },
  //  ],
  // },
  // { text: '历史版本', link: 'https://docs-im.easemob.com/ccim/intro' },
  // { text: '有奖调研', link: 'https://doc.easemob.com/form/wjx.html' }
])
