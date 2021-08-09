<template>
  <div class="root">
    <div class="select-all-btn" @click="$emit('toggle-all')">
      <img src="../../assets/chevronDownIcon.svg" alt="checkmark-icon" />
    </div>
    <input
      v-model="inputValue"
      placeholder="Add your todo"
      @keyup.enter="onSubmit"
    />
  </div>
</template>
<script>
export default {
  name: "InputField",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {},
  methods: {
    onSubmit() {
      if (this.inputValue) {
        this.$emit("add-item", this.inputValue);
        this.inputValue = "";
      }
    },
  },
  emits: ["add-item", "toggle-all"],
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
}
.select-all-btn {
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid black;
}
.select-all-btn img {
  width: 100%;
  height: 100%;
}
input {
  flex: 1;
  height: 100%;
  border-radius: 10px;
}
</style>
