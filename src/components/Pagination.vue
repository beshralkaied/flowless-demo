<template>
  <div class="pagination">
    <button @click="previous" :disabled="showprevious">
      <span :class="{ 'line-through': showprevious }">Previous</span></button
    >
    <span v-for="number in num" :key="number">
      <button
        :disabled="typeof number.number != 'number'"
        @click="getIndex(number.number - 1)"
        :class="{
          active:
            typeof number.number === 'number' &&
            currentPage === number.number - 1,
        }"
      >
        <span>{{ number.number }}</span>
      </button>
    </span>
    <!-- <button >1</button>
    <button class="active" >2</button>
    <button >3</button>
    <button >4</button>
    <button >5</button>
    <button >6</button> -->
    <button @click="next" :disabled="showNext">
      <span :class="{ 'line-through': showNext }">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";

type datatype = {
  number: number | string;
};

type datatype2 = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default defineComponent({
  emits: {
    onPageSelected: (number: number) => !isNaN(number),
  },
  props: {
    filtiredData: { type: Array as PropType<datatype2[]>, required: true },
    numb: { type: Number, required: true },
  },
  setup(props, context) {
    let data = computed<datatype2[]>(() => props.filtiredData);
    let num = ref<datatype[]>([]);
    let maxItem = computed(() => props.numb);
    let showNext = ref(false);
    let showprevious = ref(true);
    let firstButtonNum = 1;
    let step = 5;
    let currentPage = ref(0);

    function getIndex(index: number) {
      currentPage.value = index;
      context.emit("onPageSelected", index);
    }

    function pagination(i: number, x: number) {
      num.value = [];
      for (i; i <= data.value.length / maxItem.value; i++) {
        if (i < x) {
          num.value.push({ number: i });
        } else {
          num.value.push({ number: "..." });
          num.value.push({
            number: Math.ceil(data.value.length / maxItem.value),
          });
          break;
        }
      }
    }

    function next() {
      showprevious.value = false;
      if (firstButtonNum < data.value.length / maxItem.value - 5) {
        num.value = [];
        firstButtonNum += 5;
        step += 6;
        pagination(firstButtonNum, step);
        if (firstButtonNum == data.value.length / maxItem.value - 4) {
          showNext.value = true;
        }
      }
    }

    function previous() {
      showNext.value = false;
      if (firstButtonNum > 1) {
        num.value = [];
        firstButtonNum -= 5;
        step -= 6;
        pagination(firstButtonNum, step);
        if (firstButtonNum == 1) {
          showprevious.value = true;
        }
      }
    }

    function init() {
      pagination(firstButtonNum, step);
    }

    onMounted(init);

    watch(
      () => [props.numb, props.filtiredData],
      () => {
        pagination(firstButtonNum, step);
      }
    );
    return {
      data,
      num,
      next,
      previous,
      showNext,
      showprevious,
      getIndex,
      currentPage,
    };
  },
});
</script>

<style scoped>
.color {
  background-color: black;
}
.pagination {
  display: inline-block;
}

.pagination button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
}

.active {
  background-color: #144e68;
  color: white;
  border: 1px solid #144e68;
}

.pagination button:hover:not(.active) {
  background-color: #ddd;
}

.pagination button:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination button:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
