<template>
  <div class="ViewSchedule">
    <div class="lg-sao-label">View schedule</div>

    <div class="ScheduleItems">
      <div class="Item" v-for="item in schedule[0]" v-bind:key="item.key">
        {{item.item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewSchedule",
  data: () => {
    return {
      viewDay: 0,
      schedule: [
          [
            { item: "Математика", teacher: "Людмила Степанівна", time: ["9:30", "10:30"], key: 0 }
          ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ViewSchedule {
  .ScheduleItems {
    position: absolute;
    top: 50px;
    width: 100%;

    .Item {
      width: 600px;
      height: 70px;
      background: white;
    }
  }
}
</style>