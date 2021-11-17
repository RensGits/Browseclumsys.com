<template>
    <div class = 'range-indicator'><p>0</p><p>100%</p></div>
        <StatsBar v-for = '(trait,index) in dataSelector()' :key="index" :trait = "trait" :index="index" :widthModifyer='4' />
    <div class = 'range-indicator'><p>0</p><p>100%</p></div>
</template>

<script>


import StatsBar from './StatsBar.vue'
import {mapGetters} from 'vuex'

export default {
    props: ['data'],
    
    components:{
        StatsBar
    },

    computed:{
        ...mapGetters(['getAllTraitDataSortedByPercentage','getSelectedData'])
    },
    methods:{
        dataSelector(){
            return this.getAllTraitDataSortedByPercentage(this.getSelectedData);
        }
    }
}
</script>
