<template>
  <ProjectBox class="box has-text-weight-bold">
    <section class="columns">
      <article class="column is-7">
        {{ task.description || 'Tarefa sem descrição' }}
      </article>
      <ProjectStopwatch :time="task.durationInSecs" />
    </section>
  </ProjectBox>
</template>

<script lang="ts">
import ITask from '@/interfaces/ITask';
import { defineComponent, PropType } from 'vue';
import ProjectBox from './ProjectBox.vue';
import ProjectStopwatch from './ProjectStopwatch.vue';

export default defineComponent({
  name: 'ProjectTask',
  components: { ProjectStopwatch, ProjectBox },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
});
</script>
