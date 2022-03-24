<template>
  <div @click="clickButton" class="ShowNavButton">SHOW</div>
</template>

<script>
export default {
  name: "ShowNavButton",
  methods: {
    clickButton () {
      this.$emit("showNav", null);
    }
  }
}
</script>

<style scoped>
.ShowNavButton {
  position: fixed;
  bottom: 0px;
  width: 90px;
  height: 36px;
  background: white;
  font-family: SAOUI-Bold;
  padding-top:10px;
  cursor: pointer;
  user-select: none;
}
</style>