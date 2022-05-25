<template>
  <div class="InputTeachersStep">
    <div class="m-sao-label">Input teachers</div>

    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: "InputTeachersStep",
  data: () => {
    return {
      teachers: [new Teacher({})]
    }
  },
  mounted() {

  }
}

class Teacher {
  constructor ({ name, surname, items }) {
    this.name = name?name:'';
    this.surname = surname?surname:'';
    this.items = items?items:[];
    this.key = "T" + Math.round(Math.random() * 10000);
  }
}
</script>

<style lang="scss" scoped>

</style>