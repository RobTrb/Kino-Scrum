document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.querySelector('.celebration-modal_rootcontainer')

  const modalData = {
    title: 'Firandet av Sápmi - 6:e Februari',
    description: 'Tillsammans firar vi Samernas nationaldag på Kino KvikkJokk!',
    details:
      'Kom och njut av Farmor Joavnnas populära tunnbröd GÁHKKU. Utöver extraordinära filmvisningar erbjuds även våra traditionella aktiviteter. Däribland:',
    activities: [
      'Knep & knåp för små',
      'Ráidu – Möte med renar',
      'Samisk filmhistoria',
      'Bokförsäljning och signering: Maxida Märaks memoarer',
      'Jon Henrik Fjällgren lyfter taket i stora salen med Samisk Joik kl:17',
    ],
  }

  //Function for creating the modal
  function createModal(data) {
    const modalHTML = `
     <div class="celebration-modal_content">
        <h1>${data.title}</h1>
        <h2>${data.description}</h2>
        <p>${data.details}"</p>
        <ul class="celebration-modal_activities">
            ${data.activities.map((activity) => `<li>${activity}</li>`).join('')}
            </ul>
        <button class="close-modal_btn"></button>
      </div>
        `

    //Adding HTML modal to main
    placeholder.insertAdjacentHTML('beforeend', modalHTML)
  }

  createModal(modalData)
})
