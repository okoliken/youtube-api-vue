<script setup>
import YtChip from "@/components/YtChip.vue";
import { ref } from "@vue/reactivity";
import { useTags } from "../reuseable/tag";

const { tags } = useTags();

const active = ref("Home");
</script>

<template>
  <main>
    <div
      class="flex items-center justify-between p-2 my-4 space-x-4 overflow-scroll grow border"
    >
      <YtChip
        :class="{ 'bg-red-700 text-white': text === active }"
        v-for="({ text }, index) in tags"
        :key="index"
        class="text-sm break-normal border py-2 px-4 rounded-full hover:cursor-pointer bg-gray-100"
      >
        <p class="font-bold">{{ text }}</p>
      </YtChip>
    </div>
  </main>
</template>

<style></style>
