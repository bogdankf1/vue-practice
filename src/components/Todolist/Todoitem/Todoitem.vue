<template>
  <div class="root">
    <div class="check-btn" @click="$emit('toggle-item', id)">
      <img
        v-if="!item.isActive"
        src="../../../assets/checkmarkIcon.svg"
        alt="checkmark-icon"
      />
    </div>
    <div class="content">
      <div v-if="isEditMode">
        <input v-model="inputValue" @keyup.enter="disableEditMode" />
      </div>
      <div v-else @dblclick="enableEditMode">
        {{ item.title }}
      </div>
    </div>
    <div class="delete-btn" @click="$emit('delete-item', id)">
      <img src="../../../assets/trashIcon.svg" alt="trash-icon" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEditMode: false,
      inputValue: "",
    };
  },
  name: "Todoitem",
  props: {
    item: Object,
  },
  methods: {
    enableEditMode() {
      this.isEditMode = true;
      this.inputValue = this.item.title;
    },
    disableEditMode() {
      this.$emit("update-item", this.item.id, this.inputValue);
      this.isEditMode = false;
    },
  },
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.check-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 4px;
}
.check-btn img {
  width: 100%;
  height: 100%;
}
.delete-btn {
  width: 24px;
  height: 24px;
  padding: 4px;
}
.delete-btn img {
  width: 100%;
  height: 100%;
}
.content {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
