<template>
<div class="flex justify-start">
      <Header />
  <div class="w-full">
         <button @click="isAccess"><span v-if="access_key">showing</span> <span v-else>hidding</span></button>
  <div class="shadow py-3 text-gray-500">
    
    <h2>Alerts</h2>
  </div>
  <AlertsTable :access_key="access_key" />
  </div>
</div>

 
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import AlertsTable from "./AlertsTable.vue";
import axios from "axios";
export default defineComponent({
  components: {
    Header,
    AlertsTable,
  },
  setup() {
    let access_key = ref<boolean>(true);
   

    function isAccess() {
        access_key.value = !access_key.value
    }
    return {
      access_key,
      isAccess,
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