//This is code for card 3.3.3 (Function to display movie information about a specific clicked movie)

function generateMovieCards() {
  const movieContainer = document.querySelector('.movie-cards__container')

  fetch('fake-MovieAPI.json') //Fetching json resource
    .then((response) => response.json()) //Makin json resource a js object
    .then((data) => {
      console.log(data) //Vad får jag tbx?
      const movies = data.movies //om movies är en del av svaret

      movies.forEach((movie) => {
        //looping through each movie
        const movieCard = document.createElement('div') //Creating a moviecard for every movie
        movieCard.classList.add('movie-card') //Assigning a class to the card
        movieCard.innerHTML = `<img src="${movie.imagePoster}" alt="${movie.title}" />
                    <h3>${movie.title}</h3>`

        movieCard.addEventListener('click', () => {
          displayMovieDetails(movie)
        })

        movieContainer.appendChild(movieCard) //Adding the card to the container
      })
    })
    .catch((error) => console.error('Error fetching movie information:', error)) //Error handling
}

//Function to show details about movies in the modal when card is clicked
function displayMovieDetails(movie) {
  document.querySelector('.movie-details__image').src = movie.imagePoster
  document.querySelector('.movie-details__title').innerText = movie.title
  document.querySelector('.movie-details__id').innerText = `ID: ${movie.id}`
  document.querySelector('.movie-details__runtime').innerText = `Runtime: ${movie.runtime}`
  document.querySelector('.movie-details__description').innerText = movie.description
  document.querySelector('.movie-details__genres').innerText = `Genres: ${movie.genres.join(', ')}`

  const modal = document.querySelector('.movie-modal')
  modal.classList.add('open') //Adding class to modal
}

// closing modal
document.querySelector('.movie-modal__close').addEventListener('click', () => {
  const modal = document.querySelector('.movie-modal')
  modal.classList.remove('open') // Stänger modalen
})

generateMovieCards() //calling the function to show moviecards
