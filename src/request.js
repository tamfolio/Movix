const API_KEY = 'cb67f7573437c3bf391c1bbe2711c388';

const requests = {
    fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
    featuredMovies:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

}

export default requests;