<template>
  <div>
    <item
      v-for="(item) in filteredItems"
      v-bind:key="item.id"
      v-bind:item="item"
      v-on:item-click="onClick(item)"
      v-on:item-delete="onDelete(item)"
    ></item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "ActivesItems",
  props: ["todo"],
  components: {
    item: Item
  },
  computed: {
    filteredItems: function() {
      return this.todo.items.filter(item => {
        return !item.completed;
      });
    }
  },
  methods: {
    onClick: function(item) {
      this.todo.changeState(item);
    },
    onDelete: function(item) {
      this.todo.delete(item);
    }
  }
};
</script>

<style scoped>
</style> 
