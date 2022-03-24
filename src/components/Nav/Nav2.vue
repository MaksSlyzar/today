<template>
  <div class="Nav" :class="{ DisplayNone: !visibilityNav }">
    <div class="Items"
         v-bind:class="{ DisplayNone: !showItems,
                         hide: hide_class,
                         show: show_class}"
         id="navItems">
      <CreateScheduleItem @change-active="activeNote" v-bind:class="{ Active: navItems.CreateScheduleItem.active }" />
      <NotesItem @change-active="activeNote" v-bind:class="{ Active: navItems.NotesItem.active }" />
      <SettingsItem @change-active="activeNote" v-bind:class="{ Active: navItems.SettingsItem.active }"/>
    </div>
  </div>
</template>

<script>
import SettingsItem from "@/components/Nav/NavItems/SettingsItem";
import NotesItem from "@/components/Nav/NavItems/NotesItem";
import CreateScheduleItem from "@/components/Nav/NavItems/CreateScheduleItem";

export default {
  name: "Nav2",
  components: {
    SettingsItem,
    NotesItem,
    CreateScheduleItem
  },
  data: () => {
    return {
      navItems: {
        SettingsItem: {active: false},
        NotesItem: {active: false},
        DownloadItem: {active: false},
        CreateScheduleItem: {active: false}
      },
      showItems: true,
      hide_class: false,
      show_class: false,
      visibilityNav: false
    }
  },
  methods: {
    activeNote (evt) {
      for (let itemIter in this.navItems) {
        if (itemIter !== evt) {
          this.navItems[itemIter].active = false;
        } else {
          this.navItems[itemIter].active = !this.navItems[itemIter].active;
        }
      }
    },
    swipeHandlerBottom () {
      this.showItems = !this.showItems;
    },
    show () {
      this.visibilityNav = true;
      this.show_class = true;
      this.hide_class = false;

      setTimeout(() => {
        this.show_class = false;
      }, 500)
    },
    hide () {
      this.visibilityNav = true;
      this.show_class = false;
      this.hide_class = true;

      setTimeout(() => {
        this.hide_class = false;
        this.visibilityNav = false;
      }, 450)
    }
  }
}
</script>

<style lang="scss">
.DisplayNone {
  display: none;
  visibility: hidden;
}

.Nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  text-align: left;
  background: rgba(0, 0, 0, 0.2);

  .Items {
    position: relative;
    top: calc(100% - 500px);
    width: 400px;
    margin-left: 5px;
    //display: ;
    //top: calc(100% - 600px);

    .Item {
      position: relative;
      display: block;
      //width: 200px;
      width: min-content;
      height: 70px;
      margin-top: 30px;

      .Icon {
        width: 70px;
        height: 70px;
        padding: 6px;
        border: 2px solid rgba(255, 255, 255, 0.9);
        border-radius: 50%;
      }

      svg {
        position: absolute;
        fill: white;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
      }

      .Options {
        display: none;
        position: absolute;
        width: 250px;
        left: 120px;
        top: -150px;
        height: 400px;
        overflow-x: hidden;
        overflow-y: scroll;

        .List {
          width: 250px;
          position: relative;
          vertical-align: middle;
          display: table-cell;
          height: 400px;

          .Item {
            display: inline-flex;
            list-style: none;
            background-color: white;
            width: 100%;
            height: 70px;
            margin: 2px;
            font-family: SAOUI-Bold;
            font-size: 20px;
            align-items: center;
          }
        }
      }

      .Options::-webkit-scrollbar {
        display: block;
        width: 4px;
      }

      .Options::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.0);
      }

      .Options::-webkit-scrollbar-thumb {
        background-color: #E5AC1B;
      }

      .SaoArrow {
        display: none;
        position: absolute;
        mask-type: alpha;
        -webkit-mask-size: 30px 20px;
        -webkit-mask-image: url("../../assets/sao-arrow.png");
        width: 100px;
        background-color: white;
        top: 33px;
        left: 85px;
        height: 100px;
        width: 45px;
        height: 30px;
        -webkit-mask-repeat: no-repeat;
      }

      .Line {
        position: absolute;
        display: none;
        top: -100px;
        left: 117px;
        width: 3px;
        height: 300px;
        background: white;
        box-shadow: 0px 0px 8px 2px #7a7a7a;
        border-radius: 40%;
      }

      .Line-sm {
        position: absolute;
        display: none;
        top: -50px;
        left: 117px;
        width: 3px;
        height: 200px;
        background: white;
        box-shadow: 0px 0px 8px 2px #7a7a7a;
        border-radius: 40%;
      }
    }

    .Active {
      svg {
        fill: white;
        background: #E5AC1B;
      }

      .Icon {
        width: 70px;
        height: 70px;
        padding: 6px;
        border: 2px solid #E5AC1B;
        border-radius: 50%;
      }

      .SaoArrow {
        display: block;
      }

      .Line {
        display: block;
      }

      .Line-sm {
        display: block;
      }

      .Options {
        display: block;
      }
    }
  }
}

@keyframes showAnim {
  from {
    top: 0;
  }

  to {
    top: calc(100% - 500px);
  }
}

@keyframes hideAnim {
  from {
    top: calc(100% - 500px);
  }

  to {
    top: -250px;
  }
}

.show {
  animation-duration: 0.5s;
  animation-name: showAnim;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

.hide {
  animation-duration: 0.5s;
  animation-name: hideAnim;
  animation-iteration-count: inherit;
  animation-direction: normal;
}

</style>