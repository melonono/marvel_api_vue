
const app = new Vue({
  el: '#marvel-app',
    
  data () {
    return{
      comicId: '', 
      // url: '',
      // size: '',
      comicSearch: '',
      marvelResults:[],
      loading: true,
      errored: false,
      show: false,
      modal: false,

    }
    
  },
  methods:{
    
    modalAction(){
      
      if (this.modal == false ){
        this.modal = true
      } else {
        this.modal = false
      }
    }, 

    hideResult(){
      if (this.show == false ){
        this.show = true
      } else {
        this.show = false
      }
    }
  
},

  mounted() {
  // till filteredComics
  fetch('https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9')
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.searchResults = response.data.results;
      console.log(this.searchResults)
    })
    .catch(error => {
        console.log(error)
        this.errored = true
    }) .finally(() => this.loading = false)
  
  //till det som ska visas när användare är inne på sidan
  fetch('https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9')
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.marvelResults = response.data.results;
      console.log(this.marvelResults)
  })    .catch(error => {
    console.log(error)
    this.errored = true
  })
  .finally(() => this.loading = false)



  // till modal box på något vis med ${comicId}

 /*
comicId = this.comicId

   fetch(`https://gateway.marvel.com/v1/public/comics/${comicsId}?ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9`)

comicId = this.comicId

 fetch(`https://gateway.marvel.com/v1/public/comics/2550?ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9`)
  .then(response => {
    return response.json();
  })
  .then(response => {
    this.comicId = response.data.results;
    console.log(this.comicId)
  })*/
 },  

 computed: {

  filteredComics(){
      return this.searchResults.filter(comics => {
      let searchResult = lowerComicsName.includes(lowerComicSearch);
      let lowerComicSearch = this.comicSearch.toLowerCase();
        if (searchResult) return comics.title;
      return lowerComicsName.includes(lowerComicSearch),
      console.log(filteredComics());
    }) 
    
  }
  
    // filteredComics(){
    //       return this.searchResults.filter(comics => {
    //       let lowerComicsName = comics.title.toLowerCase();
    //       let lowerComicSearch = this.comicSearch.toLowerCase();
    //       return lowerComicsName.includes(lowerComicSearch);
    //   })
    // }
  }
  
});






    