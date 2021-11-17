<template>
  <NavBar />
  <Filters />
  <router-view id="routerView" class="shadow" />
</template>

<script>
import NavBar from "./components/Navigation/NavBar.vue";
import Filters from "./components/Filters/Filters.vue";
import { mapActions } from "vuex";

export default {
  components: {
    NavBar,
    Filters,
  },

  methods: {
    ...mapActions(["setVisibleClumsys"]),
  },

  created() {
    this.setVisibleClumsys();
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300;1,400");
@font-face {
  font-family: Apple;
  src: url("./assets/Apple.otf");
}
/* Roboto Mono
thin: 100
light: 300
regular: 400
medium: 500
semi-bold: 600 */

* {
  box-sizing: border-box;
}

h1 {
  font-family: 'Apple';
  font-weight: 600;
  font-size: 1.4rem;
}
h2 {
  font-family: 'Apple';
  font-weight: 500;
  font-size: 1.2rem;
}
h3 {
  font-weight: 400;
  font-size: 1rem;
}

p,
a {
  font-weight: 300;
  font-size: 0.9rem;
}

h4 {
  font-weight: 100;
  font-size: 0.7rem;
  padding: 0.4rem;
  margin: 0;
  color: #ffe045;
}

.p6 {
  font-size: 0.6rem;
}
.p7 {
  font-size: 0.7rem;
}
.p8 {
  font-size: 0.8rem;
}

.shadow {
  background-color: whitesmoke;
  box-shadow: 0 0 25px rgb(0 0 0 / 6%);
  width: 90%;
}

.shadow2 {
  box-shadow: 0 0 25px rgb(0 0 0 / 20%);
  width: 90%;
}

html,
body {
  height: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffe045;
  color: #282c30;
  font-family: "Roboto Mono", monospace;
}

#app {
  min-height: 100%;
  height: auto;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}


#routerView {
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: 75%;
  background-color: whitesmoke;
  margin-top: 3rem;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  min-height: 100vh;
  justify-self: flex-start;
  padding: 0 2em
}

.page-column-container{
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  width: 100%;
}

.clumsys-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 15em));
  grid-template-rows: repeat(auto-fill, 18em);
  grid-auto-flow: row;
  justify-content: center;

  gap: 2rem;
 
  margin: 2em 0 8em 0;
  min-width: 70%;
  max-width: 100%;
}

.clumsy-image {
  width: auto;
  height: 100%;
}

.clumsys-container-header {
  justify-self: flex-start;
}

.labeled-container-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4rem 0;
}


.labeled-container {
  display: flex;
  width:97%;
  flex-direction: column;
  height: auto;
  padding: 2em;
  background-color: rgb(237, 234, 234);
}

.labels{
  display: flex;
  flex-direction: column;
}

.label {
  margin-top: 2rem;
  cursor: pointer;
}

.material-icons {
  position: relative;
  z-index: 10;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #ffe045;
  border: 0px none #ffffff;
  border-radius: 43px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333333;
}
::-webkit-scrollbar-thumb:active {
  background: #ffe045;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 26px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}

.hide{
  display: none !important;
}


@media only screen and (max-width: 1450px) {
  .filter-container{
    width: 15% !important;
    z-index: 1000;
    background-color: #ffe045;
  }
  .filter-container-hide{
    width: 15% !important 
  }
  .nav-container{
    padding-left: 5%;
  }
}


@media only screen and (max-width: 1200px) {
  #app{
    justify-content: right;
  }
  .nav-container{
    width:100%;
    padding-left: 27%;
  }
  #navRight{
    flex:2;
  }
  .item-3{
    flex:2;
  }
  .filter-container, .filter-container-hide{
    width: 25% !important;
  }
   .compare-left-container, .compare-right-container{
     width: 80% !important;
     margin: 0.5em !important;
  }
  .clumsy-details-container{
    width: 50em !important;
    height: 35em !important;
  }
  .clumsy-details-container h1{
    font-size: 1rem !important;
  }
  .clumsy-details-container p{
    font-size: 0.7rem !important;
  }
  .clumsy-details{
    padding: 1.2em !important;
  }
  .favorites-container-placeholder{
    width: 200% !important
  }
}

