<template>
  <div class="clumsy-details-container shadow2">
    <div class="clumsy-image-container">
      <img class="clumsy-image" :src="data.Image" alt="" />
    </div>
    <div class="clumsy-details">
      <div class="title">
        <h1>Clumsy Ghost</h1>
        <h1>{{ getFormattedId(data.Id) }}</h1>
      </div>
      <div class="details">
        <div class="detail-container">
          <div>
            <p>body: {{ data.Body }}</p>
           
          </div>
           <div><p>{{traitPercentage(getAllTraits.Body, data.Body)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>eyes: {{ data.Eyes }}</p>
         
          </div>
           <div><p>{{traitPercentage(getAllTraits.Eyes, data.Eyes)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p >face: {{ data.Face }}</p>
   
          </div>
            <div><p>{{traitPercentage(getAllTraits.Face, data.Face)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>hands: {{ data.Hands }}</p>
         
          </div>
            <div><p>{{traitPercentage(getAllTraits.Hands, data.Hands)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>backpack: {{ data.Backpack }}</p>
            
          </div>
            <div><p>{{traitPercentage(getAllTraits.Backpack, data.Backpack)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>glasses: {{ data.Glasses }}</p>
           
          </div>
            <div><p>{{traitPercentage(getAllTraits.Glasses, data.Glasses)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>hat: {{ data.Hat }}</p>
           
          </div>
            <div><p>{{traitPercentage(getAllTraits.Hats, data.Hat)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>outfit: {{ data.Outfit }}</p>
            
          </div>
           <div><p>{{traitPercentage(getAllTraits.Outfit, data.Outfit)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>backdrop: {{ data.Backdrop }}</p>
         
          </div>
           <div><p>{{traitPercentage(getAllTraits.Backdrop, data.Backdrop)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p>background: {{ data.Background }}</p>
        
          </div>
           <div><p>{{traitPercentage(getAllTraits.Background, data.Background)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p >blast-off: {{data.BlastOff}}</p>
       
          </div>
            <div><p>{{traitPercentage(getAllTraits.BlastOff, data.BlastOff)}}</p></div>
        </div>
        <div class="detail-container">
          <div>
            <p >hide-me: {{data.HideMe}}</p>
            
          </div>
           <div><p>{{traitPercentage(getAllTraits.HideMe, data.HideMe)}}</p></div>
        </div>
      </div>
      <div class="rank">
        <h3>official rarity rank:</h3>
        <p>T.B.A.</p>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  props: ["data"],

    computed:{
        ...mapGetters(['getAllTraits', 'getFormattedId']),
    },

    methods:{
        traitPercentage(category,trait){
            return this.$store.getters.getTraitPercentage(category,trait)  
        }
    },

    mounted(){
      console.log(this.data)
    }
};
</script>

<style scoped>
.clumsy-details-container {
  display: flex;
  position: fixed;
  z-index: 100000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 40em;
  width: 64em;
  background-color: gray;
}

.clumsy-image-container {
  flex: 2;
  background-color: white;
}

.clumsy-details {
  background-color: whitesmoke;
  flex: 1;
  padding: 2em;
}

.detail-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
}

.clear-modal-icon {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  z-index: 2000;
  font-size: 2rem;
}

.title,
.details,
.rank {
  margin-bottom: 2rem;
}

h1 {
  font-family: "Apple";
  font-size: 1.3rem;
}

p{
    margin: 0.1rem 0;
}

</style>