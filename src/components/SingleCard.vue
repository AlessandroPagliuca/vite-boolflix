<template>
    <div class="card">

        <img class="card-img-top" :src="src_image" :alt="title">

        <div class="card-body">

            <h5>Title: {{ title }}</h5>
            <h5>Original title: {{ original_title }}</h5>
            <p class="card-text">Original language: {{ original_language }}</p>
            <p class="card-text">Vote: {{ vote_average }}</p>
            <p class="card-text" :class="overview">Overview: <small>{{ overview }}</small> </p>
            

        </div>

    </div>
</template>

<script>
export default {
    name: 'SingleCard',
    props: [
        'title',
        'src_image',
        'original_title',
        'original_language',
        'vote_average',
        'overview',
    ],

}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    height: 600px;
    cursor: pointer;
    box-shadow: 0 0 0.9rem rgb(80, 80, 80);
    --bs-card-bg: black !important;

    img{
        width: 100%;
        height: 100%;
    }
    .card-body {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: 0.7s;
        overflow-y: auto;

        p{
            font-size: 18px;
        }
    }

    &.card:hover .card-body {
        opacity: 1;
        background: rgba(20, 20, 20, 0.6);
        color: white;
    }

}
</style>