<template>
  <div class="search-bar-container">
    <input class="search-bar" type="number" placeholder="Search by clumsy ID" @keyup="handleSearchInput" :value='getSearchInput' />
    <span class="material-icons clear-search-icon" @click="handleClearInput">clear</span>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'


export default {


    computed:{
        ...mapGetters(['getSearchInput', 'getMobileFiltersVisible'])
    },


    methods:{
        ...mapActions(['setSearchInput','setSearchedForClumsy','setFilteredTraits','setFiltered', 'setMobileFiltersVisible']),
          handleSearchInput(e){                                                       
            console.log(e);
            
            if(e.key === 'Enter'){
                
                // if(this.getMobileFiltersVisible){
                //   this.setMobileFiltersVisible();
                // }
                this.setSearchInput(e.target.value);   
                this.setSearchedForClumsy(e.target.value)
                
                
                                          
            }
            if((e.key === 'Backspace' || 'Delete') && e.target.value === ''){      
                this.$parent.clearAllFilters();
                this.setSearchInput(null);
               
            
            } 
        },
        handleClearInput(){
            this.setSearchInput(null);
            this.$parent.clearOptions();
        }
    }

  



};
</script>

<style>
.search-bar-container {
  display: flex;
  margin-top: 2em;
}

.search-bar {
  width: 90%;
}

.clear-search-icon{
    font-size: 1.2rem;
    color: gray
}

.clear-search-icon:hover{
    color:rgb(255, 90, 90)
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>