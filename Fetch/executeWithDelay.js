import fetch from 'node-fetch'

async function executeWithDelay(delay, asyncFunction) {
try {
  return new Promise((resolve, reject) => {
    setTimeout(async() => {
      try {
        const result = await asyncFunction()
        resolve(result)
      } catch (error) {
        reject (error)
      }
    }, delay)
  });
} catch(error) {
  console.error("error with delay", error)
  throw error
}
}

// Example usage:
const delay = 2000; // 2 seconds
const asyncFunction = async () => {
  try {
    const result = await fetch('https://api.sampleapis.com/coffee/hot')
    const data = await result.json()
    return data
    
  } catch (error) {
    console.error(error)
    throw error
  }
};

executeWithDelay(delay, asyncFunction)
  .then(data => console.log(data))
  .catch(error => console.error(error));
