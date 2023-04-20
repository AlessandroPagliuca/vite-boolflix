<template>
    <header class="container-fluid d-flex align-items-center">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <h1 class="text-uppercase text-danger">netflix</h1>
            
            <div class="d-flex justify-content-center">
                <div class="form-group">
                    <input type="text" v-model="store.params.query" class="form-control" placeholder="Search" @keyup.enter="search">
                </div>
                
                <button type="btn" class="btn btn-danger mx-2" @click="search">Search</button>

            </div>
        
        </div>
    </header>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'HeaderComp',
        data(){
            return{
                store,
            }
        },
        methods:{
            search(){
                this.$emit('onSearch');
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 80px;
        background-color: black;
        
    }

</style>