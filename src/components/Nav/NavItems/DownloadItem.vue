<template>
  <div class="Item">
    <div class="Icon" @click="click">
      <SvgSprite class="logo-icon" symbol="icon-list" size="70" />
    </div>

    <div class="SaoArrow"></div>

<!--    <div class="Line"></div>-->

    <div class="Options">
      <div class="List">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadItem",
  methods: {
    click () {
      this.$emit("changeActive", "DownloadItem");
    }
  }
}

</script>

<style lang="scss" scoped>

</style>