<template>
  <transition name="right">
    <nav class="bg-gray-600 text-white p-5 text-center" v-if="leftArrow">
      <div class="logo mb-6"><img :src="logo" alt="" /></div>

      <div v-for="item in items" :key="item">
        <div class="header">
          <hr />
          <router-link class="mr-3 p-6" to="/dashboard">{{
            item.dashboard.title
          }}</router-link>
          <hr />
          <router-link class="mr-3 p-6" to="/alerts">{{
            item.alerts.title
          }}</router-link>

          <router-link class="mr-3 p-6" to="/flowReadingsHistory">{{
            item.flowReadingsHistory.title
          }}</router-link>
          <hr />
        </div>
      </div>
      <button id="1" class="show p-1 pr-2 bg-arrow mt-5" @click="hideMenu()">
        <svg class="arrow" id="icon-arrow-left" viewBox="0 0 24 24">
          <title>icon-arrow-left</title>
          <polyline points="16.24 20.48 7.76 12 16.24 3.52" />
        </svg>
      </button>
    </nav>
  </transition>

  <nav class="bg-gray-600 text-white py-5 px-3 text-center" v-if="rightArrow">
    <div class="logo mb-6"><img :src="logo" alt="" /></div>
    <div v-for="item in items" :key="item">
      <div class="header">
        <hr />
        <router-link class="pt-10 pb-4" to="/dashboard">{{
          item.dashboard.title
        }}</router-link>
        <hr />
        <router-link class="py-4 pl-3" to="/alerts">{{
          item.alerts.title
        }}</router-link>
        <hr />
      </div>
    </div>

    <button id="2" class="show p-1 pl-2 bg-arrow mt-5" @click="showMenu()">
      <svg class="arrow" id="icon-arrow-right" viewBox="0 0 24 24">
        <title>icon-arrow-right</title>
        <polyline points="7.76 3.52 16.24 12 7.76 20.48" />
      </svg>
    </button>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { pages } from "../services/HeaderStoreService";
import logo from "../assets/flowless-logo.png";
export default defineComponent({
  setup() {
    let items = computed(() => pages);
    let rightArrow = ref(true);
    let leftArrow = ref(false);

    function hideMenu() {
      let z: any;
      z = document.getElementById("1");
      z.className = "show";
      rightArrow.value = true;
      leftArrow.value = false;
    }

    function showMenu() {
      let x: any;
      x = document.getElementById("2");
      x.className = "hide";
      rightArrow.value = false;
      leftArrow.value = true;
    }

    return {
      items,
      hideMenu,
      rightArrow,
      showMenu,
      leftArrow,
      logo,
    };
  },
});
</script>


<style scoped>
hr {
  width: 100%;
}

.bg-arrow {
  background-color: white;
  opacity: 0.3;
  border-radius: 50%;
}

nav {
  font-size: 1vw;
  max-width: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
}

nav .header {
  display: flex;

  flex-direction: column;
  align-items: flex-start;
}

.arrow {
  width: 30px;
  color: white;
}

.show {
  visibility: visible;
}

.hide {
  visibility: hidden;
}

.logo {
  max-width: 45px;
}

.right-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}

.right-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.right-enter-action {
  transition: all 0.3s ease;
}

/* .right-leave-from{
opacity: 1;
}

.right-leave-to{
opacity: 0;
}

.right-leave-action{
transition: all 2s ease;
} */
</style>