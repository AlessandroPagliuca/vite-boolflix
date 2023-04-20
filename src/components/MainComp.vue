<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="movie in store.moviesList">
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <p>{{ movie.title }}</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>

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