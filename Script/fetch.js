fetchAPI()

async function fetchAPI() {
  const url = 'fake-MovieAPI.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log(json)
    return json.movies
  } catch (error) {
    console.error(error.message)
  }
}
