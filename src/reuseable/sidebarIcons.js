import { reactive } from "vue";

export function useIcons() {
  const sideBarLinks = reactive([
    {
      icon: "home",
      text: "Home",
    },
    {
      icon: "code",
      text: "Coding",
    },
    {
      icon: "code",
      text: "Vue js",
    },
    {
      icon: "code",
      text: "Nuxt js",
    },
    {
      icon: "music_note",
      text: "Music",
    },
    {
      icon: "podcasts",
      text: "Podcasts",
    },
    {
      icon: "movie",
      text: "Movie",
    },
    {
      icon: "fitness_center",
      text: "Sport",
    },
  ]);

  return { sideBarLinks };
}
