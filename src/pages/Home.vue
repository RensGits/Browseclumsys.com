<template>
  <div class="page-container">
    <div class="clumsys-container-header">
      <SearchBar v-if="!getMobileFiltersVisible" class = 'search-bar-mobile'/>
      <div class="results">
        <h3 v-if="getFilteredClumsys.length === 0 && getVisibleClumsys != 0">
          {{getAllClumsys.length}} clumsys found
        </h3>
        <h3 v-if="getFilteredClumsys.length != 0">
          {{ getFilteredClumsys.length }} clumsys found
        </h3>
        <h3 v-if="getFilteredClumsys.length === 0 && getVisibleClumsys.length === 0">
          No such clumsy found!
        </h3>
      </div>
    </div>
    <div class="clumsys-container">
      <Clumsy
        v-for="(clumsy,index) in getVisibleClumsys"
        :key="index"
        :data="clumsy"
      />

      <Pagination />
    </div>
  </div>
</template>

<script>
import Clumsy from "../components/Clumsy/Clumsy.vue";
import Pagination from "../components/Navigation/Pagination.vue";
import SearchBar from "../components/Filters/SearchBar.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Clumsy,
    Pagination,
    SearchBar
  },

  computed: {
    ...mapGetters(["getVisibleClumsys", "getFilteredClumsys", 'getAllClumsys','getMobileFiltersVisible']),
  },

  methods:{
    ...mapActions(['setVisibleClumsys','setAllTraitData', 'setMobileFiltersVisible'])
  },
   created() {
    this.setAllTraitData();
  },



  mounted(){
    this.setVisibleClumsys();
  }
};
</script>

<style>


.results {
  text-align: right;
  margin-right: 2em;
  align-self: flex-start;
}

.search-bar-mobile{
  display: none;
}
</style>

