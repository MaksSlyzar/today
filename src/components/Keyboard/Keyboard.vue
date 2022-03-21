<template>
  <div class="Keyboard kb-down">
    <div v-for="(row, row_index) in keyboard" :key="row_index" class="Row">
      <span v-for="(key, key_index) in row" :key="key_index" class="Key">
        <span v-if="typeof key == 'string'">{{key}}</span>
        <span v-else>-</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  data: () => {
    return {
      keyboard: [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', { val: 'DELETE' }]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Keyboard {
  position: absolute;
  display: table;
  background: white;
  height: 200px;
  width: 100%;

  .Row {
    display: table-row;
  }

  .Key {
    display: table-cell;
    padding-right: 50px;
    border-collapse: initial;
    background: gray;
    margin-left: 20px;
    border-radius: 10px;
  }
}

.kb-down {
  bottom: 0;
}
</style>