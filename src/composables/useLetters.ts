import { ref, computed, Ref } from "vue";

export const useLetters = (theName: Ref<string>) => {
  const letters = ref<string[]>([]);
  const correctLetters = computed(() =>
    letters.value.filter((l) => theName.value.includes(l))
  );
  const wrongLetters = computed(() =>
    letters.value.filter((l) => !theName.value.includes(l))
  );
  const isWin = computed(() =>
    [...theName.value].every((l) => correctLetters.value.includes(l))
  );
  const isLose = computed(() => wrongLetters.value.length === 6);

  const addLetter = (key:string) => {
      if (key.length === 1 && /[A-Za-z]/.test(key)) {
        letters.value.push(key.toLowerCase());
      }
  }

  const resetLetters = () => {
    letters.value = [];
  }

  return { letters, correctLetters, wrongLetters, isWin, isLose, addLetter, resetLetters };
};
