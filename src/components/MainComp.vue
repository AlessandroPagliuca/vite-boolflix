<template>
    <main>
        <!--Jumbotron-->
        <div id="jumbo">
            <img src="/jumbonetflix.png" alt="">
        </div>
        <!--section films-->
        <section  class="container-fluid">

            <h2 class="text-white p-3">Films</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 p-3" v-for="movie in store.moviesList">
                    
                    <SingleCard :title="movie.title" :src_image="store.imgBaseURL + movie.poster_path"
                    :original_title="movie.original_title" :original_language="movie.original_language"
                    :vote_average="movie.vote_average"/>

                </div>

            </div>

        </section>
        <!--section films-->
        <section  class="container-fluid">
           
            <h2 class="text-white p-3">Tv / Series</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 p-3" v-for="serie in store.seriesList">

                    <SingleCard :title="serie.name" :src_image="store.imgBaseURL + serie.poster_path"
                    :original_title="serie.original_title" :original_language="serie.original_language"
                    :vote_average="serie.vote_average"/>

                </div>

            </div>

        </section>
        
    </main>
</template>

<script>
    import {store} from '../data/store';
    import SingleCard from './SingleCard.vue';
    export default {
        name: 'MainComp',
        components:{
            SingleCard,
        },
        data(){
            return{
                store,
            }
        },
        methods:{
          /* getMovieImg(){
            if(this.store.moviesList.poster_path !== null || this.store.moviesList.poster_path !== undefined){
                return this.store.moviesList.poster_path;
            } else{
                return this.store.imgNull;
            }
        },
        getSeriesImg(){
            if(this.store.moviesList.poster_path !== null || this.store.moviesList.poster_path !== undefined){
                return this.store.seriesList.poster_path;
            } else{
                return this.store.imgNull;
            }
        }*/

        },
    }
</script>

<style lang="scss" scoped>
    main{
        width: 100%;
        height: 100vh;
        background: #000000;
        overflow-y: auto;
        
    }
    #jumbo{
        width: 100%;
        height: 500px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>