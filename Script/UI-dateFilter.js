//FILTER BUTTONS MOBILE

const moreFiltersBtn = document.querySelector('.mobile__filter-menu')
const filterBtnContainer = document.querySelector('.filter-btn__container')

moreFiltersBtn.addEventListener('click', () => {
  filterBtnContainer.style.display = 'flex'
  const closeBtn = document.createElement('span')
  closeBtn.classList.add('filter-btn__close-btn')
  closeBtn.innerHTML = '\u00d7'
  filterBtnContainer.insertBefore(closeBtn, filterBtnContainer.children[0])
  closeBtn.addEventListener('click', () => {
    filterBtnContainer.style.display = 'none'
    closeBtn.remove()
  })
})

//DATE POPUP

function formatDate(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}

function generateDateList() {
  const today = new Date()
  const dateList = []

  for (let i = 0; i <= 13; i++) {
    const futureDate = new Date(today)
    futureDate.setDate(today.getDate() + i)
    dateList.push(formatDate(futureDate))
  }

  return dateList
}

async function updateDateFilter() {
  const frontPageContent = await loadFrontPageContent()

  const dateFilterList = document.querySelector('.date-filter__list')
  const dateList = generateDateList()

  dateFilterList.innerHTML = ''

  dateList.forEach((date) => {
    const dateBtn = document.createElement('button')
    dateBtn.classList.add('date__btn')
    const updatedDate = getOnlyDate(date, frontPageContent)
    dateBtn.innerHTML = updatedDate
    dateFilterList.appendChild(dateBtn)

    dateBtn.addEventListener('click', () => {
      if (window.innerWidth <= 800) {
        document.querySelector('.filter-btn__close-btn').click()
      }

      const allDateBtns = dateFilterList.querySelectorAll('.date__btn')

      if (dateBtn.classList.contains('date-activated')) {
        document.querySelector('.date-filter__wrapper').classList.toggle('display')
        allDateBtns.forEach((btn) => btn.classList.remove('date-activated'))

        const allMovieElements = document.querySelectorAll('.movie')
        allMovieElements.forEach((movieElement) => {
          movieElement.style.display = 'block'
        })
        dateBtn.classList.remove('date-activated')
      } else {
        allDateBtns.forEach((btn) => btn.classList.remove('date-activated'))
        document.querySelector('.date-filter__wrapper').classList.toggle('display')
        dateBtn.classList.add('date-activated')
        dateFilter(date)
      }
    })
  })
}

function getOnlyDate(date, frontPageContent) {
  let theDay = date.slice(-2)
  let theMonth = date.slice(5, 7)
  let theMonthLetters = ''

  if (theMonth == '01') {
    theMonthLetters = frontPageContent.dateFilter.month1
  }
  if (theMonth == '02') {
    theMonthLetters = frontPageContent.dateFilter.month2
  }
  if (theMonth == '03') {
    theMonthLetters = frontPageContent.dateFilter.month3
  }
  if (theMonth == '04') {
    theMonthLetters = frontPageContent.dateFilter.month4
  }
  if (theMonth == '05') {
    theMonthLetters = frontPageContent.dateFilter.month5
  }
  if (theMonth == '06') {
    theMonthLetters = frontPageContent.dateFilter.month6
  }
  if (theMonth == '07') {
    theMonthLetters = frontPageContent.dateFilter.month7
  }
  if (theMonth == '08') {
    theMonthLetters = frontPageContent.dateFilter.month8
  }
  if (theMonth == '09') {
    theMonthLetters = frontPageContent.dateFilter.month9
  }
  if (theMonth == '10') {
    theMonthLetters = frontPageContent.dateFilter.month10
  }
  if (theMonth == '11s') {
    theMonthLetters = frontPageContent.dateFilter.month11
  }
  if (theMonth == '12') {
    theMonthLetters = frontPageContent.dateFilter.month12
  }

  return `${theDay} ${theMonthLetters}`
}

updateDateFilter()
setInterval(updateDateFilter, 24 * 60 * 60 * 1000)

document.querySelector('.filter-btn--other').addEventListener('click', async () => {
  todayBtn.classList.remove('date-activated')
  tomorrowBtn.classList.remove('date-activated')
  document.querySelector('.date-filter__wrapper').classList.toggle('display')
  const dateBtn = document.querySelector('.date-filter__list')
  const existingCloseBtn = document.querySelector('.date__close-btn')

  if (!existingCloseBtn) {
    const dateTitle = document.createElement('h3')
    dateTitle.classList.add('date__title')
    const frontPageContent = await loadFrontPageContent()
    dateTitle.innerHTML = frontPageContent.dateFilter.dateTitle
    dateBtn.insertBefore(dateTitle, dateBtn.children[0])

    const closeBtn = document.createElement('span')
    closeBtn.innerHTML = '\u00d7'
    closeBtn.classList.add('date__close-btn')
    dateBtn.insertBefore(closeBtn, dateBtn.children[0])

    closeBtn.addEventListener('click', () => {
      document.querySelector('.date-filter__wrapper').classList.toggle('display')
    })
  }
})

//TODAY & TOMORROW

const todayBtn = document.querySelector('.filter-btn--today')
const tomorrowBtn = document.querySelector('.filter-btn--tomorrow')

todayBtn.addEventListener('click', () => {
  if (!todayBtn.classList.contains('date-activated')) {
    tomorrowBtn.classList.remove('date-activated')
    todayBtn.classList.add('date-activated')

    const today = new Date()
    dateFilter(formatDate(today))

    if (window.innerWidth <= 800) {
      document.querySelector('.filter-btn__close-btn').click()
    }
  }
})

tomorrowBtn.addEventListener('click', () => {
  if (!tomorrowBtn.classList.contains('date-activated')) {
    todayBtn.classList.remove('date-activated')
    tomorrowBtn.classList.add('date-activated')

    if (window.innerWidth <= 800) {
      document.querySelector('.filter-btn__close-btn').click()
    }
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    dateFilter(formatDate(tomorrow))
  }
})

//FILTER FUNCTION

async function dateFilter(date) {
  const movies = await fetchAPI()

  const filteredMovies = movies.filter((movie) => {
    const startDate = new Date(movie.startDate)
    const endDate = new Date(movie.endDate)
    const selectedDate = new Date(date)

    return selectedDate >= startDate && selectedDate <= endDate
  })
  console.log(filteredMovies)

  const allMovieElements = document.querySelectorAll('.movie')
  allMovieElements.forEach((movieElement) => {
    movieElement.style.display = 'none'
  })

  filteredMovies.forEach((movie) => {
    const movieElement = document.getElementById(movie.id)
    if (movieElement) {
      movieElement.style.display = 'block'
    }
  })
}
