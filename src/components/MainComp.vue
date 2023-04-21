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
                    
                    <SingleCard :title="movie.title" :src_image="movie.poster_path ? store.imgBaseURL + store.fileSize + movie.poster_path : '/nullimg.png'"
                    :original_title="movie.original_title" :alt="movie.original_language" :original_language="movie.original_language"
                    :vote_average="movie.vote_average" :overview="movie.overview ? movie.overview : 'd-none'"/>

                </div>

            </div>

        </section>
        <!--section films-->
        <section  class="container-fluid">
           
            <h2 class="text-white p-3">Tv / Series</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 p-3" v-for="serie in store.seriesList">

                    <SingleCard :title="serie.name" :src_image="serie.poster_path ? store.imgBaseURL + store.fileSize + serie.poster_path : '/nullimg.png'"
                    :original_title="serie.original_title" :original_language="serie.original_language"
                    :vote_average="serie.vote_average" :overview="serie.overview ? serie.overview : 'd-none'"/>

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

        },
    }
</script>

<style lang="scss" scoped>
    main{
        width: 100%;
        height: 100vh;
        background: #000000;
        overflow-y: auto;

        #jumbo{
        width: 100%;
        height: 600px;

            img{
                width: 100%;
                height: 100%;
                object-fit:cover;
                object-position: 50% 50%;
            }
        }

        
    }
   

</style>