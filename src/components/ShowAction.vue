<template>
  <ActionsDropdown :items="items" @onActionSelected="actionSelected"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionsDropdown from "./ActionsDropdown.vue";
import Loading from "./icons/Loading.vue";
export default defineComponent({
  components: {
    ActionsDropdown,
    Loading,
  },
  setup() {
    let items = ["Add", "Delete", "Edit"];

    function actionSelected(name:string) {
        console.log(name)
    }
    return {
      items,
      actionSelected,
    };
  },
});
</script>

<style scoped>
</style>