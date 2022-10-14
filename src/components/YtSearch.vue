<script setup>
import { ref } from "vue";
const is_typing = ref(false);

const search = () => {
  is_typing.value = true;

};
</script>

<template>
  <div class="w-full max-w-xl relative">
    <input
      @keyup="search"
      type="text"
      placeholder="Search for videos"
      class="border dark:bg-[#121212] rounded border-gray-200 dark:border-lightGrey bg-gray-100 w-full py-2 px-4 outline-none appearance-none"
    />
    <div v-if="is_typing" class="bg-white dark:bg-[#121212] shadow-md absolute w-full">
      <div class="cursor-pointer hover:bg-slate-100">
        <p class="p-3 dark:text-black"></p>
      </div>
    </div>
  </div>
</template>
