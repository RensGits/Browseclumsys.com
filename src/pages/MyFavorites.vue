<template>
  <div class="page-container">
    <div class="clumsys-container">
      <h1 class = 'favorites-container-placeholder' v-if="getFavoriteClumsys.length === 0">
      On the homepage, set clumsys as favorite by pressing the heart icon. On desktop, you can drag your favorite clumsys into the left and right container for an easy comparison of stats.</h1>
      <Clumsy
        v-for="clumsy in getFavoriteClumsys"
        :key="clumsy.Id"
        :data="clumsy"
        :image="clumsy.Image"
        :id="clumsy.Id"
      />
    </div>
    <CompareTool/>
  </div>
</template>

<script>
import Clumsy from "../components/Clumsy/Clumsy.vue";
import CompareTool from '../components/CompareTool/CompareTool.vue'
import { mapGetters } from "vuex";

export default {
  components: {
    Clumsy,CompareTool
  },

  computed: {
    ...mapGetters(["getFavoriteClumsys"]),
  },
};
</script>

<style>


.favorites-container-placeholder{
  
  margin: 1em;
  width: 300%;
  column-span: all;
  font-size: 1rem;
}
</style>