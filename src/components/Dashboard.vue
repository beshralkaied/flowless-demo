<template>
  <div class="flex justify-start">
    <Header />
    <div class="w-full">
      <div class="shadow py-3 text-gray-500">
        <h2>Dashboard</h2>
      </div>
      <div
        class="
          container
          mx-auto
          px-4
          grid grid-rows-4 grid-flow-col
          gap-4
          bg-gray-100
        "
      >
        <DashboardCards class="col-span-3" />

        <div class="row-span-2 col-span-2 shadow bg-white max-w-3xl">
          <div class="border"><h2>Accumulative Hourly Flowerate</h2></div>
          <div>
            <Chart
              :labels="labels"
              :datasetsType="datasetsType"
              :datasetsLable="datasetsLable"
              :datasetsData="datasetsData"
              :datasetsBorderColor="datasetsBorderColor"
              :datasetsTension="datasetsTension"
              :datasetsBackgroundColor="datasetsBackgroundColor"
              :datasetsType2="datasetsType2"
              :datasetsLable2="datasetsLable2"
              :datasetsData2="datasetsData2"
              :datasetsBorderColor2="datasetsBorderColor2"
              :datasetsTension2="datasetsTension2"
              :datasetsBackgroundColor2="datasetsBackgroundColor2"
              :data="data"
              :datasets="datasets"
            />
          </div>
        </div>

        <div class="col-span-3 shadow bg-white">
          <div class="border-b">
            <h2>Hourly Flowrate per Meter</h2>
          </div>
          <div class=""></div>
        </div>

        <div class="row-span-2 shadow bg-white">
          <div class="border">
            <h2>Overview Statistics</h2>
          </div>
          <div class="">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import DashboardCards from "./DashboardCards.vue";
import HourlyFlowrate from "./HourlyFlowrate.vue";
import axios from "axios";
import Chart from "./Chart.vue";

export default defineComponent({
  components: {
    Header,
    DashboardCards,
    HourlyFlowrate,
    Chart,
  },
  setup() {
    let datasetsType = "line";
    let datasetsType2 = "line";
    let datasetsLable = "# of Votes";
    let datasetsBorderColor = "rgb(75, 192, 192)";
    let datasetsTension = 0.5;
    let datasetsBackgroundColor = "lightblue";
    let datasetsLable2 = "# of Votes";
    let datasetsBorderColor2 = "yellow";
    let datasetsTension2 = 0.5;
    let datasetsBackgroundColor2 = "red";
    let data = "data";
    let labels = [
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
    ];

    let datasetsData = [
      600, 800, 800, 790, 750, 760, 765, 770, 768, 835, 1380, 1385, 1395, 1370,
      1210, 1195, 1818, 1810, 1818, 1790, 1785, 1785, 1220, 795, 200,
    ];
    let datasetsData2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let datasets = [
      {
        type: "line",
        label: "# of Votes",
        data: [
          600, 800, 800, 790, 750, 760, 765, 770, 768, 835, 1380, 1385, 1395,
          1370, 1210, 1195, 1818, 1810, 1818, 1790, 1785, 1785, 1220, 795, 200,
        ],
        tension: 0.5,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "lightblue",
      },
      {
        type: "bar",
        label: "# of Votes",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "lightblue",
      },
    ];

    return {
      labels,
      datasetsType,
      datasetsLable,
      datasetsData,
      datasetsBorderColor,
      datasetsTension,
      datasetsBackgroundColor,
      datasetsType2,
      datasetsLable2,
      datasetsData2,
      datasetsBorderColor2,
      datasetsTension2,
      datasetsBackgroundColor2,
      datasets,
      data,
    };
  },
});
</script>


<style scoped>
</style>