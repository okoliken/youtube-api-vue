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
      :src="snippet.snippet.thumbnails.high.url"
      :class="`max-w-full h-${snippet.snippet.thumbnails.high.height} w-full`"
      loading="lazy"
    />
    <div>
      <p class="dark:text-white">{{ snippet.snippet.title }}</p>
    </div>
  </div>
</template>
