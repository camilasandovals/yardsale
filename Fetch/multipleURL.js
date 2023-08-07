import fetch from 'node-fetch';

async function fetchFromUrl(url){
  try {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`Failed to fetch data from ${url}`)
    } 
    const data = await response.json()
    return data
  } catch (error){
    console.error(error);
    throw error;
  }
}

async function fetchDataFromUrls(urls) {
  try {
    const fetchPromises = urls.map(url => fetchFromUrl(url))
    const results = await Promise.all(fetchPromises)
    return results
  } catch (error) {
    console.error("Error fetching data from multiple URLs:", error)
    throw error
  }
}

const urls = [
  'https://api.sampleapis.com/coffee/hot',
  'https://api.sampleapis.com/beers/ale',
  'https://api.sampleapis.com/switch/games'
];

fetchDataFromUrls(urls)
  .then(data => console.log(data))
  .catch(error => console.error(error));
