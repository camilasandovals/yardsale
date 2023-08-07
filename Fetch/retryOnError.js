import fetch from 'node-fetch'
import { resolve } from 'path'


async function retryOnFailure(asyncFunction, maxAttempts, retryDelay) {
  try {
    return await asyncFunction()
    } catch (error) {
      if(maxAttempts > 1) {
        console.error(`Attempt: ${maxAttempts} ,  error: ${error}`)
        await new Promise(resolve => setTimeout(resolve, retryDelay))
        return retryOnFailure(asyncFunction, maxAttempts - 1, retryDelay)
      } else {
        throw new Error("Max attempts reached")
      }
    }
}

// Example usage:
const asyncFunction = async () => {
  if (Math.random() < 1) {
    throw new Error("API request failed!");
  }
  return "Data from API";
};


retryOnFailure(asyncFunction, 3, 1000)
  .then(data => console.log(data))
  .catch(error => console.error("Max attempts reached. Error:", error.message));


