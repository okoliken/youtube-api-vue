<script setup>
import LogoVue from "./Logo.vue";

import { useIcons } from "../reuseable/sidebarIcons.js";
import { minorStateData } from "../store/state";

const { sideBarLinks } = useIcons();
const minorState = minorStateData();
</script>

<template>
  <div
    v-if="minorState.show_side_bar"
    class="bg-black w-full h-screen z-40 bg-opacity-30 absolute top-0"
  >
    <div
      class="bg-white h-screen absolute z-50 top-0 left-0 border-r border-gray-100 w-full max-w-[240px] shadow"
    >
      <div class="h-14">
        <LogoVue class="transform -translate-y-2"/>
      </div>
      <div class="my-4">
        <div
          v-for="(icons, index) in sideBarLinks"
          :key="index"
          class="flex items-center space-x-6 px-5 hover:bg-gray-100 py-2 cursor-pointer"
        >
          <span class="material-symbols-outlined text-md font-light">
            {{ icons.icon }}
          </span>
          <span class="font-light text-sm">{{ icons.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
