<template>
  <div class="flex main-color">
    <div class="w-full grid justify-items-center p-14">
      <div
        class="
          border-2 border-white
          bg-gray-300
          mw
          grid
          justify-items-center
          p-6
          rounded-2xl
          shadow
        "
      >
      <div v-if="louding">Loading...</div>
        <div v-else>
          <img
            class="rounded-full"
            src="https://dummyimage.com/100x100/c2b8c2/fff"
            alt=""
          />
          <div class="mt-3">
            <h3>User Name:</h3>
            <input class="p-2" type="text" v-model="user" />
          </div>
          <div class="mt-3">
            <h3>Pasowrd:</h3>
            <input class="p-2" type="password" v-model="passowrd" />
          </div>

          <button
            @click="submit"
            class="btn mt-3 p-2 bg-indigo-400 ring-4 ring-indigo-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import LoginService from "../services/LoginService";
import router from "../router";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    let loginService = LoginService();
    let user = ref("");
    let passowrd = ref("");
    let louding = ref(false);
    async function submit() {
      louding.value = true;
      await loginService.login(user.value, passowrd.value);
      if (loginService.check()) {
        try {
          router.go(-1)
        } catch (error) {
           router.push({name:"Dashboard"});
        }
       
      } else {
        alert("Wronge UserName or Passowrd");
      }
      louding.value = false;
    }

    return {
      submit,
      user,
      passowrd,
      louding,
    };
  },
});
</script>


<style scoped>
img {
  max-width: 100px;
}

input {
  max-width: 200px;
}

.mw {
  min-width: 350px;
  height: fit-content;
}

.btn:hover {
  background-color: blanchedalmond;
  border-radius: 7px;
}
</style>