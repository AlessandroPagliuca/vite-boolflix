<template>
    <div class="card">

        <img class="card-img-top" :src="src_image" :alt="title">

        <div class="card-body">

            <p class="fw-semibold">Title: {{ title }}</p>
            <p class="fw-semibold">Original title: {{ original_title }}</p>
            <p class="fw-semibold">Original language: {{ original_language }}</p>
            <p class="fw-semibold">Vote: {{ vote_average }}</p>

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
    ],

}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    border: 2px solid black;
    height: 600px;

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
    }

    &.card:hover .card-body {
        opacity: 1;
        background: rgba(20, 20, 20, 0.5);
        color: white;
    }

}
</style>