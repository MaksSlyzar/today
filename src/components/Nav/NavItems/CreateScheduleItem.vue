<template>
  <div class="Item">
    <router-link to="/create-schedule">
      <div class="Icon" @click="click">
        <SvgSprite class="logo-icon" symbol="icon-list" size="70" />
      </div>
    </router-link>

    <div class="SaoArrow"></div>

    <div class="Line-sm"></div>
    <!--    <div class="Line"></div>-->

    <div class="Options">
      <div class="List">
        <div class="Item"></div>
        <div class="Item"></div>
        <div class="Item"></div>
        <div class="Item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateScheduleItem",
  methods: {
    click () {
      this.$emit("changeActive", "CreateScheduleItem");
      console.log("Awadakidarwa")
    }
  }
}

</script>

<style lang="scss" scoped>

</style>