<template>
  <div class="SaoNormalModal" :class="{ 'in': modalIn, DisplayNone: !visibility }">
    <div class="Modal" :class="{ open: open, closed: closed }">
      <div class="Modal-title">Title</div>
      <div class="Modal-body">Hello world</div>

      <div class="Modal-buttons">
        <div>
          <SvgSprite @click="clickYes" class="svg-icon" symbol="icon-yes" />
        </div>

        <div>
          <SvgSprite @click="clickNo" class="svg-icon" symbol="icon-no" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SvgSprite} from "vue-svg-sprite";
export default {
  name: "SaoNormal",
  components: {SvgSprite},
  data: () => {
    return {
      open: false,
      closed: true,
      modalIn: true,
      visibility: true
    }
  },
  methods: {
    openBody () {
      this.closed = false;
      this.open = true;
    },
    closeBody (){
      this.closed = true;
      this.open = false;
      setTimeout(() => {
        this.visibility = false;
      }, 300)
    },
    clickYes () {
      this.closeBody()
    },
    clickNo () {
      this.closeBody()
      this.modalIn = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.openBody();
    }, 200);
  }
}
</script>

<style lang="scss" scoped>
.DisplayNone {
  display: none;
}
.SaoNormalModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;

  .Modal {
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 250px);
    width: 500px;
    background: white;
    font-size: 26px;
    font-family: sao;
    opacity: .9;

    &-title {
      //height: 40px;
      padding: 15px;
    }

    &-body {
      background-color: #D8D8D8;
      box-shadow:
          0 10px 25px -15px rgba(0, 0, 0, .5) inset,
          0 -10px 25px -15px rgba(0, 0, 0, .5) inset;
      color: #808080;
      font-size: 20px;
      width: 400px;
      width: 100%;
      height: 100px;
    }

    &-buttons {
      padding: 24px 15px;
      margin-bottom: 60px;
      box-sizing: inherit;

      div {
        display: flex;
        justify-content: center;
        width: 50%;
        float: left;
      }
    }

    .svg-icon {
      width: 64px;
      height: 64px;
    }
  }

  .open {
    .Modal-body {
      transition-delay: .05s;
      transition-duration: .2s;
      transition-property: height, padding, opacity, box-shadow;
      transition-timing-function: ease-in-out;
      height: 100px;
    }
  }

  .closed {
    .Modal {
      transition-delay: .05s;
      transition-duration: .2s;
      transition-property: height, padding, opacity, box-shadow;
      transition-timing-function: ease-in-out;
    }

    .Modal-body {
      transition-delay: .05s;
      transition-duration: .2s;
      transition-property: height, padding, opacity, box-shadow;
      transition-timing-function: ease-in-out;
      opacity: 0;
      height: 0px;
    }
  }

  .showModal {
    transition-delay: .05s;
    transition-duration: .2s;
    transition-property: opacity, padding, opacity, box-shadow;
    transition-timing-function: ease-in-out;
    opacity: 1;

  }
}
.in {
  .SaoNormalModal {
    transition-delay: .05s;
    transition-duration: .2s;
    transition-property: opacity, padding, opacity, box-shadow;
    transition-timing-function: ease-in-out;
    opacity: 1;
  }
}

</style>