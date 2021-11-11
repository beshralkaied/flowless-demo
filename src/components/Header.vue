<template>
  <nav
    class="text-white pt-5 text-center px-2"
    :class="{ 'max-w-min': !expanded, 'w-60 ': expanded }"
  >
    <div class="mb-6 px-3"><img :src="logo" alt="" class="logo" /></div>

    <div v-for="item in items" :key="item">
      <div class="header">
        <hr />
        <router-link
          class="px-3 py-3"
          :to="{ name: item.name }"
          v-if="!item.subPages"
          >{{ item.title }}</router-link
        >
        <button class="w-full py-5" v-if="item.subPages" @click="toggleSubMenu">
          <div class="flex justify-between">
            <div>
              {{ item.title }}
            </div>
            <div v-if="expanded">
              <svg
                width="5px"
                viewBox="0 0 50 80"
                xml:space="preserve"
                v-if="expandedSub"
              >
                <polyline
                  fill="none"
                  stroke="white"
                  stroke-width="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="
	                45.63,75.8 0.375,38.087 45.63,0.375 "
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="5px"
                viewBox="0 0 50 80"
                xml:space="preserve"
                v-else
              >
                <polyline
                  fill="none"
                  stroke="white"
                  stroke-width="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="
	                0.375,0.375 45.63,38.087 0.375,75.8 "
                />
              </svg>
            </div>
          </div>
        </button>
        <div class="w-full text-left bg-white text-blue-400 rounded shadow-md">
          <div
            v-for="subPage in item.subPages"
            :key="subPage"
            :class="{ 'py-2 px-3': expandedSub }"
          >
            <router-link
              :to="{ name: subPage.name }"
              v-if="expandedSub"
              class="w-full"
              >{{ subPage.title }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <button id="1" class="p-1 pr-2 mt-5" @click="toggleMenu">
      <svg v-if="expanded" width="7px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline
          fill="none"
          stroke="white"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="7px"
        viewBox="0 0 50 80"
        xml:space="preserve"
      >
        <polyline
          fill="none"
          stroke="white"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
        />
      </svg>
    </button>
    <div>
      <button
        @click="logOut"
        :disabled="!log"
        :class="{ 'line-through': !log }"
      >
        LogOut
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { pages } from "../services/HeaderStoreService";
import logo from "../assets/flowless-logo.png";
import LoginService from "../services/LoginService";
import router from "../router";
export default defineComponent({
  components: {},
  setup() {
    let loginService = LoginService();
    let items = computed(() => pages);
    let rightArrow = ref(true);
    let leftArrow = ref(false);
    let expanded = ref(false);
    let expandedSub = ref(false);
    let log = loginService.check();
    function toggleMenu() {
      expanded.value = !expanded.value;
    }

    function toggleSubMenu() {
      expandedSub.value = !expandedSub.value;
    }

    function logOut() {
      loginService.logOut();
      router.push({ name: "LoginPage" });
    }

    return {
      items,
      toggleMenu,
      rightArrow,
      leftArrow,
      logo,
      expanded,
      toggleSubMenu,
      expandedSub,
      logOut,
      log,
    };
  },
});
</script>


<style scoped>
hr {
  width: 100%;
}

.w {
  width: 20px;
}

.bg-arrow {
  background-color: white;
  opacity: 0.4;
  border-radius: 50%;
}

nav {
  font-size: 1vw;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-image: linear-gradient(#134d68, #0d3345);
}

nav .header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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