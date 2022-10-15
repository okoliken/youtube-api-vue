import axios from "../axios";
import { defineStore } from "pinia";

export const useVideo = defineStore("video", {
  state: () => {
    return {
      videos: [],
      search:"",
      loading:"",
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
    async searchForVideoSnippet(){
      this.loading = true
      await axios.get(`/search?part=snippet&q=${this.search}`).then(res => {
        this.loading = false
        console.log(res.data)
      }).catch((err)=> {
        this.loading = false
      })
    }
  },
});
