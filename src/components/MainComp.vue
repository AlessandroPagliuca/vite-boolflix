<template>
    <main>

        <section  class="container-fluid">

            <div class="row justify-content-center gap-3">

                <div class="col-12">

                    <h2 class="text-white">Films</h2>

                </div>

                <div class="col-8 col-sm-6 col-md-4 col-lg-3" v-for="movie in store.moviesList">
                    
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

            <div class="row justify-content-center gap-3">

                <div class="col-12">

                    <h2 class="text-white">Tv / Series</h2>

                </div>

                <div class="col-8 col-sm-6 col-md-4 col-lg-3" v-for="serie in store.seriesList">
                    
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
        padding-top: 80px;
        width: 100%;
        background: #000;
        
    }

</style>