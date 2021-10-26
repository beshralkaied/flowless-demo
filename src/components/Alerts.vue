<template>
  <Header />

  <div class="shadow py-3 text-gray-500">
    <h2>Alerts</h2>
  </div>
  <AlertsTable />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import AlertsTable from "./AlertsTable.vue"
export default defineComponent({
  components: {
    Header,
    AlertsTable,
  },
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