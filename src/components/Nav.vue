<script setup>
import { ref } from "vue";
import LogoVue from "./Logo.vue";

const is_typing = ref(false);

const search = () => {
  is_typing.value = true;
};
</script>

<template>
  <div class="w-full">
    <header
      class="bg-white flex items-center justify-between h-14 w-full shadow-sm"
    >
      <LogoVue />

      <div class="w-full max-w-xl relative">
        <input
          @keyup="search"
          type="text"
          placeholder="Search for videos"
          class="border bg-gray-50 rounded border-gray-200 w-full py-2 px-4 outline-none appearance-none"
        />
        <div v-if="is_typing" class="bg-white shadow-md absolute w-full p-3">
          <div
            v-for="(i, index) in 10"
            :key="index"
            class="cursor-pointer hover:bg-slate-100"
          >
            <p class="p-3">dwdw</p>
          </div>
        </div>
      </div>

      <div class="md:mr-10">
        <span
          class="material-symbols-outlined cursor-pointer hover:bg-gray-100 p-2 rounded-full"
        >
          light_mode
        </span>
      </div>
    </header>
  </div>
</template>
