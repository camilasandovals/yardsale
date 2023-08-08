import fetch from 'node-fetch'

function throttle(asyncFunction, interval) {
  let lastExecutionTime = 0
  let isThrottled = false

  return async function (...args) {
    const now = Date.now()

    if (!isThrottled){
      isThrottled = true

    try {
      const result = await asyncFunction(...args)
      console.log(result)
    } catch(error) {
      console.error(error)
    }

    const elapsed = now - lastExecutionTime;
    if (elapsed >= interval) {
      isThrottled = false;
      lastExecutionTime = now;
    } else {
      setTimeout(() => {
        isThrottled = false;
        lastExecutionTime = Date.now()
      }, interval - elapsed)
    }
  }
}
}

// Example usage:
const asyncFunction = async () => {
  console.log("Async function executed!");
  return "Data from async function";
};

const throttledFunction = throttle(asyncFunction, 1000);

// Call the throttled function multiple times in quick succession
throttledFunction(); // Output: "Async function executed!"
throttledFunction(); // No output (throttled)
throttledFunction(); // No output (throttled)
