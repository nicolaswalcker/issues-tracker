<template>
  <article class="box has-text-weight-bold"><slot /></article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectBox',
});
</script>

<style scoped>
.box {
  background: lemonchiffon;
}
</style>
