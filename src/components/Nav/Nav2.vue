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

<style lang="scss" scoped>

.DisplayNone {
  display: none;
  visibility: hidden;
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