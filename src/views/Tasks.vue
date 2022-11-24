<template>
  <ProjectForm @onSaveTask="addTask" />
  <div class="list">
    <ProjectBox v-if="isTasksEmpty" class="box has-text-weight-bold">
      Ainda não tem tarefas cadastradas
    </ProjectBox>
    <ProjectTask v-else v-for="(task, i) in tasks" :key="i" :task="task" />
  </div>
</template>

<script lang="ts">
import ProjectForm from '@/components/ProjectForm.vue';
import { defineComponent } from 'vue';
import ProjectTask from '@/components/ProjectTask.vue';
import ITask from '@/interfaces/ITask';
import ProjectBox from '@/components/ProjectBox.vue';

export default defineComponent({
  name: 'TasksView',
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  computed: {
    isTasksEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  components: {
    ProjectForm,
    ProjectTask,
    ProjectBox,
  },
  methods: {
    addTask(task: ITask): void {
      this.tasks.push(task);
    },
  },
});
</script>
