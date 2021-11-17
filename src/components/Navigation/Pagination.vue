<template>
  <div class = "pagination-container shadow" :class="{ 'hide' : getMobileFiltersVisible}" v-if="getVisibleClumsys.length > 0">
      <!-- Button for previous page -->
      <!-- On the first page, the hide class gets applied, greying out the previous arrow -->
      
      <span class="material-icons pagination-arrows" :class="{'hide' : getCurrentPage === 0}" @click= 'setPreviousPage'>arrow_left</span>
      <p  v-if="getCurrentPage > 2" @click='setCurrentPage(0)' >0</p>
      <p v-if='getNumberOfPages > 3 && getCurrentPage > 3'>...</p>
      <p  v-if="getCurrentPage > 1" @click='setCurrentPage(getCurrentPage - 2)'>{{getCurrentPage - 2}}</p>
      <p  v-if="getCurrentPage > 0" @click='setCurrentPage(getCurrentPage - 1)'>{{getCurrentPage - 1}}</p>
      <p class = "current-page">{{getCurrentPage}}</p>
      <p v-if="getCurrentPage + 1 < getNumberOfPages" @click='setCurrentPage(getCurrentPage + 1)' >{{getCurrentPage + 1}}</p>
      <p v-if="getCurrentPage + 2 < getNumberOfPages" @click='setCurrentPage(getCurrentPage + 2)' >{{getCurrentPage + 2}}</p>
      <p v-if='getCurrentPage + 3 < getNumberOfPages'>...</p>
      <p  v-if='getCurrentPage != getNumberOfPages' @click='setCurrentPage(getNumberOfPages)'>{{getNumberOfPages}}</p>
      
      <!-- Button for next page -->
      <span class="material-icons pagination-arrows" :class="{'hide': getCurrentPage === getNumberOfPages}" @click= 'setNextPage'>arrow_right</span>  
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {

    computed:{
        ...mapGetters(['getCurrentPage', 'getVisibleClumsys', 'getNumberOfPages', 'getItemsPerPage', 'getMobileFiltersVisible'])
    },

    methods:{
        ...mapActions(['setNextPage', 'setPreviousPage', 'setCurrentPage'])
    }
}
</script>

<style scoped>
    .pagination-container{
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        position: fixed;
        z-index: 2000;
        bottom: 2%;
        left: 40%;
        width: 20rem;
        height: 3rem;
        background-color: whitesmoke;
        padding: 0 1em;
    }

    .hide{
        pointer-events: none;
        color: gray
    }

    .pagination-arrows{
        font-size: 2.5rem
    }
    p,h3{
        font-family: 'Apple';
        font-size: 0.55rem;
        
    }

    .current-page{
        font-size: 0.75rem;
        text-decoration: underline;
    }

    .pagination-container p, .pagination-container span{
        cursor: pointer;
    }



</style>