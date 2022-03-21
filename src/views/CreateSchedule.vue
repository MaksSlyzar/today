<template>
	<div class="CreateSchedule">
		<div class="lg-sao-label">Create Schedule</div>

    <div class="CreateSteps">
      <div class="InputName">
        Enter name:
      </div>

      <div class="InputSeterday DisplayNone">
        INPUT SETERDAY
      </div>
    </div>
	</div>
</template>

<script>
export default {
	name: 'CreateSchedule',
	data: () => {
		return {
			scheduleName: ''
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
    bottom: 50px;

    .InputName {
      color: white;
    }
  }
}
</style>