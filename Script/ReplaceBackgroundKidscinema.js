document.getElementById('header__children-movies').addEventListener('click', function () {
  const body = document.body

  // Check the current background and replace it
  if (body.style.backgroundImage.includes('balloons.png')) {
    body.style.backgroundImage = 'url("assets/images/backgrounds/background_main.webp")'
  } else {
    body.style.backgroundImage = 'url("assets/images/backgrounds/balloons.png")'
  }
})
