// Filtering logic for movie searching on frontpage
let allMovies = []

function debounce(func, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

async function initMovies() {
  const movies = await fetchAPI()
  console.log('Hittade filmer:', movies)
  allMovies = movies
  createMovies()
}

function executeSearch(query) {
  console.log('Sökta filmer:', query)
  const filteredResults = allMovies.filter((movie) => {
    const matchesQuery =
      movie.ageLimit.toLowerCase().includes(query.toLowerCase()) ||
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some((genre) => genre.toLowerCase().includes(query.toLowerCase()))
    return matchesQuery
  })
  console.log('Fil:', filteredResults)
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

// connecting debounce to searchfield
const debouncedSearch = debounce((query) => executeSearch(query), 300)
document.querySelector('.search__input').addEventListener('input', (e) => {
  const query = e.target.value
  if (query.length >= 3) {
    debouncedSearch(query) // minimum 3
  } else {
    const movieContainer = document.querySelector('.movie__wrapper')
    movieContainer.innerHTML = '' //Clearing results
  }
})
