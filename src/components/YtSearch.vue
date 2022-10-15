<script setup>
import { ref } from "vue";
import { useVideo } from "../store/videos";
import YtSpinner from "@/components/YtSpinner.vue";
const is_typing = ref(false);

const trigger_search = () => {
  is_typing.value = true;

  search_controllers.searchForVideoSnippet();
};

const search_controllers = useVideo();

defineExpose({
  search_controllers
});
</script>

<template>
  <div class="w-full max-w-xl relative">
    <input
      @keyup="trigger_search"
      type="text"
      v-model="search_controllers.search"

      placeholder="Search for videos"
      class="border dark:bg-[#121212] rounded border-gray-200 dark:border-lightGrey bg-gray-100 w-full py-2 px-4 outline-none appearance-none"
    />
    <div
      v-if="is_typing"
      class="bg-white dark:bg-[#121212] shadow-md absolute w-full rounded-md"
    >
      <div class="flex items-center justify-center" v-if="search_controllers.loading">
        <YtSpinner />
      </div>
      <!-- <div class="cursor-pointer hover:bg-slate-100 dark:hover:bg-lightGrey">
        <p class="p-3 text-black dark:text-gray-100">rema offset</p>
      </div> -->
    </div>
  </div>
</template>
