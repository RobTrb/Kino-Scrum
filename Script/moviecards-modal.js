document.getElementById('header__children-movies').addEventListener('click', async function () {
  const movies = await fetchAPI() // Fetch movies
  if (movies) {
    // Filter PG-13 movies
    const pg13Movies = movies.filter((movie) => movie.ageLimit === 'PG-13')
    createMovies(pg13Movies) // Call the function to display PG-13 movies
  }
})

document.getElementById('header__menu').addEventListener('click', async function () {
  const movies = await fetchAPI() // Fetch all movies
  if (movies) {
    createMovies(movies) // Call the function to display all movies
  }
})

async function fetchAPI() {
  const url = 'fake-MovieAPI.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json()
    return data.movies // Return the full list of movies
  } catch (error) {
    console.error('Error fetching API:', error.message)
  }
}

async function createMovies(movies) {
  try {
    console.log('Movies:', movies) // Log fetched movies

    if (!Array.isArray(movies)) {
      throw new Error('Fetched data is not an array')
    }

    if (!movies || movies.length === 0) {
      throw new Error('No movies found.')
    }

    const movieContainer = document.querySelector('.movie__wrapper')
    movieContainer.innerHTML = '' // Clear any previous content

    // Create movie DOM elements
    for (let i = 0; i < movies.length; i++) {
      const movieData = movies[i]

      const movieDOM = document.createElement('div')
      movieDOM.classList.add('movie')
      movieDOM.setAttribute('id', 1 + i)
      movieContainer.appendChild(movieDOM)

      const movieAgeLimit = document.createElement('span')
      movieAgeLimit.classList.add('movie__age-limit')
      movieAgeLimit.innerHTML = movieData.ageLimit
      movieDOM.appendChild(movieAgeLimit)

      const moviePoster = document.createElement('img')
      moviePoster.classList.add('movie__poster')
      const moviePosterURL = movieData.imagePoster
      moviePoster.setAttribute('src', moviePosterURL)
      movieDOM.appendChild(moviePoster)

      const movieTitle = document.createElement('h3')
      movieTitle.classList.add('movie__title')
      movieTitle.innerHTML = movieData.title
      movieDOM.appendChild(movieTitle)

      const movieGenres = document.createElement('span')
      movieGenres.classList.add('movie__genres')
      movieGenres.innerHTML = movieData.genres.join(' / ')
      movieDOM.appendChild(movieGenres)

      // Listener when clicking on a movie
      movieDOM.addEventListener('click', () => {
        console.log('Clicked movie:', movieData.title)
        showModal(movieData)
      })
    }
  } catch (error) {
    console.error('Error fetching or displaying movies:', error)
    const movieContainer = document.querySelector('.movie__wrapper')
    const errorMessage = document.createElement('div')
    errorMessage.classList.add('error-message')
    errorMessage.innerHTML = 'Error loading movies.'
    movieContainer.appendChild(errorMessage)
  }
}