<script setup>
import YtSnippet from "@/components/YtSnippet.vue";
</script>
<template>
  <div
    class="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3"
  >
    <Suspense>
      <YtSnippet />

      <template #fallback>
        <h3 class="text-white text-3xl">...</h3>
      </template>
    </Suspense>
  </div>
</template>
