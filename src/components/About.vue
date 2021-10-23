<template>
<h1 class="font-bold text-2xl ">
    About {{ name }}
</h1>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import  { useStore } from 'vuex'
export default defineComponent({
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
