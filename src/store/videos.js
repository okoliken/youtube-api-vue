import axios from "../axios";
import { defineStore } from "pinia";

export const useVideo = defineStore("video", {
  state: () => {
    return {
      videos: [],
      video_type: "Live",
    };
  },
  getters: {},
  actions: {
    async getVideosByType() {
      await axios
        .get(`/search?part=snippet&q=${this.video_type}`)
        .then((res) => {
            this.videos = res.data
        });
    },
  },
});
