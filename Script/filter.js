// Filtering logic to be implemented in search field for filtering moviecards fetched from fake-API
function executeSearch(query) {
  const movieCards = createMovies()
  console.log('All movies:', createMovies)
  const filteredResults = movieCards.filter((movie) => {
    const matchesQuery =
      movie.ageLimit.toLowerCase().includes(query.toLowerCase()) ||
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some((genre) => genre.toLowerCase().includes(query.toLowerCase()))
  })
}
