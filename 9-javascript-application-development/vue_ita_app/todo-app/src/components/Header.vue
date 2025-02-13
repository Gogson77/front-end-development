<template>
  <header>
    <div :class="[tab === 1 ? '' : 'inactive-header-cell', 'header-cell']" id="tab-1" v-on:click="tabChange(1)"></div>
    <div :class="[tab === 2 ? '' : 'inactive-header-cell', 'header-cell']" id="tab-2" v-on:click="tabChange(2)"></div>
    <div :class="[tab === 3 ? '' : 'inactive-header-cell', 'header-cell']" id="tab-3" v-on:click="tabChange(3)"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["tab"],
  methods: {
    tabChange: function(tabNo) {
      switch (tabNo) {
        case 1:
          history.pushState("", "", "/all-items");
          break;
        case 2:
          history.pushState("", "", "/pending-items");
          break;
        case 3:
          history.pushState("", "", "/active-items");
          break;
      }

      this.$emit("tab-change", tabNo);
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  height: 80px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background: #f9f9f9;

  flex-shrink: 0;
}

.header-cell {
  flex: 1 1 33%;
  background: white;

  text-align: center;
  padding: 8px;

  background-repeat: no-repeat !important;
  background-position: center !important;
}

.header-cell:hover {
  background: #ffffff;
  cursor: pointer;
}

.header-cell:first-child {
  border-top-left-radius: 10px;

  background-image: url(~@/assets/icon-1.png);
}

.header-cell:nth-child(2) {
  background-image: url(~@/assets/icon-2.png);
}

.header-cell:last-child {
  border-top-right-radius: 10px;

  background-image: url(~@/assets/icon-3.png);
}

.header-cell.inactive-header-cell:first-child {
  background-image: url(~@/assets/icon-1-light.png);
}

.header-cell.inactive-header-cell:nth-child(2) {
  background-image: url(~@/assets/icon-2-light.png);
}

.header-cell.inactive-header-cell:last-child {
  background-image: url(~@/assets/icon-3-light.png);
}

.inactive-header-cell {
  background: transparent;
}
</style> 