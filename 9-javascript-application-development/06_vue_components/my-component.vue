<template>
  <div class="user-container">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p class="balance">{{ user.balance }}</p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    user: Object 
  }
};
</script>

<style scoped>
h3 {
  text-decoration: underline;
}

.balance {
  font-style: italic;
}
</style>