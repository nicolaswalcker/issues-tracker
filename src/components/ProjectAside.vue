<template>
  <header>
    <h1><img src="../assets/logo.png" alt="Logo alura tracker" /></h1>
    <button class="button" @click="changeTheme">{{ buttonText }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectAside',
  data() {
    return {
      darkModeActive: false,
    };
  },
  emits: ['onThemeChange'],
  computed: {
    buttonText(): string {
      return this.darkModeActive
        ? 'Desativar modo escuro'
        : 'Ativar modo escuro';
    },
  },
  methods: {
    changeTheme(): void {
      this.darkModeActive = !this.darkModeActive;
      this.$emit('onThemeChange', this.darkModeActive);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
