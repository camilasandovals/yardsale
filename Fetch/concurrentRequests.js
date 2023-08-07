import fetch from 'node-fetch'

async function fetchData(url){
  try{
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`error while fetching from ${url}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function fetchConcurrentData(urls, maxConcurrent) {
  try {
    const results = []
    let index = 0
    while(index < urls.length){
      const currentBatch = urls.slice(index, index + maxConcurrent)
      const fetchPromises = currentBatch.map(url => fetchData(url))
      const batchResults = await Promise.all(fetchPromises)
      results.push(...batchResults);
      index += maxConcurrent;
    }
    return results;
  } catch(error) {
    console.error("Error fetching data from multiple urls", error)
    throw error
  }
}

const urls = [
  'https://api.sampleapis.com/coffee/hot',
  'https://api.sampleapis.com/beers/ale',
  'https://api.sampleapis.com/switch/games'
];

const maxConcurrentRequests = 2;

fetchConcurrentData(urls, maxConcurrentRequests)
  .then(data => console.log(data))
  .catch(error => console.error(error));
