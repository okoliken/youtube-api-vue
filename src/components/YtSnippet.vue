<script setup>
import { useVideo } from "../store/videos";
const getVideosSnippet = useVideo();
await getVideosSnippet.getVideosByType();
</script>

<template>
  <div
    class="mb-5"
    v-for="snippet in getVideosSnippet.videos.items"
    :key="snippet.snippet.channelId"
  >
    <img
      :src="snippet.snippet.thumbnails.medium.url"
      class="max-w-full h-full max-h-44"
      loading="lazy"
    />
    <div>
      <p class="dark:text-white">{{ snippet.snippet.title }}</p>
    </div>
  </div>
</template>
