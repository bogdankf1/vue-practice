<template>
  <div class="root" v-for="item in list" :key="item.id">
    <Todoitem
      @delete-item="$emit('delete-item', item.id)"
      @toggle-item="$emit('toggle-item', item.id)"
      @update-item="onUpdate"
      :item="item"
    />
  </div>
</template>
<script>
import Todoitem from "./Todoitem/Todoitem";
export default {
  name: "Todolist",
  props: {
    list: Array,
  },
  components: {
    Todoitem,
  },
  methods: {
    onUpdate(id, value) {
      this.$emit("update-item", id, value);
    },
  },
  emits: ["delete-item", "toggle-item", "update-item"],
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
}
</style>
