<script setup lang="ts">
    import { ref } from 'vue';
    const isVisible = ref(false);

    const open = () => {
        isVisible.value = true;
        setTimeout(() => {
            isVisible.value = false;
        }, 2000);
    }

    const close = () => {
        isVisible.value = false;
    }

    defineExpose({
        open,
        close
    });
</script>

<template>
    <div class="notification-container" :class="{show: isVisible}">
        <p>You have already entered this character</p>
    </div>
</template>