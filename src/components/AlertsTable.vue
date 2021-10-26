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
              max="9"
              step="1"
              value="1"
            />
            <span>entries</span>
          </div>
          <div>
            <span>Search</span>
            <input class="border" type="text" />
          </div>
        </div>
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
              <td>5</td>
              <td>8</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
              <td>8</td>
              <td><button @click="hide">Hide</button></td>
            </tr>
            <tr>
              <td>CompanyB</td>
              <td>2</td>
              <td>0</td>
              <td>3</td>
              <td>4</td>
              <td>8</td>
              <td>8</td>
              <td><button @click="hide">Hide</button></td>
            </tr>
            <tr>
              <td>CompanyC</td>
              <td>0</td>
              <td>7</td>
              <td>2</td>
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
              <td>3</td>
              <td>8</td>
              <td>8</td>
              <td><button @click="hide">Hide</button></td>
            </tr>
            <tr>
              <td>CompanyE</td>
              <td>3</td>
              <td>0</td>
              <td>3</td>
              <td>0</td>
              <td>8</td>
              <td>8</td>
              <td><button @click="hide">Hide</button></td>
            </tr>
            <tr>
              <td><strong>Grand Total</strong></td>
              <td>10</td>
              <td>15</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>8</td>
              <td><button @click="hide">Hide</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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