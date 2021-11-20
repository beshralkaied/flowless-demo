<template>
  <div class="dropdown relative container h-screan">
    <button class="shadow flex" @click="drop">
      <span>Option</span>
      <span v-if="!show">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span v-if="show">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
    <div class="shadow absolute top-12 bg-white" v-if="show">
      <div v-for="(item, index) in dropdownItem" :key="item" class="border-b-2">
        <button
          @click="!selectedItem(index)"
          class="w-full block"
          :disabled="multiple && multipleIdnex != index"
          :class="{
            'cursor-not-allowed active': multiple && multipleIdnex != index,
          }"
        >
          <div v-if="item.category" class="flex">{{ item.category }}</div>
          <div class="flex justify-between">
            <span>{{ item.title }}</span>
            <span class="ml-2 color" v-if="item.selected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          <div v-if="item.description" class="text-gray-400 flex">
            {{ item.description }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";

type dropdownItemType = {
  selected: boolean;
  title: string;
  value: string;
  disabled: boolean;
  category: string | undefined;
  description: string | undefined;
};

export default defineComponent({
  emits: {
    onItemSelected: (data: dropdownItemType[]) => data.length,
  },

  props: {
    items: Array as PropType<string[]>,
    dropdownItem: {
      type: Array as PropType<dropdownItemType[]>,
      required: true,
    },
    multiple: Boolean,
  },

  setup(props, context) {
    let show = ref(false);
    let dropdownItem = ref<dropdownItemType[]>([]);
    let multiple = ref(false);
    let multipleIdnex = ref(-1);
    function selectedItem(index: number) {
      dropdownItem.value[index].selected = !dropdownItem.value[index].selected;
      dropdownItem.value[index].disabled = !dropdownItem.value[index].disabled;
      context.emit("onItemSelected", dropdownItem.value);

      if (props.multiple) {
        multipleIdnex.value = index;
        multiple.value = !multiple.value;
      }
    }

    function drop() {
      show.value = !show.value;
    }

    function init() {
      dropdownItem.value = props.dropdownItem;
    }

    onMounted(init);

    return {
      selectedItem,
      drop,
      show,
      dropdownItem,
      multiple,
      multipleIdnex,
    };
  },
});
</script>


<style scoped>
.color {
  color: lightgreen;
}
.dropdown {
  display: inline-block;
}
.dropdown button {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
}
.active {
  background-color: #ddd;
}
.dropdown button:hover:not(.active) {
  background-color: #ddd;
}
.dropdown button:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.dropdown button:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>