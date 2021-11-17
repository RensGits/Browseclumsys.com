<template >
  <div>
    <div class="page-column-container">
      <div class="labeled-container-wrapper">
        <div class="labels">
          <SideLabel
            label="TRAITS"
            class="label"
            @click="dataCategory = 'traits'"
            
          />
          <SideLabel label="PRICE" class="label" @click="dataCategory = 'price'" />
          <SideLabel label="SALES" class="label" @click="dataCategory = 'sales'" />
        </div>

        <div class="labeled-container shadow" v-if="dataCategory === 'traits'">
          <div class="stats-options-container" >
            <div class="options-container">
              <select v-model="selectedData">
                <option selected default value="all">all</option>
                <option value="Backdrop">Backdrop</option>
                <option value="Background">Background</option>
                <option value="Eyes">Eyes</option>
                <option value="Face">Face</option>
                <option value="Glasses">Glasses</option>
                <option value="Hands">Hands</option>
                <option value="Hats">Hats</option>
                <option value="Outfit">Outfit</option>
                <option disabled>---hidden---</option>
                <option value="Blast-off">BlastOff</option>
                <option value="Hide-me">HideMe</option>
              </select>
              <p>catagory</p>
            </div>
              <div class="sorting-icon-container">
                <p v-if="sorting === 'desc'">descending</p>
                <p v-if="sorting === 'asc'">ascending</p>
                <span
                  v-if="sorting === 'asc'"
                  class="material-icons"
                  @click="handleSorting"
                  >arrow_drop_up</span
                >
                <span
                  v-if="sorting === 'desc'"
                  class="material-icons"
                  @click="handleSorting"
                  >arrow_drop_down</span
                >
              </div>
          </div>

          <Stats />
        </div>
         <div class="labeled-container shadow" v-if="dataCategory === 'price'">
           <h1>Coming soon</h1>
          
        </div>
          <div class="labeled-container shadow" v-if="dataCategory === 'sales'">
            <h1>Coming soon</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideLabel from "../components/SmallComponents/SideLabel.vue";
import Stats from "../components/Stats/Stats.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SideLabel,
    Stats,
  },

  data() {
    return {
      sorting: "asc",
      selectedData: "",
      dataCategory: 'traits'
    };
  },

  computed: {
    ...mapGetters(["getAllTraitDataSortedByPercentage", "getSorting"]),
  },

  methods: {
    ...mapActions(["setAllTraitData", "setSorting", "setSelectedData"]),
    handleSorting() {
      if (this.sorting === "asc") {
        this.sorting = "desc";
      } else if (this.sorting === "desc") {
        this.sorting = "asc";
      }

      this.setSorting(this.sorting);
    },
  },
  updated() {
    this.setSelectedData(this.selectedData);
  },
  created() {
    this.setAllTraitData();
  },
};
</script>

<style>


#mobileMenusContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 10rem));
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  align-self: center;
  gap: 2rem;
  padding: 2rem 2rem;
}

.stats-options-container, .sorting-icon-container, .options-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
}


.data-bar-container {
  position: relative;
  display: flex;
  margin: 0.3em 0;
  width: 100%;
  
}

.data-bar-type1 {
  position: relative;
  z-index: 10;
  height: 1em;
  margin: 0 0;
  
}

.data-bar-background {
  position: absolute;
  z-index: 9;
  
  width: 100%;
  height: 1em;
  background-color: #fcc3d1;
}

.data-bar-type1-font,.data-bar-type2-font {
  margin: 0 0 0 0.5em;
  font-size: 0.8rem;
}
.data-bar-type2-font{
  position: absolute;
  z-index: 1000;
}

.range-indicator {
  display: flex;
  justify-content: space-between;
}
</style>