<template>
  <main
    class="main columns is-gapless is-multiline"
    :class="{ darkmode: darkModeActive }"
  >
    <aside class="column is-one-quarter">
      <ProjectAside @onThemeChange="changeTheme" />
    </aside>
    <section class="column is-three-quarters content">
      <notification />
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import ProjectAside from '@/components/ProjectAside.vue';
import { defineComponent } from 'vue';
import ProjectNotification from '@/components/ProjectNotification.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      darkModeActive: false,
    };
  },
  components: {
    ProjectAside,
    notification: ProjectNotification,
  },
  methods: {
    changeTheme(darkModeActive: boolean): void {
      this.darkModeActive = darkModeActive;
    },
  },
});
</script>

<style>
.list {
  padding: 1rem;
}

.main {
  --primary-bg: #fff;
  --primery-text: #000;
}

.main.darkmode {
  --primary-bg: #2b2d42;
  --primery-text: #ddd;
}

.content {
  background: var(--primary-bg);
  color: var(--primery-text);
}
</style>
