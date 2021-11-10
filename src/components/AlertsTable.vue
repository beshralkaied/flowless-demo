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
              v-model="num"
            />

            <span>entries</span>
          </div>
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
        <div v-if="access_key">
          <table>
            <thead class="sticky top-0 bg-white shadow">
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in filtiredData" :key="data">
                <th v-if="index < num">{{ data.userId }}</th>
                <th v-if="index < num">{{ data.id }}</th>
                <th v-if="index < num">{{ data.title }}</th>
                <th v-if="index < num">{{ data.completed }}</th>
              </tr>
            </tbody>
          </table>
          <h3>Showing 1 to {{ num }} of {{ Data.length }} entries</h3>
          {{ test }}
        </div>
        <div v-else>
          <table class="w-full">
            <thead class="">
              <tr>
                <th>Alert Key</th>
                <th>Metering Station</th>
                <th>Time</th>
                <th>Code</th>
                <th>Value Detected</th>
                <th>Uppor Limit</th>
                <th>Lower Limit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CompanyA</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>8</td>
                <td>0</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
              <tr>
                <td>CompanyB</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
              <tr>
                <td>CompanyC</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>8</td>
                <td>8</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
              <tr>
                <td>CompanyD</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
              <tr>
                <td>CompanyE</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><button @click="hide">Hide</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";

type datatype = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export default defineComponent({
  props: {
    access_key: Boolean,
  },
  setup(props) {
    let Data = ref<datatype[]>([]);
    let test = ref<number[]>([]);
    let num = ref(10);
    let search = ref("");
    let filtiredData = ref<datatype[]>([]);

    function inputNum() {
      test.value.length = Data.value.length / num.value;
      for (let i = 0; i < test.value.length; i++) {
        test.value[i] = i;
      }
    }
    function init() {
      axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos/",
      }).then(function (response) {
        Data.value = response.data;
        filtiredData.value = Data.value;
        console.log()
      });

      inputNum();
      
    }
    onMounted(init);
    function searchFiltired() {
      filtiredData.value = Data.value.filter((data) => 
        Object.values(data).join(" ").includes(search.value))
    }

    return {
      Data,
      inputNum,
      num,
      test,
      search,
      searchFiltired,
      filtiredData,
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