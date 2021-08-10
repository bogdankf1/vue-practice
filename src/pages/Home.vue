<template>
  <div class="container">
    <InputField title="TASKS" @add-item="addItem" @toggle-all="toggleAll" />
    <Todolist
      @delete-item="removeItem"
      @toggle-item="toggleItem"
      @update-item="updateItem"
      :list="displayingList"
    />
    <FiltersPanel
      :list="displayingList"
      :activeItemsCount="activeItemsCount"
      :isClearCompletedShown="isClearCompletedShown"
      @clear-completed="clearCompleted"
      @set-filter-mode="setFilterMode"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import InputField from "../components/InputField/InputField";
import Todolist from "../components/Todolist/Todolist";
import FiltersPanel from "../components/FiltersPanel/FiltersPanel";
import { FILTER_MODES, FILTER_OPTIONS } from "../constants/filterOptions";

export default {
  name: "App",
  components: {
    InputField,
    Todolist,
    FiltersPanel,
  },
  data() {
    return {
      list: [],
      filterMode: FILTER_OPTIONS[0],
    };
  },
  created() {
    this.list = [
      {
        id: uuidv4(),
        title: "Default item",
        isActive: true,
      },
    ];
    this.data = {
      ...this.data,
      activeItemsCount: this.activeItemsCount,
      isClearCompletedShown: this.isClearCompletedShown,
      displayingList: this.displayingList,
    };
  },
  computed: {
    isEveryActive() {
      return this.list.every((item) => item.isActive);
    },
    activeItemsCount() {
      return this.list.filter((item) => item.isActive).length;
    },
    isClearCompletedShown() {
      return this.list.some((item) => !item.isActive);
    },
    displayingList() {
      return this.list.filter((item) => {
        if (this.filterMode.id === FILTER_MODES.ACTIVE) {
          return item.isActive;
        } else if (this.filterMode.id === FILTER_MODES.COMPLETED) {
          return !item.isActive;
        }
        return true;
      });
    },
  },
  methods: {
    addItem(value) {
      this.list = [
        ...this.list,
        { title: value, isActive: true, id: uuidv4() },
      ];
    },
    removeItem(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    updateItem(id, value) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: value,
          };
        }
        return item;
      });
    },
    toggleItem(id) {
      this.list = this.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
    },
    clearCompleted() {
      this.list = this.list.filter((item) => item.isActive);
    },
    toggleAll() {
      this.list = this.list.map((item) => {
        return {
          ...item,
          isActive: !this.isEveryActive,
        };
      });
    },
    setFilterMode(mode) {
      this.filterMode = mode;
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
