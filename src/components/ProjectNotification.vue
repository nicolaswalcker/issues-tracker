<template>
  <div class="notifications">
    <article
      class="message"
      v-for="notification in notifications"
      :key="notification.id"
      :class="context[notification.type]"
    >
      <div class="message-header">
        <p>{{notification.title}}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{{notification.message}}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { NotificationType } from '@/interfaces/INotification';

export default defineComponent({
  name: 'ProjectNotification',
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: 'is-success',
        [NotificationType.ERROR]: 'is-danger',
        [NotificationType.INFO]: 'is-warning',
      }
    };
  },
  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications),
    };
  },
});
</script>

<style scoped>
.notifications {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  padding: 0.5rem;
}
</style>
