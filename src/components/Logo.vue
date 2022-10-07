<script setup>
import { minorStateData } from "../store/state";

const { changeSideBarState } = minorStateData();
</script>

<template>
  <div class="flex items-center">
    <span
      @click="changeSideBarState"
      class="material-symbols-outlined lg:ml-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full"
    >
      menu
    </span>
    <img src="../assets/download.svg" class="h-[75px]" alt="" />
  </div>
</template>
