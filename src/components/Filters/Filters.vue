<template>
  <div :class="{'filter-container-hide' : this.$route.name != 'Home' }"></div>
   <span v-if="this.$route.name == 'Home'" class="material-icons sort-icon-mobile" @click='setMobileFiltersVisible()'>sort</span>
   <span v-if="this.$route.name == 'Home'" class="material-icons clear-icon-mobile" @click="clearAllFilters">cancel</span>
  <div class="filter-container" :class="{'filter-container': !getMobileFiltersVisible, 'filter-container-mobile' : getMobileFiltersVisible}" >
    <div class="title-container">
      <h2>Filters</h2>

      <span class="material-icons" @click="clearAllFilters">cancel</span>
    </div>

    <SearchBar v-if="!getMobileFiltersVisible" />

    <h3>clumsy</h3>

    <p>body</p>
    <div class="checkbox-group">
      <select v-model="traits.Body">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Body"
          :key="index"
          :value="getAllTraits.Body[index].Attribute"
          :style ="{'background-color' : getAllTraits.Body[index].Attribute }"
        ><div class="option-value">
            {{
              getAllTraits.Body[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Body,
                getAllTraits.Body[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Body = undefined">clear</span>
    </div>

    <p>eyes</p>
    <div class="checkbox-group">
      <select v-model="traits.Eyes">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Eyes"
          :key="index"
          :value="getAllTraits.Eyes[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Eyes[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Eyes,
                getAllTraits.Eyes[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Eyes = undefined">clear</span>
    </div>

    <p>face</p>
    <div class="checkbox-group">
      <select v-model="traits.Face">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Face"
          :key="index"
          :value="getAllTraits.Face[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Face[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Face,
                getAllTraits.Face[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Face = undefined">clear</span>
    </div>

    <h3>wear</h3>

    <p>backpack</p>
    <div class="checkbox-group">
      <select v-model="traits.Backpack">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Backpack"
          :key="index"
          :value="getAllTraits.Backpack[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Backpack[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Backpack,
                getAllTraits.Backpack[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Backpack = undefined"
        >clear</span
      >
    </div>

    <p>glasses</p>
    <div class="checkbox-group">
      <select v-model="traits.Glasses">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Glasses"
          :key="index"
          :value="getAllTraits.Glasses[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Glasses[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Glasses,
                getAllTraits.Glasses[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Glasses = undefined"
        >clear</span
      >
    </div>

    <p>hat</p>
    <div class="checkbox-group">
      <select v-model="traits.Hat">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Hats"
          :key="index"
          :value="getAllTraits.Hats[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Hats[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Hats,
                getAllTraits.Hats[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Hat = undefined">clear</span>
    </div>

    <p>outfit</p>
    <div class="checkbox-group">
      <select v-model="traits.Outfit">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Outfit"
          :key="index"
          :value="getAllTraits.Outfit[index].Attribute"
        ><div class="option-value">
            {{
              getAllTraits.Outfit[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Outfit,
                getAllTraits.Outfit[index].Attribute
              ) + " )  "
            }}
            </div>
            </option>
          
      </select>
      <span class="material-icons" @click="traits.Outfit = undefined"
        >clear</span
      >
    </div>

    <h3>accessories</h3>

    <p>backdrop</p>
    <div class="checkbox-group">
      <select v-model="traits.Backdrop">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Backdrop"
          :key="index"
          :value="getAllTraits.Backdrop[index].Attribute"
          :style ="{'background-color' : getAllTraits.Backdrop[index].Attribute }"
        >
          <div class="option-value" >
            {{
              getAllTraits.Backdrop[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Backdrop,
                getAllTraits.Backdrop[index].Attribute
              ) + " )  "
            }} 
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Backdrop = undefined"
        >clear</span
      >
    </div>

    <p>background</p>
    <div class="checkbox-group">
      <select v-model="traits.Background">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Background"
          :key="index"
          :value="getAllTraits.Background[index].Attribute"
        >
          <div class="option-value">
            {{
              getAllTraits.Background[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Background,
                getAllTraits.Background[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Background = undefined"
        >clear</span
      >
    </div>

    <p>hands</p>
    <div class="checkbox-group">
      <select v-model="traits.Hands">
        <option selected :value="all">all</option>
        <option
          v-for="(trait, index) in getAllTraits.Hands"
          :key="index"
          :value="getAllTraits.Hands[index].Attribute"
        >
          <div class="option-value">
            {{
              getAllTraits.Hands[index].Attribute +
              "  ( " +
              traitPercentage(
                getAllTraits.Hands,
                getAllTraits.Hands[index].Attribute
              ) + " )  "
            }}
          </div>
        </option>
      </select>
      <span class="material-icons" @click="traits.Hands = undefined"
        >clear</span
      >
    </div>

    <h3>hidden</h3>

    <p>blast-off</p>
    <div class="checkbox-group">
      <select v-model="traits.BlastOff">
        <option selected :value="undefined">All</option>
        <option selected :value="false">False ( {{traitPercentage(getAllTraits.BlastOff, "false")}} )</option>
        <option selected :value="true">True ( {{traitPercentage(getAllTraits.BlastOff, "true")}} ) </option>
      </select>
      <span class="material-icons" @click="traits.BlastOff = undefined"
        >clear</span
      >
    </div>

    <p>hide-me</p>
    <div class="checkbox-group">
      <select v-model="traits.HideMe">
        <option selected :value="undefined">All</option>
        <option selected :value="false">False ( {{traitPercentage(getAllTraits.HideMe, "false")}} )</option>
        <option selected :value="true">True ( {{traitPercentage(getAllTraits.HideMe, "true")}} )</option>
      </select>
      <span class="material-icons" @click="traits.HideMe = undefined"
        >clear</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
  },

  data() {
    return {
      traits: {
        Backdrop: undefined,
        Background: undefined,
        Body: undefined,
        Eyes: undefined,
        Face: undefined,
        Glasses: undefined,
        Outfit: undefined,
        Backpack: undefined,
        Hands: undefined,
        Hat: undefined,
        HideMe: undefined,
        BlastOff: undefined,
        HideMe: undefined,
      },
      all: undefined,
      mobileFiltersVisible: true,
    };
  },

  computed: {
    ...mapGetters(["getAllTraits", "getMobileFiltersVisible"]),
  },
  methods: {
    ...mapActions([
      "setFilteredTraits",
      "setVisibleFilteredClumsys",
      "setFiltered",
      "setCurrentPage",
      "setSearchInput",
      "setMobileFiltersVisible"
    ]),
    clearAllFilters() {
      this.setSearchInput(null)                       //clears search input
      this.setFilteredTraits(null);                     //resets traits in store
      this.clearOptions();
    },
    clearOptions(){
       Object.keys(this.traits).forEach((key) => {     //clears all filters locally for options to reset to all
        this.traits[key] = undefined;
         this.setFilteredTraits(null); 
      });
    },
    traitPercentage(category, trait) {
      return this.$store.getters.getTraitPercentage(category, trait);
    },
  
  },
  updated() {
    console.log('filter component updated, sending filter data to setFilteredTraits')
    this.setFiltered();
    this.setCurrentPage(0);
    this.setFilteredTraits({
      Backdrop: this.traits.Backdrop,
      Background: this.traits.Background,
      Body: this.traits.Body,
      Eyes: this.traits.Eyes,
      Face: this.traits.Face,
      Glasses: this.traits.Glasses,
      Outfit: this.traits.Outfit,
      Backpack: this.traits.Backpack,
      Hands: this.traits.Hands,
      Hat: this.traits.Hat,
      HideMe: this.traits.HideMe,
      BlastOff: this.traits.BlastOff,
      HideMe: this.traits.HideMe,
    });
  },
};
</script>

<style scoped>
p {
  font-size: 0.8rem;
  margin-bottom: 0.1em;
}

h3 {
  font-family: "Apple";
  font-size: 0.8rem;
  margin-top: 20%;
}

span {
  font-size: 1.2rem;
  color: gray;
}

span:hover {
  color:rgb(255, 90, 90);
  
}

.filter-container {
  position: fixed;
  top: 3em;
  left: 0;
  height:100%;
  width: 12.5%;
  padding: 0em 1em 4em 1em;
  overflow: scroll
}

.filter-container-hide{
  position: fixed;
  z-index: 10000;
  top: 3em;
  left: 0;
  height:100%;
  width: 12.5%;
  padding: 0em 1em 4em 1em;
  background-color: rgba(157, 157, 157, 0.364)
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-group {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: auto;
}
label {
  font-size: 0.75rem;
}

select,
option {
  width: 100%;
}
select {
  background-color: rgb(250, 250, 250);
  color: black;
}
option {
  color: black;
 
}

.sort-icon-mobile{
  display: none;
}
.clear-icon-mobile{
  display: none;
}

.option-backdrop-color{
  width: 1em;
  height: 1em;
}

</style>