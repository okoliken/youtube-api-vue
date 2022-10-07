import { defineStore } from "pinia";

export const minorStateData = defineStore("minor", {
  state: () => {
    return {
      show_side_bar: false,
    };
  },
  getters: {
    doubleCount: (state) => state.show_side_bar,
  },
  actions: {
    changeSideBarState() {
      this.show_side_bar = !this.show_side_bar
    },
  },
});
