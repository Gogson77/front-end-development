<template>
  <div id="app-body">
    <div id="all-items" class="items-container" v-bind:style="marginLeft">
      <div id="all-items-container">
        <span class="no-items-message">No Items</span>
        <all-items v-bind:todo="todo"></all-items>
      </div>
    </div>

    <div id="active-items" class="items-container">
      <div id="active-items-container">
        <span class="no-items-message">No Items</span>
        <active-items v-bind:todo="todo"></active-items>
      </div>
    </div>

    <div id="completed-items" class="items-container">
      <div id="completed-items-container">
        <span class="no-items-message">No Items</span>
        <completed-items v-bind:todo="todo"></completed-items>
      </div>
    </div>
  </div>
</template>

<script>
import AllItems from "./AllItems";
import ActiveItems from "./ActiveItems";
import CompletedItems from "./CompletedItems";

export default {
  name: "Body",
  components: {
    "all-items": AllItems,
    "active-items": ActiveItems,
    "completed-items": CompletedItems
  },
  props: ["tab", "todo"],
  computed: {
    marginLeft: function() {
      return "margin-left: " + -(this.tab - 1) * 100 + "%";
    }
  }
};
</script>

<style scoped>
#app-body {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
}



::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  background-color: #c7c7c7;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #909090;
}

.items-container {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;
}

.items-container .no-items-message {
  display: none;
  margin: auto;
}

.no-items-message:only-child {
  display: block;
}

#all-items-container,
#active-items-container,
#completed-items-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style> 