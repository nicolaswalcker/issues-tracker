<template>
  <section class="projects">
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">Nome do projeto</label>
        <input
          type="text"
          id="projectName"
          v-model="projectName"
          class="input"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { NotificationType } from '@/interfaces/INotification';
import useNotifier from '@/hooks/notifier';
export default defineComponent({
  name: 'ProjectsView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      projectName: '',
    };
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find((p) => p.id === this.id);
      this.projectName = project?.name || '';
    }
  },

  methods: {
    save() {
      if (this.id) {
        this.store.commit('UPDATE_PROJECT', {
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.store.commit('ADD_PROJECT', this.projectName);
      }
      this.projectName = '';
      this.notify(
        NotificationType.SUCCESS,
        'Sucesso',
        'Projeto salvo com sucesso'
      );
      this.$router.push('/projetos');
    },
  },

  setup() {
    const store = useStore();
    const { notify } = useNotifier();

    return {
      store,
      notify,
    };
  },
});
</script>
