<script setup>
import { useIcons } from "../reuseable/sidebarIcons.js";
const { sideBarLinks } = useIcons();
</script>

<template>
  <div class="my-4">
    <div
      v-for="({ icon, text }, index) in sideBarLinks"
      :key="index"
      class="flex items-center space-x-6 px-5 hover:bg-gray-100 py-2 cursor-pointer"
    >
      <span class="material-symbols-outlined text-md font-light">
        {{ icon }}
      </span>
      <span class="font-light text-sm">{{ text }}</span>
    </div>
  </div>
</template>
