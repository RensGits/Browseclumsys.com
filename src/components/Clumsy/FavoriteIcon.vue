<template>
   <span
        class="material-icons heart-icon"
        :class="{ 'heart-icon-active': getFavoriteIds.includes(data.Id) }"
        @click="handleToggleFavorite"
        >favorite</span
      >
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    porps: ['data'],
    computed:{
        ...mapGetters(['getFavoriteIds'])
    },
    methods:{
        
    },
    beforeMount(){
        console.log(this.getFavoriteIds)
    }
}
</script>

<style>

</style>