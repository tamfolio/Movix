const API_KEY = 'cb67f7573437c3bf391c1bbe2711c388';

const requests = {
    fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
    featuredMovies:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    featuredActors: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`

}

export default requests;