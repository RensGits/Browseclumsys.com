<template>
  <div class="compare-tool-container">
    <div
      class="compare-left-container"
      :class="{'active-compare-container shadow' : leftCompareActive}"
      @dragenter.prevent="toggleLeftActive"
      @dragleave.prevent="toggleLeftActive" 
      @dragover.prevent 
      @drop.prevent="itemLeftDropped($event)">
        <h1 class="compare-container-placeholder"  v-if='!leftClumsy'>drag a clumsy into this container to compare</h1>
        <h1 v-if='leftClumsy'>Clumsy Ghost {{getFormattedId(leftClumsy.Id)}}</h1>

        <StatBar v-if="leftClumsy" :index = '0'  :trait = "getTraitDataByName('Body', leftClumsy.Body)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '1'  :trait = "getTraitDataByName('Eyes',leftClumsy.Eyes)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '2'  :trait = "getTraitDataByName('Face',leftClumsy.Face)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '3'  :trait = "getTraitDataByName('Hands',leftClumsy.Hands)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '4'  :trait = "getTraitDataByName('Backpack',leftClumsy.Backpack)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '5'  :trait = "getTraitDataByName('Glasses',leftClumsy.Glasses)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '6'  :trait = "getTraitDataByName('Hats',leftClumsy.Hat)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '7'  :trait = "getTraitDataByName('Outfit',leftClumsy.Outfit)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '8'  :trait = "getTraitDataByName('Backdrop',leftClumsy.Backdrop)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '9'  :trait = "getTraitDataByName('Blast-off',leftClumsy.BlastOff)" :isCompare="true"/>
        <StatBar v-if="leftClumsy" :index = '10'  :trait = "getTraitDataByName('Hide-me',leftClumsy.HideMe)" :isCompare="true"/>
        <img v-if='leftClumsy' class = 'compare-image' :src="leftClumsy.Image" alt="">
        <h1 class = 'rank' v-if='leftClumsy'>Official rarity rank: T.B.A. </h1>

    </div>
    <div 
     
      class="compare-right-container"
      :class="{'active-compare-container shadow' : rightCompareActive}"
      @dragenter.prevent="toggleRightActive"
      @dragleave.prevent="toggleRightActive" 
      @dragover.prevent 
      @drop.prevent="itemRightDropped($event)">
        <h1 class="compare-container-placeholder" v-if='!rightClumsy'>drag a clumsy into this container to compare</h1>
        <h1 v-if='rightClumsy'>Clumsy Ghost {{getFormattedId(rightClumsy.Id)}}</h1>
     
        <StatBar v-if="rightClumsy" :index = '0' :widthModifyer='2'  :trait = "getTraitDataByName('Body', rightClumsy.Body)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '1' :widthModifyer='2'  :trait = "getTraitDataByName('Eyes',rightClumsy.Eyes)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '2' :widthModifyer='2'  :trait = "getTraitDataByName('Face',rightClumsy.Face)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '3' :widthModifyer='2'  :trait = "getTraitDataByName('Hands',rightClumsy.Hands)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '4' :widthModifyer='2'  :trait = "getTraitDataByName('Backpack',rightClumsy.Backpack)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '5' :widthModifyer='2'  :trait = "getTraitDataByName('Glasses',rightClumsy.Glasses)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '6' :widthModifyer='2'  :trait = "getTraitDataByName('Hats',rightClumsy.Hat)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '7' :widthModifyer='2'  :trait = "getTraitDataByName('Outfit',rightClumsy.Outfit)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '8' :widthModifyer='2'  :trait = "getTraitDataByName('Backdrop',rightClumsy.Backdrop)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '9' :widthModifyer='2'  :trait = "getTraitDataByName('Blast-off',rightClumsy.BlastOff)" :isCompare="true"/>
        <StatBar v-if="rightClumsy" :index = '10' :widthModifyer='2' :trait = "getTraitDataByName('Hide-me',rightClumsy.HideMe)" :isCompare="true"/>
        
        <img v-if='rightClumsy' class = 'compare-image' :src="rightClumsy.Image" alt="">
        <h1 class = 'rank' v-if='rightClumsy'>Official rarity rank: T.B.A. </h1>





    </div>
  </div>
</template>

<script>

import{mapGetters,mapActions} from 'vuex'
import ClumsyDetails from '../Clumsy/ClumsyDetails.vue'
import StatBar from '../Stats/StatsBar.vue'

export default {

  components:{
    ClumsyDetails,StatBar
  },

  data(){
    return{
      leftCompareActive:false,
      rightCompareActive:false,
      leftClumsy: null,
      rightClumsy: null,
      
    }
  },

  computed:{
    ...mapGetters(['getClumsyById','getTraitDataByName', 'getFormattedId'])
  },

  methods:{
    ...mapActions(['setAllTraitData']),
    toggleLeftActive(){
      this.leftCompareActive = !this.leftCompareActive
      
    },
    toggleRightActive(){
      this.rightCompareActive = !this.rightCompareActive
      
    },
    itemLeftDropped(event){
      this.leftCompareActive = true
      const clumsyId = event.dataTransfer.getData('clumsyID')
      this.leftClumsy = this.getClumsyById(clumsyId)
      
    },
    itemRightDropped(event){
      this.rightCompareActive = true
      const clumsyId = event.dataTransfer.getData('clumsyID')
      this.rightClumsy = this.getClumsyById(clumsyId)
      console.log(this.rightClumsy)
    },
    formattedId(Id){
      return this.getFormattedId(this.leftClumsy.Id)
    }
  },
}
</script>

<style>
  .compare-tool-container{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-bottom: 5em;
  }

  .compare-left-container, .compare-right-container{
    width: 60%;
    min-height: 20em;
    margin: 1em 1em 0 1em;
    border: 1.5px dashed black;
  }

  .active-compare-container{
    padding: 2em;
    border: none
  }

  .compare-image{
    width: 100%;
    height: auto;
    margin-top: 2em
  }

  .rank{
    font-size: 1rem;
    margin-top: 1.5em;
  }

  .compare-container-placeholder{
    text-align: center;
    margin-top: 22%;
    padding: 0 5%; 
  }
</style>