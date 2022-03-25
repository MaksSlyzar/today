<template>
  <div class="Item">
    <div class="Icon" @click="click">
      <SvgSprite class="logo-icon" symbol="icon-list" size="70" />
    </div>

    <div class="SaoArrow"></div>

    <div class="Line"></div>

    <div class="Options">
      <div class="List">
        <div class="Item" v-for="note in getNotes()" :key="note.index" v-touch:swipe.left="() => removeNote(note.index)" :class="{ SwipeItem: swipeElement == note.index }">{{note.title}}</div>
      </div>
    </div>

    <InputPanel ref="inppanel" />
  </div>
</template>

<script>
import InputPanel from "@/components/InputPanel";

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
    }
  },
  components: {
    InputPanel
  },
  mounted() {
    this.$socket.emit("getNotes", {password: localStorage.getItem("password")});
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