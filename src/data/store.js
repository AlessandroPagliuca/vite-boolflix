import { reactive } from "vue";

export const store = reactive({
    moviesList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '42023cf506bcdf24045a38b3f8670624',
        query: '',
    },
    endpoint: {
        movie: 'search/movie',
        tv: 'search/tv',
    },
    imgBaseURL: 'https://image.tmdb.org/t/p/w342',
});