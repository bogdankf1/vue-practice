import { TODOS, FILTER } from "../types/mutationTypes";
import { FILTER_MODES, FILTER_OPTIONS } from "../constants/filterOptions";
import { TODO_GETTERS } from "../types";

export const todolistModule = {
  state: () => ({
    list: [],
    filterMode: FILTER_OPTIONS[0],
  }),
  mutations: {
    [TODOS.ADD](state, { item }) {
      state.list = [...state.list, item];
    },
    [TODOS.REMOVE](state, { id }) {
      state.list = state.list.filter((item) => item.id !== id);
    },
    [TODOS.UPDATE](state, { id, value }) {
      state.list = state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: value,
          };
        }
        return item;
      });
    },
    [TODOS.TOGGLE](state, { id }) {
      state.list = state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
    },
    [TODOS.CLEAR_COMPLETED](state) {
      state.list = state.list.filter((item) => item.isActive);
    },
    [TODOS.TOGGLE_ALL](state, { isEveryActive }) {
      state.list = state.list.map((item) => {
        return {
          ...item,
          isActive: !isEveryActive,
        };
      });
    },
    [FILTER.SET_MODE](state, { mode }) {
      state.filterMode = mode;
    },
  },
  getters: {
    [TODO_GETTERS.IS_EVERY_ACTIVE](state) {
      return state.list.every((item) => item.isActive);
    },
    [TODO_GETTERS.ACTIVE_ITEMS_COUNT](state) {
      return state.list.filter((item) => item.isActive).length;
    },
    [TODO_GETTERS.IS_CLEAR_COMPLETED_SHOWN](state) {
      return state.list.some((item) => !item.isActive);
    },
    [TODO_GETTERS.DISPLAYING_LIST](state) {
      return state.list.filter((item) => {
        if (state.filterMode.id === FILTER_MODES.ACTIVE) {
          return item.isActive;
        } else if (state.filterMode.id === FILTER_MODES.COMPLETED) {
          return !item.isActive;
        }
        return true;
      });
    },
  },
};
