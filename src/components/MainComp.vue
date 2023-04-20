<template>
    <main>

        <section  class="container-fluid">

            <h2 class="text-white p-3">Films</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 p-3" v-for="movie in store.moviesList">
                    
                    <SingleCard :title="movie.title" :src_image="store.imgBaseURL + movie.poster_path"
                    :original_title="movie.original_title" :original_language="movie.original_language"
                    :vote_average="movie.vote_average"/>

                </div>

            </div>

        </section>

        <section  class="container-fluid">
           
            <h2 class="text-white p-3">Tv / Series</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 p-3" v-for="serie in store.seriesList">

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
          
        }
    }
</script>

<style lang="scss" scoped>
    main{
        width: 100%;
        height: calc(100vh - 80px);
        background: #2b2727;
        overflow-y: auto;
        
    }

</style>