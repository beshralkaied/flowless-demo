<template>
  <div class="cards-style grid grid-cols-3 gap-4">
    <div class=" ">
      <DashboardCard
        :title="'i dont know the title 1'"
        :desc="'3/6 total'"
        :image="'https://dummyimage.com/30x30/000/fff.png'"
        :color="'lightgreen'"
      />
    </div>
    <div class="">
      <DashboardCard
        :title="'i dont know the title 2'"
        :desc="'12433 m3 '"
        :image="'https://dummyimage.com/30x30/000/fff.png'"
        :color="'darkslateblue'"
      />
    </div>
    <div class="">
      <DashboardCard
        :title="'ALERTS'"
        :desc="'286 New Alerts'"
        :image="'https://dummyimage.com/30x30/000/fff.png'"
        :color="'red'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardCard from "./DashboardCard.vue";

export default defineComponent({
  components: {
    DashboardCard,
  },
  setup() {},
});
</script>


<style scoped>
</style>