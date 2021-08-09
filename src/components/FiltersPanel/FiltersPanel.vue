<template>
  <div class="root">
    <div class="active-count">
      {{ activeItemsCount }}
      {{ activeItemsCount.length === 1 ? "item" : "items" }} left
    </div>
    <div class="options" v-for="option in options" :key="option.id">
      <div class="option" @click="$emit('set-filter-mode', option)">
        {{ option.title }}
      </div>
    </div>
    <div
      :class="[!isClearCompletedShown ? 'hidden' : '', 'clear-completed']"
      @click="$emit('clear-completed')"
    >
      Clear completed
    </div>
  </div>
</template>

<script>
import { FILTER_OPTIONS } from "../../constants/filterOptions";
export default {
  name: "FiltersPanel",
  props: {
    activeItemsCount: Number,
    isClearCompletedShown: Boolean,
  },
  data() {
    return {
      options: FILTER_OPTIONS,
    };
  },
  emits: ["set-filter-mode"],
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background: cornflowerblue;
}
.active-count {
  font-size: 18px;
}
.options {
  display: flex;
  align-items: center;
  gap: 8px;
}
.option {
  font-size: 18px;
}
.clear-completed {
  width: 140px;
  font-size: 18px;
}
.clear-completed.hidden {
  visibility: hidden;
}
</style>
