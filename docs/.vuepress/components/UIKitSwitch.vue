<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const PLATFORM_ICON_MAP = {
  android: {
    icon: "/icon-Android.svg",
    activeIcon: "/icon-Android-hover.svg",
  },
  ios: {
    icon: "/icon-iOS.svg",
    activeIcon: "/icon-iOS-hover.svg",
  },
  web: {
    icon: "/icon-web.svg",
    activeIcon: "/icon-web-hover.png",
  },
  windows: {
    icon: "/icon-windows.svg",
    activeIcon: "/icon-windows-hover.svg",
  },
  ["react-native"]: {
    icon: "/icon-ReactNative.svg",
    activeIcon: "/icon-ReactNative-hover.svg",
  },
  flutter: {
    icon: "/icon-flutter.svg",
    activeIcon: "/icon-flutter-hover.png",
  },
  unity: {
    icon: "/icon-unity.svg",
    activeIcon: "/icon-unity-hover.svg",
  },
  uniapp: {
    icon: "/icon-uni-app.svg",
    activeIcon: "/icon-uni-app.svg",
  },
  applet: {
    icon: "/icon-mini-program.svg",
    activeIcon: "/icon-mini-program-hover.svg",
  },
  ["server-side"]: {
    icon: "/icon-platform.svg",
    activeIcon: "/icon-platform-hover.svg",
  },
};

const options = [
  {
    label: "平台",
    options: [
      {
        value: "android",
        label: "Android",
      },
      {
        value: "ios",
        label: "iOS",
      },
      {
        value: "web",
        label: "Web",
      },
    ],
  },
  {
    label: "框架",
    options: [
      {
        value: "react-native",
        label: "React Native",
      },
      {
        value: "flutter",
        label: "Flutter",
      },
    ],
  },
];

const platform = ref("android");
const kitType = ref("chatuikit");
const platformIcon = computed(
  () => PLATFORM_ICON_MAP[platform.value]?.activeIcon
);
const route = useRoute();
const router = useRouter();
watch(
  () => route.path,
  () => {
    if (route.path.indexOf("/uikit") == 0) {
      const splitRoute = route.path.split("/");
      kitType.value = splitRoute[2];
      platform.value = splitRoute[3];
    }
  },
  { immediate: true }
);

// 切换平台，如果有相同路径的route就直接跳转
const onChange = (platform) => {
  const nextPlatformDocRouters = router.options.routes
    .filter(
      (item) =>
        item.hasOwnProperty("name") &&
        item?.path.indexOf(`/uikit/${kitType.value}/${platform}`) == 0
    )
    .map((item) => item.path);

  let newPath = route.path.split("/");
  newPath[3] = platform;
  const nextPathPath = newPath.join("/");

  if (nextPlatformDocRouters.indexOf(nextPathPath) > -1) {
    router.push(nextPathPath);
  } else {
    if (kitType.value == "chatuikit") {
      router.push(
        `/uikit/${kitType.value}/${platform}/chatuikit_overview.html`
      );
    }
    if (kitType.value == "chatroomuikit") {
      router.push(
        `/uikit/${kitType.value}/${platform}/roomuikit_overview.html`
      );
    }
  }
};
</script>

<template>
  <el-select v-model="platform" @change="onChange" placeholder="请选择">
    <template #prefix>
      <img width="20" height="20" :src="platformIcon" />
    </template>
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        class="option-content"
      >
        <span class="label-icon">
          <img
            class="default"
            width="20"
            height="20"
            :src="PLATFORM_ICON_MAP[item.value]?.icon"
          />
          <img
            class="active"
            width="20"
            height="20"
            :src="PLATFORM_ICON_MAP[item.value]?.activeIcon"
          />
        </span>
        <span>{{ item.label }}</span>
      </el-option>
    </el-option-group>
  </el-select>
</template>

<style lang="scss" scope>
.option-content:hover .default {
  display: none;
}

.option-content .active {
  display: none;
}

.option-content:hover .active {
  display: inline-block;
}

.label-icon {
  vertical-align: sub;
  padding-right: 5px;
}
</style>
