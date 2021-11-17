<template>
  <div 
    class="clumsy-container shadow" 
    draggable="true"
    @dragstart="handleDragStart($event, data.Id)"
  >
    <div class="clumsy-image-container" @click="showDetails = !showDetails">
      <img class="clumsy-image" :src="data.Image" alt="" />
    </div>
    <div class="clumsy-info-container shadow">
      <h3 class="clumsy-ID">{{ getFormattedId(data.Id) }}</h3>
        <!-- <span 
          class="material-icons compare-icon"
          @click="handleCompare()"
          >compare_arrows
        </span> -->
        <span
          class="material-icons heart-icon"
          :class="{ 'heart-icon-active': getFavoriteIds.includes(data.Id) }"
          @click="handleToggleFavorite"
          >favorite</span
        >
    </div>
  </div>
  <ClumsyDetails v-if="showDetails" :data="data" />
  <div
    v-if="showDetails"
    class="show-details-background"
    @click="showDetails = false"
  ></div>
</template>

<script>
import ClumsyDetails from "./ClumsyDetails.vue";
import FavoriteIcon from './FavoriteIcon.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["data"],
  components: {
    ClumsyDetails, FavoriteIcon
  },

  data() {
    return {
      showDetails: false,
      
    };
  },

  computed: {
    ...mapGetters(["getFavoriteClumsys", "getFavoriteIds","getFormattedId"]),
  },

  methods: {
    ...mapActions(["setFavoriteClumsy"]),

    handleToggleFavorite() {
            this.setFavoriteClumsy(this.data);
        },

    handleDragStart(event,id){
    
     console.log(id)
     event.dataTransfer.dropEffect='move'
     event.dataTransfer.effectAllowed='move'
    event.dataTransfer.setData('clumsyID', id) 
    },
    handleCompare(){

    }
 
  },


};
</script>

<style scoped>
h3 {
  font-family: "Apple";
  color: black;
  font-size: 0.8rem;
}

.clumsy-container {
  position: relative;
  z-index: 700;
  display: flex;
  flex-direction: column;
  height: 18em;
  width: 15em;
  cursor: pointer;
  min-width: 0;
  min-height: 0
}

.clumsy-image-container {
  height: 15em;
}

.clumsy-info-container {
  display: flex;
  background-color: whitesmoke;
  height: 3em;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}



.show-details-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.heart-icon {
  color: rgb(202, 202, 202);
  transition: transform 0.2s
}
.heart-icon-active {
  color: red;
  transform: rotate3d(0,1,0,180deg);
}
.compare-icon{
  display: none;
}

</style>