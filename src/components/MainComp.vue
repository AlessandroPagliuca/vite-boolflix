<template>
    <main>

        <section  class="container-fluid">

            <h2 class="text-white p-3">Films</h2>

            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 p-3" v-for="movie in store.moviesList">
                    
                    <div class="card">

                        <img class="card-img-top" :src="store.imgBaseURL + movie.poster_path" :alt="movie.title">
                        
                        <div class="card-body">

                            <p class="fw-semibold">{{ movie.title }}</p>
                            <p class="fw-semibold">{{ movie.original_title }}</p>
                            <p class="fw-semibold">{{ movie.original_language }}</p>
                            <p class="fw-semibold">{{ movie.vote_average }}</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section  class="container-fluid">
           
            <h2 class="text-white p-3">Tv / Series</h2>


            <div class="row justify-content-center">

                <div class="col-8 col-sm-6 col-md-4 col-lg-3 p-3" v-for="serie in store.seriesList">
                    
                    <div class="card">

                        <img class="card-img-top" :src="store.imgBaseURL + serie.poster_path" :alt="serie.title">
                        
                        <div class="card-body">

                            <p class="fw-semibold">{{ serie.name }}</p>
                            <p class="fw-semibold">{{ serie.original_title }}</p>
                            <p class="fw-semibold">{{ serie.original_language }}</p>
                            <p class="fw-semibold">{{ serie.vote_average }}</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
        
    </main>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'MainComp',
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

        .card{
            position: relative;

            .card-body{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                transition: 0.7s;
                background-color: black;
            }

            &.card:hover .card-body{
                opacity: 0.9;
            }

        }
        

        
    }

</style>