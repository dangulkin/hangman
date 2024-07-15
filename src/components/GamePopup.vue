<script setup lang="ts">
import { ref } from 'vue';
import { GameStatus } from '../types/GameStatus.ts';

interface Props {
  word: string;
}

defineProps<Props>();

const gameStatus = ref<GameStatus | null>(null);
const isVisible = ref(false);

const open = (status: GameStatus) => {
  gameStatus.value = status;
  isVisible.value = true;
}

const close = () => {
  isVisible.value = false;
}

const emit = defineEmits<{
  (e: 'restart'): void
}>()

defineExpose({
  open,
  close
});
</script>

<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
        <h2 v-if="gameStatus === 'win'">Congrats, you won 😃</h2>
        <template v-else-if="gameStatus === 'lose'">
          <h2>You lost 😕</h2>
          <h3>The word was: {{ word }}</h3>
        </template>
      
      <button @click="emit('restart')">Play again</button>
    </div>
  </div>
</template>