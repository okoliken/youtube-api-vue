<script setup>
import YtChip from "@/components/YtChip.vue";
import YtSnippetContainer from "@/components/YtSnippetContainer.vue";
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
      class="flex dark:bg-[#181818] items-center justify-between p-2 space-x-4 overflow-scroll grow border dark:border-[#121212]"
    >
      <YtChip
        @click="getVideosByType.video_type = text"
        :class="{
          'bg-red-600 text-white ': text === getVideosByType.video_type,
        }"
        v-for="({ text }, index) in tags"
        :key="index"
        class="text-sm bg-white break-normal border dark:border-[#121212] py-1 px-4 rounded-full hover:cursor-pointer"
      >
        <p class="font-bold">{{ text }}</p>
      </YtChip>
    </div>
    <section>
      <YtSnippetContainer />
    </section>
  </main>
</template>

<style></style>
