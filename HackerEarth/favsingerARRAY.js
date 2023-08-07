
// function main(input) {
//     const lines = input.split("\n");
//     const n = parseInt(lines[0]); // Number of songs
//     const playlist = lines[1].split(" ").map(Number); // Array of singers
//     console.log(playlist)
  
//     const favoriteSingersCount = countFavoriteSingers(playlist);
//     console.log(favoriteSingersCount);
//   }
  
//   // Read input from STDIN
//   process.stdin.resume();
//   process.stdin.setEncoding("utf-8");
//   var stdin_input = "";
//   process.stdin.on("data", function (input) {
//     stdin_input += input; // Reading input from STDIN
//   });
  
//   process.stdin.on("end", function () {
//     main(stdin_input);
//   });
  

function countFavoriteSingers(playlist) {
    const singerCounts = new Map();
    let maxCount = 0;
  
    // Count the occurrences of each singer in the playlist
    for (let i = 0; i < playlist.length; i++) {
      const singer = playlist[i];
      const count = singerCounts.get(singer) || 0;
      const updatedCount = count + 1;
      singerCounts.set(singer, updatedCount);
  
      // Update the maximum count if necessary
      if (updatedCount > maxCount) {
        maxCount = updatedCount;
      }
    }
  
    let favoriteSingersCount = 0;
  
    // Count the number of favorite singers
    for (const count of singerCounts.values()) {
      if (count === maxCount) {
        favoriteSingersCount++;
      }
    }
  
    return favoriteSingersCount;
  }
  
  function main(input) {
    const lines = input.split("\n");
    const n = parseInt(lines[0]); // Number of songs
    const playlist = lines[1].split(" ").map(Number); // Array of singers
  
    const favoriteSingersCount = countFavoriteSingers(playlist);
    console.log(favoriteSingersCount);
  }
  
  // Read input from STDIN
  process.stdin.resume();
  process.stdin.setEncoding("utf-8");
  var stdin_input = "";
  process.stdin.on("data", function (input) {
    stdin_input += input; // Reading input from STDIN
  });
  
  process.stdin.on("end", function () {
    main(stdin_input);
  });
  