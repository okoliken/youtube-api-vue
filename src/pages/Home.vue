<script setup>
import YtChip from "@/components/YtChip.vue";
import { onMounted } from "vue";
import { useTags } from "../reuseable/tag";
import { useVideo } from "../store/videos";

const getVideosByType = useVideo();

const { tags } = useTags();

onMounted(() => {
  getVideosByType.getVideosByType();
});

getVideosByType.$subscribe(
  async () => {
    await getVideosByType.getVideosByType();
  },
  { detached: false }
);
</script>

<template>
  <main>
    <div
      class="flex items-center justify-between p-2 my-3 space-x-4 overflow-scroll grow border"
    >
      <YtChip
        @click="getVideosByType.video_type = text"
        :class="{
          'bg-red-600 text-white': text === getVideosByType.video_type,
        }"
        v-for="({ text }, index) in tags"
        :key="index"
        class="text-sm break-normal border py-2 px-4 rounded-full hover:cursor-pointer"
      >
        <p class="font-bold">{{ text }}</p>
      </YtChip>
    </div>
  </main>
</template>

<style></style>
