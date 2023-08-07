const varname =  [5, 1,  1, 1,  2 , 2 , 2, 2, 4]
// varname.sort()

// console.log(varname)
functionName(varname)
function functionName (playlist) {
    let map = {}
    
     for (let element of playlist) {
     
         if(map.hasOwnProperty(element)) {
             map[element] += 1
         }
         else {
             map[element] = 1
         }
  }       

         let count = 0
    
         Object.keys(map).forEach(key => {
         // console.log(`Key is ${key} and value is ${map[key]}`);
         if (map[key] >= count) {
             count = map[key]
         }
         });
         
         let singer = []

         Object.keys(map).forEach(key => {
            if (map[key] == count) {
                singer.push(key)
            }
            });
        console.log(singer.length)
 }
 
 