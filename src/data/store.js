import { reactive } from "vue";

export const store = reactive({
    moviesList: [],
    seriesList:[],
    baseUrl: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '42023cf506bcdf24045a38b3f8670624',
        query: '',
    },
    endpoint: {
        movie: 'search/movie',
        serie: 'search/tv',
    },
    imgBaseURL: 'https://image.tmdb.org/t/p/',
    fileSize: 'w342',
    errors:{
        movie: '',
        serie: '',
    }
});