import fetch from 'node-fetch'

const url = 'https://www.algoexpert.io/api/fe/questions'

async function fetchData(url) {
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`error while fetching from ${url}`)
    }
    const result = await response.json()
    return result
  } catch (error){
    console.error(error)
  }
}


fetchData(url)
  .then(data => console.log(data))
  .catch(error => console.error(error))