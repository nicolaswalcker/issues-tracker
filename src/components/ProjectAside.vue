<template>
  <header>
    <h1>
      <img
        class="has-text-centered"
        src="../assets/logo.png"
        alt="Logo alura tracker"
      />
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="changeTheme">{{ buttonText }}</button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            projetos
          </router-link>
        </li>
      </ul>
    </nav>
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

.panel li {
  margin: 8px 0;
  text-align: left;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
