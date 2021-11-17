<template>
  <div id="nav">
    <div class="nav-container">
    
        <router-link class="nav-item item-1" to="/">Home</router-link>
        <router-link  class="nav-item item-2" to="/stats"><span @click="handleFilterVisibility">Stats</span></router-link>
        <router-link  class="nav-item item-3" to="/my-favorites"><span @click="handleFilterVisibility">My Favorites</span></router-link>
        <div class = 'item-4-container'>
          <router-link class="nav-item" to="/about"><span @click="handleFilterVisibility">About</span></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['setMobileFiltersVisible']),
    handleFilterVisibility(){
      console.log('test')
      this.setMobileFiltersVisible(false)

    }
  }
};
</script>

<style>
#nav {
  display: flex;
  position: relative;
  z-index: 2000;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0%;
  margin: 0;
  width: 100%;
  height: 3em;
  background-color: #282c30;
}

.nav-container {
  display: flex;
  justify-content: flex-start;
  width: 75%;
  height: 50%;
  padding: 0 2% 0 2%;
}

.item-1,.item-2,.item-3{
  flex: 1
}

.item-4-container{
  display:flex;
  justify-content: flex-end !important;
  flex: 4;
}

#navRight {
  flex: 5;
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  padding-right: 4em;
  height: 100%;
}

#nav a {
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffe045;
}
</style>