<template>
  <div class="Item">
    <div class="Icon" @click="click">
      <SvgSprite class="logo-icon" symbol="icon-config" size="70" />
    </div>

    <div class="SaoArrow"></div>

    <div class="Line-sm"></div>

    <div class="Options">
      <div class="List">
        <div class="Item Item-blue">Add activity</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTimeItem",
  methods: {
    click () {
      this.$emit("changeActive", "MyTimeItem");
    }
  }
}
</script>

<style scoped>

</style>