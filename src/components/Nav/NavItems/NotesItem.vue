<template>
  <div class="Item">
    <router-link to="/notates">
      <div class="Icon" @click="click">
        <SvgSprite class="logo-icon" symbol="icon-list" size="70" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotesItem",
  methods: {
    click() {
      this.$emit("changeActive", "NotesItem");
    },
    getNotes () {
      return this.$store.state.notes;
    },
    removeNote (noteIndex) {
      // console.log("hello world")
      this.swipeElement = noteIndex;

      setTimeout(() => {
        if (this.swipeElement == noteIndex)
            this.swipeElement = -1;
      }, 200);
    },
    changeNote (noteIndex) {
      this.$refs.inppanel.show(noteIndex);
    }
  },
  components: {
  },
  mounted() {
    
  },
  data: () => {
    return {
      swipeElement: -1
    }
  }
}

</script>

<style lang="scss" scoped>
.SwipeItem {
  animation-name: SwipeItemAnim;
  animation-duration: 0.2s;
}

@keyframes SwipeItemAnim {
  from {
    margin-left: 0;
  }

  to {
    margin-left: -250px;
  }
}
</style>