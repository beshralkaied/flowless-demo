<template>
 <component :is="name" :color="color" :width="width" :height="height"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Add from './Add.vue'
import Delete from './delete.vue'
import Edit from './Edit.vue'
import Loading from './Loading.vue'

export default defineComponent({
  components:{
    Edit,
    Add,
    Delete,
    Loading,
  },
  props: {
    color: String,
    width: String,
    height: String,
    name: String,
  },

  setup(props) {
 


    return {
    };
  },
});
</script>

<style scoped>
</style>