<template>
    <header class="p-3">
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <h1 class="text-uppercase text-danger">netflix</h1>
            <SearchBar/>
        </div>
    </header>
</template>

<script>
    import SearchBar from './SearchBar.vue';
    export default {
        name: 'HeaderComp',
        components:{
            SearchBar,
        },
        
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 80px;
        background-color: rgb(5, 5, 5,);
        
    }

</style>