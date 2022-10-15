<script setup>
import { ref, provide, onUpdated } from "vue";
import LogoVue from "./Logo.vue";
import { useDark, useToggle } from "@vueuse/core";
import YtSearch from '@/components/YtSearch.vue'
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
      class="dark:bg-lightGrey bg-white flex items-center justify-between h-14 w-full shadow-sm"
    >
      <LogoVue />

      <div class="w-full max-w-xl relative">
       <YtSearch />
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
