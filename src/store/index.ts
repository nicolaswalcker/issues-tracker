import { INotification } from '@/interfaces/INotification';
import IProject from '@/interfaces/IProject';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';

interface State {
  projects: IProject[];
  notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [],
  },
  mutations: {
    ADD_PROJECT(state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;
      state.projects.push(project);
    },
    UPDATE_PROJECT(state, project: IProject) {
      const index = state.projects.findIndex((p) => p.id === project.id);
      state.projects[index] = project;
    },
    DELETE_PROJECT(state, projectId: string) {
      state.projects = state.projects.filter((p) => p.id !== projectId);
    },
    ADD_NOTIFICATION(state, notification: INotification) {
      notification.id = new Date().getTime();
      state.notifications.push(notification);

      setTimeout(() => {
        state.notifications = state.notifications.filter(
          (n) => n.id !== notification.id
        );
      }, 5000)
    }
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
