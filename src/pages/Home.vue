<script setup>
import YtChip from "@/components/YtChip.vue";
import YtSnippetContainer from "@/components/YtSnippetContainer.vue";
import { onMounted } from "vue";
import { useTags } from "../reuseable/tag";
import { useVideo } from "../store/videos";

const getVideosByType = useVideo();

const { tags } = useTags();

const get_snippets = (value) => {
  getVideosByType.video_type = value;
  getVideosByType.getVideosByType();
};
</script>

<template>
  <main>
    <div
      class="flex dark:bg-lightGrey items-center justify-between p-2 space-x-4 overflow-scroll grow border border-y dark:border-lightGrey"
    >
      <YtChip
        @click="get_snippets(text)"
        :class="{
          'bg-red-600 dark:bg-white': text === getVideosByType.video_type,
        }"
        v-for="({ text }, index) in tags"
        :key="index"
        class="text-sm break-normal border dark:border-lightGrey py-2 px-4 rounded-full hover:cursor-pointer"
      >
        <p
          :class="{
            'text-white dark:text-black': text === getVideosByType.video_type,
          }"
          class="font-bold"
        >
          {{ text }}
        </p>
      </YtChip>
    </div>
    <section class="container mx0-auto">
      <div>
        <h4>{{ getVideosByType.video_type }}</h4>
      </div>

      <div></div>
      <YtSnippetContainer />
    </section>
  </main>
</template>

<style></style>
