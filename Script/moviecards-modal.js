//This is code for card 3.3.3 (Function to display movie information about a specific clicked movie)

function generateMovieCards() {
  const movieContainer = document.querySelector('.movie-cards__container')

  fetch('fake-MovieAPI.json') //Fetching json resource
    .then((response) => response.json()) //Makin json resource a js object
    .then((movies) => {
      movies.forEach((movie) => {
        //looping through each movie
        const card = document.createElement('div') //Creating a moviecard for every movie
        card.classList.add('movie-card') //Assigning a class to the card
        card.dataset.movieId = movie.id //Movie ID is set as the data attribute
        card.innerHTML = `<img src="${movie.image}" alt="${movie.title}" />
                    <h3>${movie.title}</h3>`

        card.addEventListener('click', () => displayMovieDetails(movie))

        movieContainer.appendChild(card) //Adding the card to the container
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
}

generateMovieCards() //calling the function to show moviecards
