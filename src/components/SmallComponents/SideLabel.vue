<template>
<div>
  <div id = "sideLabelContainer">
    <h4>{{label}}</h4>
  </div>
</div>
  
</template>

<script>
export default {

  props : ['label']

}
</script>

<style>

#sideLabelContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  background-color: #282c30;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: center;
  margin:0;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 20%);
}

</style>