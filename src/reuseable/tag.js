import { reactive } from "vue";

export function useTags() {
  const tags = reactive([
    {
      text: "Live",
    },
    {
      text: "Coding",
    },
    {
      text: "Vue js",
    },
    {
      text: "Nuxt js",
    },
    {
      text: "Music",
    },
    {
      text: "Podcasts",
    },
    {
      text: "Movie",
    },
    {
      text: "Sport",
    },
    {
      text: "Comedy",
    },
    {
      text: "Food",
    },
    {
      text: "Reaction video",
    },
    {
      text: "Wizkid",
    },
    // {
    //   text: "JavaScript",
    // },
  ]);

  return { tags };
}
