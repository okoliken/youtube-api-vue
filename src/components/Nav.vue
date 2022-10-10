<script setup>
import { ref, provide, onUpdated } from "vue";
import LogoVue from "./Logo.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const is_typing = ref(false);

const search = () => {
  is_typing.value = true;
};

const theme = ref(isDark);

provide("theme", theme);

onUpdated(() => console.log("ffr"));
</script>

<template>
  <div class="w-full">
    <header
      class="dark:bg-[#181818] bg-white flex items-center justify-between h-14 w-full shadow-sm"
    >
      <LogoVue />

      <div class="w-full max-w-xl relative">
        <input
          @keyup="search"
          type="text"
          placeholder="Search for videos"
          class="border dark:bg-[#121212] rounded border-gray-200 dark:border-[#181818] bg-gray-100 w-full py-2 px-4 outline-none appearance-none"
        />
        <div
          v-if="is_typing"
          class="bg-white dark:bg-[#121212] shadow-md absolute w-full"
        >
          <div
            v-for="(i, index) in 5"
            :key="index"
            class="cursor-pointer hover:bg-slate-100"
          >
            <p class="p-3 dark:text-black">dwdw</p>
          </div>
        </div>
      </div>

      <div class="md:mr-10">
        <span
          v-text="isDark ? 'dark_mode' : 'light_mode'"
          @click="toggleDark()"
          class="material-symbols-outlined cursor-pointer hover:bg-gray-100 dark:bg-gray-100 p-2 rounded-full"
        />
      </div>
    </header>
  </div>
</template>
