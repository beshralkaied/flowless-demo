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
          @click="selectedItem(index)"
          class="w-full block"
          :class="{ 'cursor-not-allowed': loading }"
          :disabled="loading"
        >
          <div class="flex">
            <span v-if="loadingIdnex === index && loading"
              ><Icons
                :class="{ 'animate-spin': loadingIdnex === index && loading }"
                :name="'Loading'"
                :color="'red'"
              />
            </span>
            <span v-else><Icons :name="item" :color="'red'" /></span>
            <span
              class="ml-2"
              :class="{ 'animate-pulse': loadingIdnex === index && loading }"
              >{{ item }}</span
            >
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import Delete from "./icons/delete.vue";
import Edit from "./icons/Edit.vue";
import Icons from "./icons/ActionsIcons.vue";
export default defineComponent({
  emits: {
    onActionSelected: (name: string) => name == name,
  },
  props: {
    items: { type: Array as PropType<string[]>, required: true },
    multiple: Boolean,
  },

  components: {
    Icons,
    Edit,
    Delete,
  },

  setup(props, context) {
    let show = ref(false);
    let dropdownItem = ref<string[]>([]);
    let multiple = ref(false);
    let multipleIdnex = ref(-1);
    let loadingIdnex = ref(-1);
    let loading = ref(false);

    function selectedItem(index: number) {
      loadingIdnex.value = index;
      loading.value = true;
      show.value = false;
      context.emit("onActionSelected", dropdownItem.value[index]);
    }
    function drop() {
      show.value = !show.value;
    }
    function init() {
      dropdownItem.value = props.items;
    }
    onMounted(init);
    return {
      selectedItem,
      drop,
      show,
      dropdownItem,
      multiple,
      multipleIdnex,
      loading,
      loadingIdnex,
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