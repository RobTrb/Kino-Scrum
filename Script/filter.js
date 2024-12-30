// Filtering logic for movie searching on frontpage
let allMovies = []

async function initMovies() {
  const movies = await fetchAPI()
  allMovies = movies
  createMovies()
}

function executeSearch(query) {
  const filteredResults = allMovies.filter((movie) => {
    const matchesQuery =
      movie.ageLimit.toLowerCase().includes(query.toLowerCase()) ||
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some((genre) => genre.toLowerCase().includes(query.toLowerCase()))
    return matchesQuery
  })

  displaySearchResults(filteredResults)
}

function displaySearchResults(filteredResults) {
  const movieContainer = document.querySelector('.movie__wrapper')
  movieContainer.innerHTML = ''

  if (filteredResults.length === 0) {
    const noResultsMsg = document.createElement('div')
    noResultsMsg.classList.add('search__noresultsmsg')
    noResultsMsg.textContent = 'Din sökning matchade ingen av våra aktuella visningar'
    movieContainer.appendChild(noResultsMsg)
  } else {
    filteredResults.forEach((movieData, index) => {
      const movieDOM = document.createElement('div')
      movieDOM.classList.add('movie')
      movieDOM.setAttribute('id', 1 + index)
      movieContainer.appendChild(movieDOM)

      const movieAgeLimit = document.createElement('span')
      movieAgeLimit.classList.add('movie__age-limit')
      movieAgeLimit.innerHTML = movieData.ageLimit
      movieDOM.appendChild(movieAgeLimit)

      const moviePoster = document.createElement('img')
      moviePoster.classList.add('movie__poster')
      moviePoster.setAttribute('src', movieData.imagePoster)
      movieDOM.appendChild(moviePoster)

      const movieTitle = document.createElement('h3')
      movieTitle.classList.add('movie__title')
      movieTitle.innerHTML = movieData.title
      movieDOM.appendChild(movieTitle)

      const movieGenres = document.createElement('span')
      movieGenres.classList.add('movie__genres')
      movieGenres.innerHTML = movieData.genres.join(' / ')
      movieDOM.appendChild(movieGenres)
    })
  }
}
