<template>
<h1 class="font-bold text-2xl ">
    About {{ name }}
</h1>
<Delete :color="'blue'" :width="'15px'" :height="'15px'"/>
<Edit :color="'red'" :width="'15px'" :height="'15px'"/>
<Add :color="'green'" :width="'15px'" :height="'15px'"/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import  { useStore } from 'vuex'
import Delete from './icons/delete.vue'
import Edit from './icons/Edit.vue'
import Add from './icons/Add.vue'
export default defineComponent({
    components:{
        Delete,
        Edit,
        Add,
    },
    setup() {
       
        const store = useStore()
        const name = computed(() => {
            return store.state.user.name
        })
        return{
            store,
            name,

        }
    },
})
</script>
