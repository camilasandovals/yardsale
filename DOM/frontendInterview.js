import fetch from 'node-fetch'

const url = 'https://www.algoexpert.io/api/fe/questions'

async function fetchData(url) {
  const response = await fetch(url)
  const result = response.json()
  console.log(result)
  
}


fetchData(url)