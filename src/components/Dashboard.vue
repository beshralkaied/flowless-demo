<template>
  <Header />
  
  <div class="shadow py-3 text-gray-500">
    <h2>Dashboard</h2>
  </div>
  <div class="container mx-auto px-4 grid grid-rows-4 grid-flow-col gap-4  bg-gray-100">
      
    <DashboardCards class=" col-span-3 "/>
  
    <div class="row-span-2 col-span-2 shadow bg-white">
      <div class="border"><h2>Accumulative Hourly Flowerate</h2></div>
      <div>1</div>
    </div>

    <div class="col-span-3 shadow bg-white" >
        <div class="border-b">
        <h2>Hourly Flowrate per Meter</h2>
      </div>
      <div class="">2</div>
    </div>
    
    <div class="row-span-2 shadow bg-white">
      <div class="border">
        <h2>Overview Statistics</h2>
      </div>
      <div class="">2</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import DashboardCards from "./DashboardCards.vue";
import HourlyFlowrate from "./HourlyFlowrate.vue";

export default defineComponent({
  components: {
    Header,
    DashboardCards,
    HourlyFlowrate,
  },
  setup() {},
});
</script>


<style scoped>
</style>