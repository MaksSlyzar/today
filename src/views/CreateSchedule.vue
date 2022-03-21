<template>
	<div class="CreateSchedule">
		<div class="lg-sao-label">Create Schedule</div>

    <div class="CreateSteps">
<!-- Monday -->
      <div class="InputMonday">
        <input type="text" class="Lessons" id="FirstLessonMonday"/><br/>
        <input type="text" class="Lessons" id="SecondLessonMonday"/><br/>
        <input type="text" class="Lessons" id="ThirdLessonMonday"/><br/>
        <input type="text" class="Lessons" id="FourthLessonMonday"/><br/>
      </div>
<!--Tuesday -->
      <div class="InputTuesday DisplayNone">
        <input type="text" class="Lessons" id="FirstLessonTuesday"/><br/>
        <input type="text" class="Lessons" id="SecondLessonTuesday"/><br/>
        <input type="text" class="Lessons" id="ThirdLessonTuesday"/><br/>
        <input type="text" class="Lessons" id="FourthLessonTuesday"/><br/>
      </div>
<!--Wednesday-->
      <div class="InputWednesday DisplayNone">
        <input type="text" class="Lessons" id="FirstLessonWednesday"/><br/>
        <input type="text" class="Lessons" id="SecondLessonWednesday"/><br/>
        <input type="text" class="Lessons" id="ThirdLessonWednesday"/><br/>
        <input type="text" class="Lessons" id="FourthLessonWednesday"/><br/>
      </div>
<!--Thursday-->
      <div class="InputThursday DisplayNone">
        <input type="text" class="Lessons" id="FirstLessonThursday"/><br/>
        <input type="text" class="Lessons" id="SecondLessonThursday"/><br/>
        <input type="text" class="Lessons" id="ThirdLessonThursday"/><br/>
        <input type="text" class="Lessons" id="FourthLessonThursday"/><br/>
      </div>
<!--Friday-->
      <div class="InputWednesday DisplayNone">
        <input type="text" class="Lessons" id="FirstLessonFriday"/><br/>
        <input type="text" class="Lessons" id="SecondLessonFriday"/><br/>
        <input type="text" class="Lessons" id="ThirdLessonFriday"/><br/>
        <input type="text" class="Lessons" id="FourthLessonFriday"/><br/>
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
    top: 10%;
    left: -40%;
    color: white;
    line-height: 1.8;

    .Lessons{
      width: 15%;
      height: 20px;
    }

    .InputMonday {

    }
    .InputTuesday{

    }
    .InputWednesday{

    }
    .InputThursday{

    }
    .InputWednesday{

    }

  }
}
</style>