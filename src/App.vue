<template>
  <main
    class="main columns is-gapless is-multiline"
    :class="{ darkmode: darkModeActive }"
  >
    <aside class="column is-one-quarter">
      <ProjectAside @onThemeChange="changeTheme" />
    </aside>
    <section class="column is-three-quarters content">
      <ProjectForm @onSaveTask="addTask" />
      <div class="list">
        <ProjectBox v-if="isTasksEmpty" class="box has-text-weight-bold">
          Ainda não tem tarefas cadastradas
        </ProjectBox>
        <ProjectTask v-else v-for="(task, i) in tasks" :key="i" :task="task" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import ProjectAside from '@/components/ProjectAside.vue';
import ProjectForm from '@/components/ProjectForm.vue';
import { defineComponent } from 'vue';
import ProjectTask from '@/components/ProjectTask.vue';
import ITask from '@/interfaces/ITask';
import ProjectBox from '@/components/ProjectBox.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      tasks: [] as ITask[],
      darkModeActive: false,
    };
  },
  computed: {
    isTasksEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  components: {
    ProjectAside,
    ProjectForm,
    ProjectTask,
    ProjectBox,
  },
  methods: {
    addTask(task: ITask): void {
      this.tasks.push(task);
    },
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
