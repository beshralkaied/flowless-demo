<template>
    <h1 class="mb-6 text-3xl font-extrabold">Home</h1>

    <p class="mb-6">Name in store is: {{ name }}</p>
    <input v-model="newName" type="text" class="p-2 mr-4 border border-gray-600 rounded">
    <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Submit</button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import router, { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        
        const store = useStore()
        const name = computed(() => {
            return store.state.user.name
        })
        let newName = ref('')
        const router = useRouter()


        function saveName() {
            store.dispatch('saveName', newName.value)
            newName.value = ''
            router.push('/about')
        }

        return {
            name,
            newName,
            saveName,
        }
    },

})
</script>

<style scoped>
</style>
