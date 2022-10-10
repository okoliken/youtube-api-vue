<script setup>
import { inject } from "vue";
import { minorStateData } from "../store/state";

const theme = inject("theme");
// const { changeSideBarState } = minorStateData();
</script>

<template>
  <div class="flex">
    <!-- <span
      @click="changeSideBarState"
      class="material-symbols-outlined lg:ml-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full"
    >
      menu
    </span> -->
    <template v-if="theme">
      <img src="../assets/dark.svg" class="h-[88px]" alt="" />
    </template>
    <template v-else>
      <img src="../assets/download.svg" class="h-[88px]" alt="" />
    </template>
  </div>
</template>
