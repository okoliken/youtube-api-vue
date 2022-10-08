import axios from "../axios";
import { defineStore } from "pinia";

export const useVideo = defineStore("video", {
  state: () => {
    return {
      videos: [],
      video_type:'new'
    };
  },
  getters: {},
  actions: {
    async getVideosByType(video_type) {
      await axios.get(`/search?part=snippet&q=${video_type}`).then(res => console.log(res.data))
    },
  },
});
