<template>

<!-- statbar for comparison container -->

<div v-if='trait && isCompare'  class="data-bar-container">
    <div  :style="{ 'width': (parseFloat(trait.Percentage))  + '%' , 'background-color': color}" class='data-bar-type1' >
        <p v-if="parseFloat(trait.Percentage) > 50" class = 'data-bar-type2-font'>{{parseFloat(trait.Percentage).toFixed(2) + "%  "  + trait.Category + ': ' + trait.Attribute  }}</p>
    </div>
    <div class="data-bar-type1">
        <p v-if="parseFloat(trait.Percentage) < 50" class = 'data-bar-type1-font'>{{parseFloat(trait.Percentage).toFixed(2) + "%  "  + trait.Category + ': ' + trait.Attribute  }}</p>
    </div>
    <div class="data-bar-background"></div>
</div>

<!-- statbar for stats page -->

<div v-if='trait && !isCompare'  class="data-bar-container">
    <div  :style="{ 'width': (parseFloat(trait.Percentage))  + '%' , 'background-color': color}" class='data-bar-type1' >
        <p v-if="parseFloat(trait.Percentage) > 50" class = 'data-bar-type2-font'>{{parseFloat(trait.Percentage).toFixed(2) + "%  " + "(" + trait.Quantity + 'pc.) ' + trait.Category + ': ' + trait.Attribute  }}</p>
    </div>
    <div class="data-bar-type1">
        <p v-if="parseFloat(trait.Percentage) < 50" class = 'data-bar-type1-font'>{{parseFloat(trait.Percentage).toFixed(2) + "%  " + "(" + trait.Quantity + 'pc.) ' + trait.Category + ': ' + trait.Attribute  }}</p>
    </div>
    <div class="data-bar-background"></div>
</div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
    props: ['trait','index', 'isCompare'],

    data(){
        return{
            color: ''
            
        }
    },

    computed:{
        ...mapGetters(['getColor'])
    },

    methods:{
        ...mapActions(['setColorCounter']),
        widthModifyer(trait){
            if(trait.Category === 'Blast-off'){
                return 1
            }
            else return 4
        }
    },

    beforeMount(){
        this.color = this.getColor(this.index)
    },  
}

</script>

