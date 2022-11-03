<template>
  <article class="box form">
    <section class="columns">
      <article
        class="column is-8"
        role="form"
        aria-label="Formulário para a criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa deseja iniciar?"
          v-model="taskDescription"
        />
      </article>
      <article class="column">
        <ProjectTimer @timer-finished="finishTask" />
      </article>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectTimer from './ProjectTimer.vue';

export default defineComponent({
  name: 'ProjectForm',
  emits: ['onSaveTask'],
  data() {
    return {
      taskDescription: '',
    };
  },
  components: {
    ProjectTimer,
  },
  methods: {
    finishTask(timeElapsed: number): void {
      this.$emit('onSaveTask', {
        durationInSecs: timeElapsed,
        description: this.taskDescription,
      });
      this.taskDescription = '';
    },
  },
});
</script>

<style>
.form {
  color: var(--primary-text);
  background-color: var(--primary-bg);
}
</style>
