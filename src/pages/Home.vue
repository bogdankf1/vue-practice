<template>
  <div class="container">
    <InputField title="TASKS" @add-item="onAddItem" @toggle-all="onToggleAll" />
    <Todolist
      @delete-item="onRemoveItem"
      @toggle-item="onToggleItem"
      @update-item="onUpdateItem"
      :list="displayingList"
    />
    <FiltersPanel
      :list="displayingList"
      :activeItemsCount="activeItemsCount"
      :isClearCompletedShown="isClearCompletedShown"
      @clear-completed="onClearCompleted"
      @set-filter-mode="onSetFilterMode"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapMutations, mapState, mapGetters } from "vuex";
import InputField from "../components/InputField/InputField";
import Todolist from "../components/Todolist/Todolist";
import FiltersPanel from "../components/FiltersPanel/FiltersPanel";
import { FILTER, TODOS, TODO_GETTERS } from "../types";

export default {
  name: "App",
  components: {
    InputField,
    Todolist,
    FiltersPanel,
  },
  data() {
    return {};
  },
  created() {
    this.data = {
      ...this.data,
      activeItemsCount: this.activeItemsCount,
      isClearCompletedShown: this.isClearCompletedShown,
      displayingList: this.displayingList,
    };
  },
  computed: {
    ...mapState({
      filterMode: (state) => state.todolist.filterMode,
    }),
    ...mapGetters({
      isEveryActive: TODO_GETTERS.IS_EVERY_ACTIVE,
      activeItemsCount: TODO_GETTERS.ACTIVE_ITEMS_COUNT,
      isClearCompletedShown: TODO_GETTERS.IS_CLEAR_COMPLETED_SHOWN,
      displayingList: TODO_GETTERS.DISPLAYING_LIST,
    }),
  },
  methods: {
    ...mapMutations({
      addItem: TODOS.ADD,
      removeItem: TODOS.REMOVE,
      updateItem: TODOS.UPDATE,
      toggleItem: TODOS.TOGGLE,
      clearCompletedItems: TODOS.CLEAR_COMPLETED,
      toggleAllItems: TODOS.TOGGLE_ALL,
      setFilterMode: FILTER.SET_MODE,
    }),
    onAddItem(value) {
      this.addItem({ item: { title: value, isActive: true, id: uuidv4() } });
    },
    onRemoveItem(id) {
      this.removeItem({ id });
    },
    onUpdateItem(id, value) {
      this.updateItem({ id, value });
    },
    onToggleItem(id) {
      this.toggleItem({ id });
    },
    onClearCompleted() {
      this.clearCompletedItems();
    },
    onToggleAll() {
      this.toggleAllItems({ isEveryActive: this.isEveryActive });
    },
    onSetFilterMode(mode) {
      this.setFilterMode({ mode });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
