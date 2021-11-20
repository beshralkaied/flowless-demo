<template>
  <div class="flex">
    <Dropdown2
      :items="items"
      @onItemSelected="itemSelected"
      :dropdownItem="dropdownItem"
      :multiple="multiple"
    />
    <div>
      <h2>category :</h2>
      <div v-for="data in selectedData" :key="data">
        <div v-if="data.disabled" class="shadow mt-3">
          <h2>{{ data.title }}</h2>
          <span class="text-gray-400" v-if="data.value != ' '">{{
            data.value
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "./Dropdown2.vue";

type dropdownItemType = {
  selected: boolean;
  title: string;
  value: string;
  disabled: boolean;
  category: string | undefined;
  description: string | undefined;
};

export default defineComponent({
  components: {
    Dropdown2,
  },
  setup() {
    let items = ["Account settings", "Support", "License", "Sign out"];
    let multiple = true;
    let dropdownItem = [
      {
        selected: false,
        title: "Account settings",
        value: "Account settings description ",
        disabled: false,
        description: " change your sitting",
      },
      {
        selected: false,
        title: "Support",
        value: "Support description ",
        disabled: false,
        category: "Category for Support",
        description: "we can support you",
      },
      {
        selected: false,
        title: "License",
        value: "License description ",
        disabled: false,
        category: "Category for License",
        description: "we can give you License",
      },
      {
        selected: false,
        title: "Sign out",
        value: " ",
        disabled: false,
        description: "Sign out here",
      },
    ];
    let selectedData = ref<dropdownItemType[]>([]);
    function itemSelected(data: dropdownItemType[]) {
      selectedData.value = data;
    }

    return {
      items,
      itemSelected,
      dropdownItem,
      selectedData,
      multiple,
    };
  },
});
</script>


<style scoped>
</style>