document.getElementById('header__children-movies').addEventListener('click', function () {
  const body = document.body

  setTimeout(function () {
    // Add barn-bio class to zoom in
    body.classList.add('barn-bio')
    body.classList.remove('filmer') // Ensure filmer class is removed

    // Set background to balloons
    body.style.backgroundImage = 'url("assets/images/backgrounds/balloons.png")'
  }, 200) // Wait for opacity transition to finish
})

document.getElementById('header__menu').addEventListener('click', function () {
  const body = document.body

  setTimeout(function () {
    // Add filmer class to zoom out
    body.classList.add('filmer')
    body.classList.remove('barn-bio') // Ensure barn-bio class is removed

    // Set background back to main
    body.style.backgroundImage = 'url("assets/images/backgrounds/background_main.webp")'
  }, 200)
})
