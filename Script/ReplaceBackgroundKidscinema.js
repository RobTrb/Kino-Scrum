document.getElementById('header__children-movies').addEventListener('click', function () {
  const body = document.body

  body.style.transition = 'background-image 1s ease, background-size 1s ease' // Include background-size transition
  body.style.backgroundImage = 'url("assets/images/backgrounds/balloons.png")'
  body.style.backgroundSize = 'cover' // Ensure the image scales correctly during transition
  body.style.backgroundPosition = 'center' // Keep the image centered
})

document.getElementById('header__menu').addEventListener('click', function () {
  const body = document.body

  // Ensure smooth transition when reversing
  body.style.transition = 'background-image 1s ease, background-size 1s ease' // Include background-size transition
  body.style.backgroundImage = 'url("assets/images/backgrounds/background_main.webp")'
  body.style.backgroundSize = 'cover' // Ensure the image scales correctly during transition
  body.style.backgroundPosition = 'center' // Keep the image centered
})
