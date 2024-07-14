import { onMounted, ref } from "vue";
import { getRandomName } from "../api/getRandomName.ts";

export const useRandomWord = () => {
  const theName = ref("");

  const getRandomWord = async () => {
    try {
      const name = await getRandomName();
      theName.value = name.toLowerCase();
    } catch (error) {
      console.error("Error fetching random name:", error);
      theName.value = "";
    }
  };

  onMounted(() => {
    getRandomWord();
  });

  return { theName, getRandomWord };
};
