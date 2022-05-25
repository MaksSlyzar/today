<template>
	<div class="CreateSchedule">
		<div class="lg-sao-label">Create Schedule</div>

    <div class="CreateSteps">
      <input-teachers-step />

<!--      <button class="PreviousButton" @click="previousStep">Previous</button>-->
<!--      <button class="NextStepButton" @click="nextStep">Next</button>-->
    </div>
	</div>
</template>

<script>
import InputTeachersStep from "@/components/CreateSchedule/InputTeachersStep";
export default {
	name: 'CreateSchedule',
  components: {InputTeachersStep},
  data: () => {
		return {
      weekDaysNames: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"],
			scheduleName: '',
      schedule: [
          [], [], [], [], []
      ],
      day: 0,
      newInputValue: '',
      newTeacherInputValue: '',
      teachers: []
		}
	},
  methods: {
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

    input {
      width: 200px;
      height: 25px;
      background: white;
      opacity: .9;
      border: 0;
      margin: 5px;
    }
  }
}
</style>