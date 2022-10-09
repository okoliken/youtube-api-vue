<script setup>
// IMPORTS
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import LogoVue from "./Logo.vue";
import { minorStateData } from "../store/state";
import { useVideo } from "../store/videos";
// END
const getVideosByType = useVideo()

// Pi-nia state
const minorState = minorStateData();
// end

// Reactive data
const target = ref(null);
// vue-use function
onClickOutside(target, () => minorState.changeSideBarState());
// end

onMounted(()=> {
  getVideosByType.getVideosByType()
})
</script>

<template>
  <TransitionGroup name="list">
    <div
      v-if="minorState.show_side_bar"
      class="bg-black w-full h-screen z-40 bg-opacity-30 absolute top-0"
    >
      <div
        ref="target"
        class="bg-white h-screen absolute z-50 top-0 left-0 border-r
         border-gray-100 w-full max-w-[240px] shadow"
      >
        <div class="h-14">
          <LogoVue class="transform -translate-y-2" />
        </div>
        <SidebarLinks />
      </div>
    </div>
  </TransitionGroup>
</template>
