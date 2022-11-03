<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <ProjectStopwatch :time="time" />
    <span>
      <ProjectButton
        @isClicked="start"
        buttonIcon="fas fa-play"
        buttonText="play"
        :isDisabled="isStopwatchActive" />
      <ProjectButton
        @isClicked="stop"
        buttonIcon="fas fa-stop"
        buttonText="stop"
        :isDisabled="!isStopwatchActive"
    /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectButton from './ProjectButton.vue';
import ProjectStopwatch from './ProjectStopwatch.vue';

export default defineComponent({
  name: 'ProjectTimer',
  emits: ['timerFinished'],
  components: {
    ProjectStopwatch,
    ProjectButton,
  },
  data() {
    return {
      time: 0,
      stopwatch: 0,
      isStopwatchActive: false,
    };
  },
  methods: {
    start() {
      this.isStopwatchActive = true;
      this.stopwatch = setInterval(() => {
        this.time++;
      }, 1000);
    },
    stop() {
      this.isStopwatchActive = false;
      clearInterval(this.stopwatch);
      this.$emit('timerFinished', this.time);
      this.time = 0;
    },
  },
});
</script>

<style scoped></style>
