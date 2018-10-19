if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function () {
            console.log('SW registered');
        });
}
new Vue({
    el:'#app',
    data:{
        pesan: 'NARUTO ANAKE MINATO',
        berita : {},
    },
    methods:{
       perbarui(){
           var ini = this;
           axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=7c60d317fc4949c9b4952314cb890d89').then(function (response) {
               ini.berita = response.data.articles
               console.log(response.data.status);
           });
       }
    }
})