<template>
  <div id="app-container">
    <app-header v-bind:tab="activeTab" v-on:tab-change="tabChange"></app-header>
    <app-body v-bind:tab="activeTab" v-bind:todo="toDo"></app-body>
    <app-footer v-on:item-add="itemAdd"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ToDo from "./model/ToDo";
import ToDoItem from "./model/ToDoItem";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-body": Body
  },
  data: function() {
    return {
      currentRoute: window.location.pathname,
      clickedTab: -1,
      toDo: new ToDo()
    };
  },
  methods: {
    tabChange: function(tab) {
      this.clickedTab = tab;
    },
    itemAdd: function(content) {

      let item = new ToDoItem(content, new Date());
      this.toDo.add(item);
    }
  },
  computed: {
    activeTab: function() {
      let tab;

      if (this.clickedTab > -1) {
        return this.clickedTab;
      }

      switch (window.location.pathname) {
        case "/all-items":
          tab = 1;
          break;
        case "/pending-items":
          tab = 2;
          break;
        case "/active-items":
          tab = 3;
          break;
      }

      return tab;
    }
  }
};
</script>

<style>
body {
  background: linear-gradient(45deg, #6e5771, #f74991);
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

#app-container {
  max-width: 490px;
  margin: 0 auto;
  height: 95vh;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0, -50%);
  top: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
