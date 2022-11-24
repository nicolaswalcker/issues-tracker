<template>
  <article class="box form">
    <section class="columns">
      <article
        class="column is-5"
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
      <article class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Selecione o projeto</option>
            <option
              v-for="project in projects"
              :key="project.id"
              :value="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </article>
      <article class="column">
        <ProjectTimer @timer-finished="finishTask" />
      </article>
    </section>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ProjectTimer from './ProjectTimer.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { NotificationType } from '@/interfaces/INotification';
import { notify } from '@/mixins/notify';

export default defineComponent({
  name: 'ProjectForm',
  emits: ['onSaveTask'],
  mixins: [notify],
  data() {
    return {
      taskDescription: '',
      idProject: '',
    };
  },
  components: {
    ProjectTimer,
  },
  methods: {
    finishTask(timeElapsed: number): void {
      const projeto = this.projects.find((p) => p.id == this.idProject); // primeiro, buscamos pelo projeto
      if (!projeto) {
        // se o projeto não existe...
        this.notify(
          NotificationType.ERROR,
          'Ops!',
          'Selecione um projeto antes de finalizar a tarefa!',
        ); // notificamos o usuário
        return; // ao fazer return aqui, o restante do método salvarTarefa não será executado. chamamos essa técnica de early return :)
      }
      this.$emit('onSaveTask', {
        durationInSecs: timeElapsed,
        description: this.taskDescription,
        project: this.projects.find((p) => p.id === this.idProject),
      });
      this.taskDescription = '';
    },
  },

  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects),
      store,
    };
  },
});
</script>

<style>
.form {
  color: var(--primary-text);
  background-color: var(--primary-bg);
}
</style>
