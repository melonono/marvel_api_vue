// Vue.filter('description', function (comicList) {
//   return `$${comicList}`;
// });

const app = new Vue({
  el:'#marvel-app',
  data(){
    return {
    search:'',
    comics:[],
    comicList:[],
    loading: true,
    errored: false,
    modalBox: true
  } 
  },
  mounted: function(){

    fetch('https://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9')

    .then(response => {
      return response.json();
    })
    .then(response => {
      this.comicList = response.data.results;
      console.log(response)  
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },     

  methods:{

    doSearch() {
      // if(this.search !== ''){
      //   return alert("fail!"); 
      // }   
      console.log(this.search);
      fetch(`https://gateway.marvel.com/v1/public/comics/${this.search}?limit=100&ts=1&apikey=ef29af83e248deb9ad49fb90cccc912e&hash=2d1959e3a52bc4f68a0be966394966b9`)

      .then(response=>response.json())
      .then(response => {
        this.comics = response.data.results;  
      });
    },

      modalAction(){
        if (this.modalBox == true) {
          this.modalBox = false
        } else {
          this.modalBox = true
        }
      },

  },
  
})
//  computed: {
   
//   filteredComics: function(){
//       return this.searchResults.filter(comics => {
//         let lowerComicsName = comics.title.toLowerCase();
//         let lowerComicSearch = this.comicSearch.toLowerCase();
//         if (lowerComicsName.includes(lowerComicSearch)) {
//           console.log(comics);
//           return comics; 
//         }
//     }) 
//   }

// }

