createMovies()

async function createMovies() {
  const movies = await fetchAPI()

  const movieContainer = document.querySelector('.movie__wrapper')

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
  }
}
