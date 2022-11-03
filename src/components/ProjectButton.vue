<template>
  <button class="button" @click="isClicked" :disabled="isDisabled">
    <span class="icon">
      <i :class="buttonIcon"></i>
    </span>
    <span>{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectButton',
  emits: ['isClicked'],
  props: {
    isDisabled: {
      type: Boolean,
    },
    buttonIcon: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    isClicked(): void {
      this.$emit('isClicked');
    },
  },
});
</script>
