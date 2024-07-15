<script setup lang="ts">
import GameHeader from './components/GameHeader.vue';
import GameFigure from './components/GameFigure.vue';
import GameWrongLetters from './components/GameWrongLetters.vue';
import GameWord from './components/GameWord.vue';
import GamePopup from './components/GamePopup.vue';
import GameNotification from './components/GameNotification.vue';

import { GameStatus } from './types/GameStatus.ts';
import { ref, watch } from 'vue';
import { useRandomWord } from './composables/useRandomWord.ts';
import { useLetters } from './composables/useLetters.ts';
import { useNotification } from './composables/useNotification.ts';

const { theName, getRandomWord } = useRandomWord();
const { letters, correctLetters, wrongLetters, isWin, isLose, addLetter, resetLetters } = useLetters(theName);
const { notification, showNotification } = useNotification();
const popup = ref<InstanceType<typeof GamePopup> | null>(null);

const openPopup = (status: GameStatus) => {
  popup.value?.open(status);
};

const restart = async () => {
  await getRandomWord();
  resetLetters();
  popup.value?.close();
  notification.value?.close();
};

watch(wrongLetters, () => {
  if (isLose.value) {
    openPopup('lose');
  }
});

watch(correctLetters, () => {
  if (isWin.value) {
    openPopup('win');
  }
});

window.addEventListener('keydown', ({ key }) => {
  if (isWin.value || isLose.value) {
    return;
  }

  if (letters.value.includes(key.toLowerCase())) {
    showNotification();
    return;
  }

  addLetter(key);
});

defineExpose({
  restart
});
</script>

<template>
  <GameHeader />
  <div class="game-container">
    <GameFigure :wrong-letters-count="wrongLetters.length" />
    <GameWrongLetters :wrong-letters="wrongLetters" />
    <GameWord :word="theName" :correct-letters="correctLetters" />
  </div>

  <GamePopup ref="popup" :word="theName" @restart="restart" />
  <GameNotification ref="notification" />
</template>
