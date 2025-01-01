document.addEventListener('DOMContentLoaded', () => {
  createMovies()
})

// Fetch movie data from API
async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`https://api.example.com/movies/${movieId}`)
    const data = await response.json()

    // Open modal with fetched data
    openModal({
      imageUrl: data.imageUrl,
      title: data.title,
      id: data.id,
      runtime: data.runtime,
      description: data.description,
      genres: data.genres,
    })
  } catch (error) {
    console.error('Error fetching movie details:', error)
  }
}