@media only screen and (max-width: 1100px){
  .compare-tool-container{
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 850px){
  .compare-tool-container{
    display: none !important
  }
  .clumsy-details-container{
    width: 45em !important;
    height: 30em !important;
     box-shadow: 0 0 100px rgb(0 0 0 / 100%);
  }
  .compare-icon{
    display: unset !important;
  }
  .favorites-container-placeholder{
    width: 100% !important
  }
}



@media only screen and (max-width: 720px) {

  

  .clumsy-details-container{
    position: fixed !important;
    flex-direction: column;
    width: 20em !important;
    height: 50% !important;
    top: 21vh !important;
 
  }
  .clumsy-details-container h1{
    font-size: 1rem !important;
  }
  .clumsy-details-container p{
    font-size: 0.7rem !important;
  }
  .clumsy-details{
    padding: 1.2em !important;
    width: auto !important;
    margin-top: -0.3em;
  }
  .clumsy-image{
    width: 100% !important;
    margin-top: -0.1em;  
  }

::-webkit-scrollbar {
  display:none
}
    #nav{
      height: 4em;
    }
    .nav-item, .item-4-container {
      font-size: 0.8rem;
    }
    .nav-item{
      align-self: center;
    }



    .item-4-container{
      justify-content: flex-end !important;
      flex: 1;
    }
    
    .nav-container{
      padding-left:unset;
      padding: 0 4%;
      justify-content: space-between;
  }

 
  .filter-container, .filter-container-hide{
    display:none
  }
  #routerView{
    width:100%;
  }
  .search-bar-mobile{
    display: unset !important;
    position: fixed;
    z-index: 1000;
    top: 4.7em;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .search-bar-container{
    width: 60% !important;
   
  }
  .clear-search-icon{
    display: none;
  }
  .pagination-container{
    position: fixed;
    top: 95%;
    left: 50% !important;
    transform: translate(-50%, -50%);
  }
  .sort-icon-mobile, .clear-icon-mobile{
    display: unset !important;
    position: fixed;
    z-index: 10000;
    top:2.5em;
    left: 0;
    font-size: 2.3rem !important;
    background-color: transparent;
    padding: 0 0 0 0.4em;
  }

  .clear-icon-mobile{
    right: 0;
    left: unset; 
    padding: 0 0.4em 0 0;
  }
  .results h3{
    text-align: center;
    padding-top: 5em;
  }



  .filter-container-mobile{
    display: unset !important;
    position: fixed;
    top: 3em;
    left: 0;
    height:100%;
    width: 100% !important;
    padding: 6em 4em 4em 4em !important;
    overflow: scroll
  }
  .filter-container-mobile h3{
    margin-top: 2em
  }
  .search-bar-container{
    justify-content: space-between;
    align-items: center;
    height: 2em;
  }
  .search-bar{
    width: 100%;
    height: 3em;
    border:none;
    padding-left: 1em;
  }
  .checkbox-group .material-icons, .clear-search-icon{
    font-size: 2rem
  }
  .title-container{
    display:none !important;
  }

  .clumsys-container-header{
    margin-top: 20%
  }


}

@media only screen and (max-width: 450px) {
   .clumsy-details-container{
     top: 27vh !important;
     width: 60% !important; 
   }
   .clumsy-details-container h3{
    font-size: 0.7rem !important;
   }
   .data-bar-type1-font, .data-bar-type2-font{
     font-size: 0.5rem !important;
   }
   .stats-options-container{
     flex-direction: column !important  ;
   }
   .labeled-container{
     padding: 1em;
   }
   .page-column-container{
     padding: 0 5%
   }
   .data-bar-background, .data-bar-type1, .data-bar-type2{
     height: 1.5em !important;
   }
   .data-bar-type1-font,  .data-bar-type2-font{
     margin-top: 0.25em !important;
   }
}

@media only screen and (max-width: 350px) {
   .clumsy-details-container{
     width: 50% !important;
     top: 27vh !important;
     font-size: 0.3rem;
     
   }
}










</style>
