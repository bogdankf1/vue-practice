<template>
  <div class="root">
    <div class="title">{{ title }}'s todolist</div>
    <div class="buttons-box">
      <div class="auth-btn">Sign In</div>
      <div class="auth-btn">Sign Up</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
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
.title {
  color: #fff;
  font-weight: 900;
  font-size: 32px;
}
.buttons-box {
  display: flex;
  align-items: center;
  gap: 16px;
}
.auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 48px;
  border: 1px solid #ccc;
  color: #fff;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>
