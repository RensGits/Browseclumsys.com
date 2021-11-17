

import { _ } from 'core-js'
import { createStore } from 'vuex'
import JSON_DATA from '../assets/data.json'
import JSON_TRAITS from '../assets/traits.json'
import JSON_NOTRAITS from '../assets/notraits.json'



export default createStore({
  
  state: {
    currentPage: 0,
    itemsPerPage: 30,
    searchInput: '',
    visibleClumsys: [],
    filteredClumsys: [],
    favoriteClumsys:[],
    favoriteClumsysIds:[],
    filteredTraits: [],
    filtered: false,
    allTraitData : [],
    sorting: 'asc',
    selectedData: 'all',
    mobileFiltersVisible: false
  },

  getters:{
   
    getAllClumsys(){
      return JSON_DATA.Data
    },
    getClumsyById: state => payload => {
      let clumsyById = _.find(JSON_DATA.Data, { 'Id': Number(payload) });
      // clumsyById = _.forIn(clumsyById, function(value,key){
      //   if(clumsyById[key] === ''){
      //     clumsyById[key] = 'None'
      //   }
      // })
      return clumsyById
    },
    getFilteredClumsys(state){
      return state.filteredClumsys
    },
    getAllTraits(state){
      return JSON_TRAITS
    },
    getAllNoTraits(){
      return JSON_NOTRAITS
    },
    getCurrentPage(state){
      return state.currentPage
    },
    getVisibleClumsys(state){
      return state.visibleClumsys
    },
    getFavoriteClumsys(state){
      return state.favoriteClumsys
    },
    getFavoriteIds(state){
      return state.favoriteClumsysIds
    },
    getFormattedId: state => Id => {
      let formattedId = '#' + JSON.stringify(Id).padStart(4, 0);
      return formattedId
    },
    getNumberOfPages(state){
      if(state.filteredClumsys.length === 0){
        return Math.floor(JSON_DATA.Data.length / state.itemsPerPage)
      }
      else return Math.floor(state.filteredClumsys.length / state.itemsPerPage)
    },
    getItemsPerPage(state){
      return state.itemsPerPage
    },
    getShowDetails(state){
      return state.showDetails
    },

    getTraitPercentage: state => (category,trait) => {
      if(_.find(category, { 'Attribute': trait.toString() })){
        let percentage = _.find(category, { 'Attribute': trait.toString()}).Percentage
        let formattedPercentage = parseFloat(percentage).toFixed(2) + '%'
        return formattedPercentage 
      }
    },
    getSearchInput(state){
      return state.searchInput
    },

    getTraitDataByName: state => (category, trait) => {
      let stringifiedTrait = ''
      if(trait === false || trait === true){
        stringifiedTrait = trait.toString();
      }
      else stringifiedTrait = trait
      let filteredTrait = _.find(state.allTraitData, {'Category': category, 'Attribute': stringifiedTrait})
      console.log(filteredTrait)
      return filteredTrait
    },

    getAllTraitDataSortedByPercentage: state => (payload) => {
      console.log(state.sorting)
      
      let sortedArray = _.orderBy(state.allTraitData, 'Quantity', state.sorting);
      let categoryArray = []
      let nonCategoryArray = []
      if(payload != 'all' && payload){_.forEach(sortedArray, function(value,key){
     
        if(value.Category === payload){
          categoryArray.push(value)
        }
             
       
      })
      console.log(categoryArray)
       return categoryArray  
    }
      else {
        _.forEach(sortedArray, function(value,key){
     
          if(value.Category != 'Hide-me' && value.Category != 'Blast-off'){
            nonCategoryArray.push(value)
          }
               
         
        })
        return nonCategoryArray
      }},

    getSorting(state){
      return state.sorting
    },

    getSelectedData(state){
      return state.selectedData
    },



    getColor: state => index => {
        
        let colors = ['#56E5B7' ,'#ACE5F3' ]
        
        let colorIndex = index % 2
        
        return colors[colorIndex]
      },

      getMobileFiltersVisible(state){
        return state.mobileFiltersVisible
      }
    

    
        
      
    
   
   

  },

  actions: {

    setFiltered({commit}){
      commit('mutateFiltered')
    },

    setNextPage({commit, dispatch,state}){        // Decreases the page number by one and calls setVisibleClumsys, populating state.visibleClumsys with the according page number.
      commit('mutateNextPage')
      dispatch('setVisibleFilteredClumsys')
      window.scrollTo(0,0);
    },

    setPreviousPage({commit, dispatch}){    // Decreases the page number by one and calls setVisibleClumsys, populating state.visibleClumsys with the according page number.
      commit('mutatePreviousPage')
      dispatch('setVisibleFilteredClumsys')
      window.scrollTo(0,0);
    },

    setCurrentPage({commit, dispatch},payload){
      commit('mutateCurrentPage',payload)
      dispatch('setVisibleFilteredClumsys')
    },

    setVisibleClumsys({commit}){            // Populates state.visibleClumsys with the given itemsPerPage according to the current page number.
      let clumsysTemp = JSON_DATA.Data.slice(this.state.currentPage * this.state.itemsPerPage, (this.state.currentPage * this.state.itemsPerPage) + this.state.itemsPerPage)
      commit('mutateVisibleClumsys', clumsysTemp);
    },

    setVisibleFilteredClumsys({commit,state,dispatch}){
      if(state.filtered){
        let clumsyTemp = state.filteredClumsys.slice(this.state.currentPage * this.state.itemsPerPage, (this.state.currentPage * this.state.itemsPerPage) + this.state.itemsPerPage)
      commit('mutateVisibleClumsys',clumsyTemp)
      }
      else dispatch('setVisibleClumsys')
      
    },
    

    setSearchedForClumsy({commit,dispatch},payload){
      let searchedClumsy = [];
      let searchResult = _.find(JSON_DATA.Data, { 'Id': Number(payload) });
      searchedClumsy.push(searchResult)
      
      
      commit('mutateFiltered')
      commit('mutateFilteredClumsys', searchedClumsy)
      dispatch('setVisibleFilteredClumsys') 
    },

    setFavoriteClumsy({commit},payload){
      commit('mutateFavoriteClumsys', payload)
    },

    setFilteredTraits({commit, dispatch}, payload){
      console.log('setFilteredTraits reached with payload:')
      console.log(payload)
      console.log('will now mutateFilteredTraits --> dispatch setFilteredClumsys')                                                 // Populated the filteredTraits array with trait checkboxes clicked
      commit('mutateFilteredTraits', payload)
      dispatch('setFilteredClumsys')
    },

    setFilteredClumsys({commit,state,dispatch}){
      let filteredClumsys = _(state.filteredTraits).omitBy(_.isUndefined).omitBy(_.isNull).value(); // removes keys with value undefined (i.e non-checked boxes) 
      filteredClumsys = _.filter(JSON_DATA.Data, _.matches(filteredClumsys)) // Checks what clumsy has the filtered traits
      commit('mutateFilteredClumsys', filteredClumsys)
      dispatch('setVisibleFilteredClumsys')   
    },

    setShowDetails({commit}){
      commit('mutateShowDetails')
    },
    setSearchInput({commit},payload){
      console.log('setSearchInput reached with payload:')
      console.log(payload)
      commit('mutateSearchInput',payload)
    },
    setAllTraitData({commit}){
      console.log('setAllTraitData triggered')
      let allTraitData = [];
      
      _.forEach(JSON_TRAITS, (traitCatagory) => {
        traitCatagory.forEach(function(trait){
          trait.Quantity = parseInt(trait.Quantity)   // converts key from string to number so it can be sorted
          allTraitData.push(trait)
        })
      })

      _.forEach(JSON_NOTRAITS, function(trait){
          trait.Quantity = parseInt(trait.Quantity)   // converts key from string to number so it can be sorted
          allTraitData.push(trait)
      })
      commit('mutateAllTraitData',allTraitData)
    },

    setSorting({commit},payload){
      commit('mutateSorting',payload)
    },
    setSelectedData({commit},payload){
      commit('mutateSelectedData',payload)
    },
    setMobileFiltersVisible({commit},payload){
      console.log('setmobile reached')
      console.log(payload)
      if(payload === false){
        commit('mutateSetMobileFiltersVisible',payload)
      }
      else commit('mutateSetMobileFiltersVisible')
    }
  },
      



  mutations: {

    mutateAllClumsys(state, payload){
      state.allClumsys = payload
  
    },
    mutateFilteredClumsys(state,payload){
      console.log('mutateFilteredClumsys reached with payload:')
    
      state.filteredClumsys = payload
      console.log('state.filteredClumsys')
    
      
    },
    mutateVisibleClumsys(state, payload){
      state.visibleClumsys = payload
    },
    mutateFilteredTraits(state,payload){
      state.filteredTraits = payload
    },

    mutateFavoriteClumsys(state,payload){
      let index = state.favoriteClumsysIds.indexOf(payload.Id)
      if(state.favoriteClumsysIds.includes(payload.Id)){
        state.favoriteClumsysIds.splice(index,1)
      }
      else {state.favoriteClumsysIds.push(payload.Id)}
      
      if(state.favoriteClumsys.includes(payload)){
        state.favoriteClumsys.splice(index,1)
      }
      else{
      state.favoriteClumsys.push(payload)}
      
      console.log(payload.Id)
      console.log(state.favoriteClumsysIds)
      console.log(state.favoriteClumsys)
    },

    mutateNextPage(state){
      console.log(state.currentPage)
      state.currentPage = state.currentPage + 1;
      console.log(state.currentPage)
    },
    mutatePreviousPage(state){
      console.log(state.currentPage)
      state.currentPage = state.currentPage -1;
      console.log(state.currentPage)
    },
    mutateCurrentPage(state, payload){
      state.currentPage = payload
    },
    mutateFiltered(state){
      state.filtered = true;
    },
    mutateShowDetails(state){
      state.showDetails = !state.showDetails
    },
    mutateSearchInput(state, payload){
      console.log('mutateSearchInput reached with payload:')
      console.log(payload)
      state.searchInput = payload
    },
    mutateAllTraitData(state,payload){
      state.allTraitData = payload
    },
    mutateSorting(state,payload){
      state.sorting = payload
    },
    mutateSelectedData(state,payload){
      state.selectedData = payload
    },
    mutateSetMobileFiltersVisible(state,payload){
      if(payload === false){
        state.mobileFiltersVisible = false
      }
      else state.mobileFiltersVisible = !state.mobileFiltersVisible
    }
    
 
  
  },

 
})
