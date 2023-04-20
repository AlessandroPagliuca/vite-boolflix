<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="movie in store.moviesList">
                <div class="card">
                    <img class="card-img-top" :src="store.imgBaseURL + movie.poster_path" :alt="movie.title">
                    <div class="card-body">
                        <p class="card-text">{{ movie.title }}</p>
                        <p class="card-text">{{ movie.original_title }}</p>
                        <p class="card-text">{{ movie.original_language }}</p>
                        <p class="card-text">{{ movie.vote_average }}</p>

                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    import {store} from '../data/store';
    import axios from 'axios';
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