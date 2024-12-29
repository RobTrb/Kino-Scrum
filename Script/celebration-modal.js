document.addEventListener('DOMContentLoaded', () => {
  console.log('sidan visas utan problem')
  const placeholder = document.querySelector('.celebration-modal_rootcontainer')
  if (!placeholder) {
    console.error('Page not found!')
    return
  }

  const modalData = {
    title: 'Firande av Sápmi 6/2',
    description: 'Tillsammans firar vi Samernas Nationaldag på Kino Kvikkjokk!',
    details:
      'Välkommen att njuta av Farmor Joavnnas populära tunnbröd GÁHKKU. Utöver extraordinära filmvisningar erbjuds även våra traditionella aktiviteter',
    activities: [
      'Knep & knåp för små',
      'Ráidu – Möte med renar',
      'Samisk filmhistoria',
      'Jon Henrik Fjällgren lyfter taket i stora salen med Samisk Joik kl:17',
    ],
  }

  //Function for creating the modal
  function createModal(data) {
    console.log('Modal skapas...')
    const modalHTML = `
     <div class="celebration-modal_content">
        <h1>${data.title}</h1>
        <h2>${data.description}</h2>
        <p>${data.details}</p>
        <ul class="celebration-modal_activities">
            ${data.activities.map((activity) => `<li>${activity}</li>`).join('')}
            </ul>
        <button class="close-modal_btn"></button>
      </div>
        `
    //Adding HTML modal to main
    placeholder.insertAdjacentHTML('beforeend', modalHTML)
    console.log('modal skapad!')

    document.body.style.overflow = 'hidden' // Disables page scroll when modal is open
    placeholder.style.visibility = 'visible' // Make modal visible

    const closeModalBtn = document.querySelector('.close-modal_btn')
    closeModalBtn.addEventListener('click', closeModal)
  }

  //Function to close the modal
  function closeModal() {
    console.log('stänger modal...')
    const modal = document.querySelector('.celebration-modal_content')
    modal.remove() //remove the modal html from DOM

    //Restoring main html page
    document.body.style.overflow = '' //Re-enabled page scroll
    placeholder.style.visibility = 'hidden' //Modal background hidden
  }

  //Display and create modal
  createModal(modalData)
})
