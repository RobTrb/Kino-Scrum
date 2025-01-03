const genreDropdown = document.querySelector('.filter-genre__dropdown')

genreDropdown.addEventListener('change', async function () {
  const movies = await fetchAPI()
  const movieDiv = document.querySelectorAll('.movie')

  for (let i = 0; i < movieDiv.length; i++) {
    movieDiv[i].style.display = 'none'
  }

  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].genres.includes(genreDropdown.value) && genreDropdown.value !== 'all') {
      movieDiv[i].style.display = 'none'
    } 
    else {
      movieDiv[i].style.display = ''
    }
  }
})

