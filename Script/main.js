//Fetch FrontPage Content

loadFrontPageContent()

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
    document.querySelector('.background-image').setAttribute('src', frontPageImages.backgroundImage)

    //HEADER
    document.querySelector('.header__logo-title').innerHTML = frontPageContent.header.logoTitle
    const navItems = document.querySelectorAll('.header__nav-item')
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].innerHTML = frontPageContent.header.menu[i]
    }

    //MAIN
    document.querySelector('.search__label').innerHTML = frontPageContent.main.searchLabel
    document.querySelector('.search__input').setAttribute('placeholder', frontPageContent.main.searchInput)
    document.querySelector('.filter-btn__today').innerHTML = frontPageContent.main.btnToday
    document.querySelector('.filter-btn__tomorrow').innerHTML = frontPageContent.main.btnTomorrow
    document.querySelector('.filter-btn__other').innerHTML = frontPageContent.main.btnOther
    document.querySelector('.filter-genre__dropdown-all').innerHTML = frontPageContent.main.dropdownGenreAll
    document.querySelector('.filter-btn__show-less').innerHTML = frontPageContent.main.btnShowLess
    document.querySelector('.filter-btn__show-all').innerHTML = frontPageContent.main.btnShowAll

    //FOOTER
    document.querySelector('.footer__social-title').innerHTML = frontPageContent.footer.socialTitle
    document.querySelector('.footer__contact-title').innerHTML = frontPageContent.footer.contactTitle
    document.querySelector('.footer__find-Us-title').innerHTML = frontPageContent.footer.findUsTitle
    document.querySelector('.footer__partners-title').innerHTML = frontPageContent.footer.partnersTitle
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
