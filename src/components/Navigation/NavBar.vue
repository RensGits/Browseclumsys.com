<template>
  <div id="nav">
    <div id = "navContainer">
        <div id = "navLeft">
            <router-link to="/">Home</router-link>
        </div>
        <div id = "navRight">
            <router-link to="/menus">Menus</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>   
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
    display: flex;
    position: relative;
    z-index: 20;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0%;
    margin: 0;
    width: 100%;
    height: 3rem;
    background-color:#282c30; 
}

#navContainer{
    display: flex;
    width: 80%;
    height: 50%;
    padding-left: 2rem;
}

#navLeft{
    flex: 1;
    height: 100%;
}

#navRight{
    flex: 5;
    display:flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-right: 4rem;
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