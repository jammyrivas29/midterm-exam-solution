function countProperties(obj) 
{
// Get an array of the objects property 
    const keys = Object.keys(obj);
// Return the length of the array
    return keys.length;
  }
console.log(countProperties({ a: 1, b: 2, c: 3 })); 
  