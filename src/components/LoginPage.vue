<template>
  <div class="flex main-color">
    <Header />
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
        <img
          class="rounded-full"
          src="https://dummyimage.com/100x100/c2b8c2/fff"
          alt=""
        />
        <div class="mt-3">
          <h3>User Name: </h3>
          <input class="p-2" type="text" v-model="user"/>
        </div>
        <div class="mt-3">
          <h3>Pasowrd: </h3>
          <input class="p-2" type="text" v-model="passowrd"/>
        </div>

        <button @click="submit" class="btn mt-3 p-2 bg-indigo-400 ring-4 ring-indigo-300">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./Header.vue";
import LoginService from '../services/LoginService'
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    let loginService = LoginService()
    let user = ref('')
    let passowrd =ref('')

    function submit() {
      loginService.set(user.value, passowrd.value)
    }

    return{
      submit,
      user,
      passowrd,
    }
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