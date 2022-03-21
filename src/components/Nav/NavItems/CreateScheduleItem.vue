<template>
  <div class="Item">
    <div class="Icon" @click="click">
      <SvgSprite class="logo-icon" symbol="icon-list" size="70" />
    </div>

    <div class="SaoArrow"></div>
    <!--    <div class="Line"></div>-->
    <div class="Line-sm"></div>

    <div class="Options">
      <div class="List">
        <router-link to="/create-schedule">
          <div class="Item">Створити розклад</div>
        </router-link>

        <router-link to="/view-schedule">
          <div class="Item">Розклад</div>
        </router-link>
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