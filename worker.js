let count = 0;

function doWork() {
  count++;
  postMessage("Count: " + count);

  if (count < 5) {
    setTimeout(doWork, 1000);
  }
}

doWork();
