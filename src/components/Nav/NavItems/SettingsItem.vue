<template>
  <div class="Item">
    <div class="Icon" @click="click">
      <SvgSprite class="logo-icon" symbol="icon-config" size="70" />
    </div>

    <div class="SaoArrow"></div>

    <div class="Line-sm"></div>

    <div class="Options">
      <div class="List">
        <div class="Item">DEV Skils</div>

        <div class="Item">DEV Exit</div>

        <div class="Item">DEV Hello world</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsItem",
  methods: {
    click () {
      this.$emit("changeActive", "SettingsItem");
    }
  }
}
</script>

<style scoped>

</style>