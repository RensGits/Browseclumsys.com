<template >
  <div>
    <div id="menusPageContainer">
      <h1>Mobile menus</h1>
      <div class = "labeledContainerWrapper">
        <SideLabel label = "Simple" class = "label"/>
        <div class = "labeledContainer">
          <section id = "mobileMenusContainer">
            <div id = "menuOne" class = 'mobileMenuContainer'>
              <span class="material-icons" @click = "menuOneOpen = !menuOneOpen">menu</span>
              <div v-if = 'menuOneOpen' id = "menuOneNavigation">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Contact</h3>
              </div>
            </div>
            <div id = "menuTwo" class = 'mobileMenuContainer'>
              <p>test</p>
            </div>
            <div id = "menuThree" class = 'mobileMenuContainer'>
              <p>test</p>
            </div>
          </section>
        </div>
      </div>

      <div class = "labeledContainerWrapper">
        <SideLabel label = "Javascript" class = "label"/>
        <div class = "labeledContainer">
          <section id = "mobileMenusContainer">
            <div class = 'mobileMenuContainer'>
              <p>test</p>
            </div>
            <div class = 'mobileMenuContainer'>
              <p>test</p>
            </div>
            <div class = 'mobileMenuContainer'>
              <p>test</p>
            </div>
          </section>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import SideLabel from '../components/SmallComponents/SideLabel.vue'

export default {
  components:{
    SideLabel
  },

  data(){
    return{
      menuOneOpen: false,
      menuTwoOpen: false,
      menuThreeOpen: false,
    }
  }

}
</script>

<style>



#menusPageContainer{
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  width: 100%;
}

#mobileMenusContainer{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 10rem));
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  align-self: center;
  gap: 2rem;  
  padding: 2rem 2rem;
}

.mobileMenuContainer{
  position: relative;
  flex: 1;
  height: 20rem;
  width: 20rem;
  box-shadow: 0 0 25px rgb(0 0 0 / 6%);
  padding: 2rem;
}

#menuOne{
  background-color: coral;
}

#menuOneNavigation{
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 20rem;
  background-color: white;
}

#menuTwo{
  background-color: paleturquoise
}

#menuThree{
  background-color: palegoldenrod

}




</style>