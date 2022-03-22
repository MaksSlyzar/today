<template>
	<div class="CreateSchedule">
		<div class="lg-sao-label">Create Schedule</div>

    <div class="CreateSteps">

      <div class="InputItems">
        <div>{{this.weekDaysNames[this.day]}}</div>

        <div ref="items">
          <div v-for="item in schedule[day]" v-bind:key="item.key">
            <input v-model="item.item" />
            <input v-model="item.teacher" />
            <input class="objectRoom" v-model="item.room" />
          </div>
        </div>

        <div>
          <input v-on:keydown="newInput" v-model="newInputValue" />
        </div>
      </div>

      <button class="PreviousButton" @click="previousStep">Previous</button>
      <button class="NextStepButton" @click="nextStep">Next</button>
    </div>
	</div>
</template>

<script>
export default {
	name: 'CreateSchedule',
	data: () => {
		return {
      weekDaysNames: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"],
			scheduleName: '',
      schedule: [
          [], [], [], [], []
      ],
      day: 0,
      newInputValue: ''
		}
	},
  methods: {
    newInput: function () {
      this.schedule[this.day].push({
        key: Math.round(Math.random() * 100000),
        item: "",
        teacher: "",
        room: "",
      });

      setTimeout(() => {
        this.$refs.items.children[this.$refs.items.children.length - 1].firstChild.focus()
        this.schedule[this.day].item = this.newInputValue;
        this.newInputValue = "";
      }, 2)
    },
    nextStep: function () {
      this.day += 1;
      if (this.day > 4)
        this.day = 0;
    },
    previousStep: function () {
      this.day -= 1;
      if (this.day < 0)
        this.day = 4;
    }
  }
}
</script>

<style lang="scss">
.DisplayNone {
  display: none;
}

.CreateSchedule {
  .CreateSteps {
    position: absolute;
    width: 100%;
    top: 10%;

    .Lessons {
      width: 15%;
      height: 20px;
    }

    .objectRoom{
      width: 2%;
    }
  }
}
</style>