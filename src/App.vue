<template>
  <NavBar/>
  <router-view id = "routerView"/>
</template>

<script>

import NavBar from './components/Navigation/NavBar.vue'

export default {
  components:{
    NavBar
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300;1,400');

/* Roboto Mono
thin: 100
light: 300
regular: 400
medium: 500
semi-bold: 600 */

*{
  box-sizing: border-box;
}

h1{
  font-weight: 600;
  font-size: 1.4rem;
}
h2{
  font-weight: 500;
  font-size: 1.2rem;
}
h3{
  font-weight: 400;
  font-size: 1rem;
}

p,a{
  font-weight: 300;
  font-size: 0.9rem;
}

h4{
  font-weight: 100;
  font-size: 0.7rem;
  padding:0.4rem;
  margin:0;
  color: #ffe045;
}

section{
  background-color: whitesmoke;
  box-shadow: 0 0 25px rgb(0 0 0 / 6%);
  width: 90%;
}

html,body{
  height: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffe045;
  color:#282c30;
  font-family: 'Roboto Mono', monospace;
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

#routerView{
  display: flex;
  justify-content: center;
  height: auto;
  width: 80%;
  background-color: whitesmoke;
  margin-top: 3rem;
}

.labeledContainerWrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4rem 0;
}

.labeledContainer{
  width:97%;
}

.label{
  margin-top: 2rem;
  width: 3%;
}

.material-icons{
  position: relative;
  z-index: 10;
  cursor: pointer;
}



</style>
