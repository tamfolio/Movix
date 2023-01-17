const API_KEY = 'cb67f7573437c3bf391c1bbe2711c388';

const requests = {
    fetchNowPlaying: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    featuredMovies:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    featuredActors: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`

}

export default requests;