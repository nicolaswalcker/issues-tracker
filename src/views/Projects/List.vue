<template>
  <section class="projects">
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <router-link
              :to="`/projetos/${project.id}`"
              class="button is-small is-info"
            >
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
              <span>Editar</span>
            </router-link>
            <button class="button ml-2 is-danger is-small" @click="exclude(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
              <span>Excluir</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import {notify} from '@/mixins/notify';
import { NotificationType } from '@/interfaces/INotification';
export default defineComponent({
  name: 'ProjectsList',
  mixins: [
    notify
  ],
  methods: {
    exclude(id: string) {
      this.store.commit('DELETE_PROJECT', id);
      this.notify(
        NotificationType.SUCCESS,
        'Sucesso',
        'Projeto excluído com sucesso'
      );
    },
  },

  setup() {
    const store = useStore();

    return {
      projects: computed(() => store.state.projects),
      store
    };
  },
});
</script>
