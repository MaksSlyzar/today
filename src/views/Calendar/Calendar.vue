<template>
  <div class="Calendar">
    <div class="Table">
      <div class="WeekDaysNames">
        <div class="Day" v-for="(wd, wdi) in WEEK_DAYS_NAMES" v-bind:key="wdi">{{wd}}</div>
      </div>

      <div class="Days">
        <div class="Week" v-for="(week, weekInd) in table().days" v-bind:key="weekInd">
          <span style="display: flex" v-if="weekInd==0"><div class="PrevDay" v-for="day in table().previousDays" v-bind:key="day">{{day}}</div></span>

          <span style="display: flex"><div class="Day" v-for="day in week" v-bind:key="day">{{day}}</div></span>

          <span v-if="weekInd == table().days.length - 1" style="display: flex"><div class="Day empty" v-for="day in table().empty" v-bind:key="day">{{day}}</div></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data: () => {
    return {
      day: 1,
      month: 1,
      year: 2022,
      calendar: {
        month: 0,
        year: 2022,
      },
      WEEK_DAYS_NAMES: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      MONTH_DATA: [[31, 5], [29, 2], [31, 2], [30, 5], [31, 0], [30, 3], [31, 5], [31, 1], [30, 4], [31, 6], [30, 2], [31, 5]]
    }
  },
  methods: {
    table () {
      const returned = { previousDays: [], days: [[]], nextDays: [], empty: [] }


      for (let prevDay = this.MONTH_DATA[this.month][0] - this.MONTH_DATA[this.month][1]; prevDay < this.MONTH_DATA[this.month][0]; prevDay++) {
        returned.previousDays.push(prevDay)
      }

      let psNextDay = 0;
      for (let nextDay = this.MONTH_DATA[this.month][1] + this.MONTH_DATA[this.month][0]; nextDay < this.MONTH_DATA[this.month][1] + this.MONTH_DATA[this.month][0] + (this.MONTH_DATA[this.month][1] + this.MONTH_DATA[this.month][0] % 7); nextDay++) {
        psNextDay++;
        returned.nextDays.push(psNextDay)
      }

      let psNewWeek = this.MONTH_DATA[this.month][1];
      for (let doDay = this.MONTH_DATA[this.month][1]; doDay < this.MONTH_DATA[this.month][0]; doDay++) {
        if (psNewWeek == 7) {
          returned.days.push([])
          psNewWeek = 0;
        }

        returned.days[returned.days.length - 1].push(doDay);
        psNewWeek++;
      }

      returned.empty = [...Array(5).keys()];

      console.log(returned)
      return returned
    }
  },
  mounted() {
    this.table();
  }
}
</script>

<style scoped lang="scss">
.Table {
  .WeekDaysNames {
    display: flex;
    margin-bottom: 10px;

    .Day {
      min-width: 70px;
      font-family: SAOUI-Bold;
      color: white;
      font-size: 22px;
    }
  }

  .Days {
    .Week {
      display: flex;
      width: 100%;

      .PrevDay {
        min-width: 70px;
        font-family: SAOUI-Bold;
        color: white;
        font-size: 22px;
      }

      .Day {
        min-width: 70px;
        font-family: SAOUI-Bold;
        color: white;
        font-size: 22px;
      }

      .empty { visibility: hidden; }
    }
  }
}
</style>


//TODO: View all calendar days, and blue if active day