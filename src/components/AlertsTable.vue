<template>
  <div class="p-3">
    <div class="shadow bg-white">
      <div class="border py-1 px-2"><h2>Alerts</h2></div>
      <div class="p-3">
        <div class="flex justify-between py-3">
          <div>
            <span>Show</span>
            <input
              class="border mx-2"
              type="number"
              min="1"
              max="10"
              step="1"
              v-model="numb"
            />

            <span>entries</span>
          </div>
          <div><button @click="clear">clear</button></div>
          <div>
            <button @click="searchFiltired">Search</button>
            <input
              class="border"
              type="text"
              placeholder="Search for ids.."
              v-model="search"
            />
            {{ search }}
          </div>
        </div>
        <div>
          <table class="w-full">
            <thead class="sticky top-0 bg-white shadow">
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in pageData" :key="data">
                <th>{{ data.userId }}</th>
                <th>{{ data.id }}</th>
                <th>{{ data.title }}</th>
                <th>{{ data.completed }}</th>
              </tr>
            </tbody>
          </table>
          <h3>Showing 1 to {{ numb }} of {{ filtiredData.length }} entries</h3>
          <Pagination
            @onPageSelected="pageSelected"
            :filtiredData="filtiredData"
            :numb="numb"
            v-if="filtiredData.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Pagination from "./Pagination.vue";

import { defineComponent, onMounted, ref, watch } from "vue";

type datatype = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type dropdownItemType = {
  selected: boolean;
  title: string;
  value: string;
  disabled: boolean;
};

export default defineComponent({
  components: {
    Pagination,
  },
  props: {
    access_key: Boolean,
  },
  setup(props) {
    let Data = ref<datatype[]>([]);
    let test = ref<number[]>([]);
    let numb = ref(10);
    let search = ref("");
    let filtiredData = ref<datatype[]>([]);
    let pageData = ref<datatype[]>([]);
    let currentPage: number;
    

    function pageSelected(index: number) {
      currentPage = index;
      let data = [];
      for (
        let i = index * numb.value;
        i < index * numb.value + numb.value;
        i++
      ) {
        data.push(filtiredData.value[i]);
      }
      pageData.value = data;
    }

    function searchFiltired() {
      filtiredData.value = Data.value.filter((data) =>
        Object.values(data).join(" ").includes(search.value)
      );
      pageSelected(currentPage);
    }

    function clear() {
      search.value = "";
      numb.value = 10;
      searchFiltired();
    }

    
    function init() {
      axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos/",
      }).then(function (response) {
        Data.value = response.data;
        filtiredData.value = Data.value;
        pageSelected(0);
      });
     
    }

    onMounted(init);

    return {
      Data,
      numb,
      test,
      search,
      searchFiltired,
      filtiredData,
      pageSelected,
      clear,
      pageData,
    };
  },
});
</script>

<style scoped>
table,
th,
td {
  border: solid 1px rgb(244, 229, 229);
  padding: 10px;
}
</style>