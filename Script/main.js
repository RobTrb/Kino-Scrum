//Fetch FrontPage Content

loadFrontPageContent()
addFrontPageContent()

async function loadFrontPageContent() {
  try {
    const contentResponse = await fetch('FrontPage-content.json')
    if (!contentResponse.ok) throw new Error('Failed to load content')
    const frontPageContent = await contentResponse.json()
    console.log(frontPageContent)

    const imagesResponse = await fetch('FrontPage-images.json')
    if (!imagesResponse.ok) throw new Error('Failed to load images')
    const frontPageImages = await imagesResponse.json()
    console.log(frontPageImages)

    //IMAGES
    const imageUrl = frontPageImages.backgroundImage
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imageUrl})`

    return frontPageContent
  } catch (error) {
    console.error('Error loading front page content:', error)

    const errorMessage = document.createElement('div')
    errorMessage.classList.add('error-message')
    errorMessage.innerHTML = 'Oops! Something went wrong while loading the page. Please try again later.'
    document.body.appendChild(errorMessage)

    document.querySelector('header').style.display = 'none'
    document.querySelector('main').style.display = 'none'
    document.querySelector('footer').style.display = 'none'
  }
}

async function addFrontPageContent() {
  const frontPageContent = await loadFrontPageContent()

  //HEADER
  document.querySelector('.header__logo-title').innerHTML = frontPageContent.header.logoTitle
  const navItems = document.querySelectorAll('.header__nav-item')
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].innerHTML = frontPageContent.header.menu[i]
  }

  //MAIN
  document.querySelector('.search__label').innerHTML = frontPageContent.main.searchLabel
  document.querySelector('.search__input').setAttribute('placeholder', frontPageContent.main.searchInput)
  document.querySelector('.search__clear').innerHTML = frontPageContent.main.searchClear
  document.querySelector('.mobile__filter-menu').innerHTML = frontPageContent.main.mobileFilterMenu
  document.querySelector('.filter-btn--today').innerHTML = frontPageContent.main.btnToday
  document.querySelector('.filter-btn--tomorrow').innerHTML = frontPageContent.main.btnTomorrow
  document.querySelector('.filter-btn--other').innerHTML = frontPageContent.main.btnOther
  document.querySelector('.filter-genre__dropdown-all').innerHTML = frontPageContent.main.dropdownGenreAll
  document.querySelector('.filter-genre__dropdown-horror').innerHTML = frontPageContent.main.dropdownGenreHorror
  document.querySelector('.filter-genre__dropdown-comedy').innerHTML = frontPageContent.main.dropdownGenreComedy
  document.querySelector('.filter-genre__dropdown-action').innerHTML = frontPageContent.main.dropdownGenreAction
  document.querySelector('.filter-genre__dropdown-romance').innerHTML = frontPageContent.main.dropdownGenreRomance
  document.querySelector('.filter-genre__dropdown-kids').innerHTML = frontPageContent.main.dropdownGenreKids
  document.querySelector('.filter-btn__show-less').innerHTML = frontPageContent.main.btnShowLess
  document.querySelector('.filter-btn__show-all').innerHTML = frontPageContent.main.btnShowAll

  //FOOTER
  document.querySelector('.footer__social-title').innerHTML = frontPageContent.footer.socialTitle
  document.querySelector('.footer__contact-title').innerHTML = frontPageContent.footer.contactTitle
  document.querySelector('.footer__contact-info').innerHTML = frontPageContent.footer.contactInfo
  document.querySelector('.footer__contact-number').innerHTML = frontPageContent.footer.contactNumber
  document.querySelector('.footer__contact-mail1').innerHTML = frontPageContent.footer.contactMail1
  document.querySelector('.footer__contact-mail2').innerHTML = frontPageContent.footer.contactMail2
  document.querySelector('.footer__find-Us-title').innerHTML = frontPageContent.footer.findUsTitle
  document.querySelector('.footer__find-Us-streetname').innerHTML = frontPageContent.footer.findUsStreetName
  document.querySelector('.footer__find-Us-postalcode').innerHTML = frontPageContent.footer.findUsPostalCode
  document.querySelector('.footer__find-Us-country').innerHTML = frontPageContent.footer.findUsCountry
  document.querySelector('.footer__partners-title').innerHTML = frontPageContent.footer.partnersTitle
}
// Eventlistener for search input
document.addEventListener('DOMContentLoaded', () => {
  initMovies()
  const searchInput = document.querySelector('.search__input')
  searchInput.addEventListener('input', (L) => {
    executeSearch(L.target.value)
  })

  // Clear search field button
  const clearButton = document.querySelector('.search__clear')

  clearButton.addEventListener('click', function () {
    searchInput.value = ''
    searchInput.focus()
    createMovies()
  })
})
