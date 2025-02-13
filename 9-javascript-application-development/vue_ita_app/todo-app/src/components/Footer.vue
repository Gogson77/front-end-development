<template>
  <footer>
    <input id="content" type="text" placeholder="what you have to do..." v-model="content" />
    <span id="add-btn" v-on:click="onClick">Add</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      content: ""
    };
  },
  methods: {
    onClick: function() {
      this.$emit("item-add", this.content);
    }
  }
};
</script>

<style scoped>
footer {
  display: flex;
  padding: 8px 4px;
  align-items: center;
  flex-shrink: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: #f5f5f5;
}

input {
  border: none;
  padding: 8px;

  flex-grow: 1;

  background: transparent;
}

input:focus,
input:active,
input:hover {
  border: none;
  outline: none;
}

#add-btn {
  padding-right: 14px;
  font-weight: bold;
  cursor: pointer;
  color: grey;
}

#add-btn:hover {
  color: rgb(58, 58, 58);
}
</style> 