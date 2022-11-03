<template>
  <strong
    class="stopwatch is-flex is-align-items-center is-justify-content-center"
    >{{ timeFormatted }}</strong
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectStopwatch',
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    timeFormatted(): string {
      return new Date(this.time * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style>
.stopwatch {
  color: var(--primary-text);
}
</style>
