//Fetch FrontPage Content

loadFrontPageContent()

async function loadFrontPageContent() {
  const contentResponse = await fetch('FrontPage-content.json')
  const frontPageContent = await contentResponse.json()
  console.log(frontPageContent)

  const imagesResponse = await fetch('FrontPage-images.json')
  const frontPageImages = await imagesResponse.json()
  console.log(frontPageImages)
}
