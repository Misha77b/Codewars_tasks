console.log("Hello, world!");

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  
  for(char of str) {
    if(vowels.includes(char.toLowerCase())) {
      sum++
    }
  }
  
  return sum;
}

console.log("abracadabra result:", getCount("abracadabra")); //5
console.log("pear tree result:", getCount("pear tree")); //4
console.log("Lorem result:", getCount(`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Veniam laborum officia quo, animi modi rerum ipsa rem itaque quae 
    reprehenderit est, atque inventore ullam ipsam aliquid iure. Aliquid, debitis corporis?`)); //83
