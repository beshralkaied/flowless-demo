<template>
  <div
    class="style-card shadow px-3 py-6  mt-6 bg-white"
    :style="{ 'border-left': '3px solid ' + color }"
  >
    <div class="mr-3">
      <h2 :style="{ color: color }">{{ title }}</h2>
      <h2>{{ desc }}</h2>
    </div>
    <img :src="image" alt="" class="mt-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    desc: String,
    image: String,
    color: String,
  },
  setup() {},
});
</script>


<style scoped>
.style-card {
  display: flex;
  border-radius: 5px;
  font-size: 1.5vw;
}

img {
  min-width: 30px;
  max-height: 30px;
  border-radius: 50%;
}
</style>