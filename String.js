const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(){
    let str = "Hello";
    let reversedStr = str.split('').reverse().join('');
    console.log("Reversed string: ", reversedStr);
}

function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function checkPalindrome(){
    const str1 = "A man, a plan, a canal, Panama";
    const str2 = "hello";

    console.log(`Is "${str1}" a palindrome`, isPalindrome(str1))
    console.log(`Is "${str2}" a palindrome`, isPalindrome(str2))
}

function areAnagrams(str1, str2){
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-8]/g, '').split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

function checkIsAnagram(){
    const string1 = "listen";
const string2 = "silent";
const string3 = "hello";

console.log(`Are "${string1}" and "${string2}" anagrams?`, areAnagrams(string1, string2)); // true
console.log(`Are "${string1}" and "${string3}" anagrams?`, areAnagrams(string1, string3)); // false
}

function firstNonRepeatingCharacter(){
    const charCount = {};
    let str = "swiss";
    let repeatingChar = null;

    for(let char of str){
        char = char.toLowerCase();
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str){
        if(charCount[char.toLowerCase()] === 1){
            repeatingChar = char;
            break; 
        }
    }

    console.log(`First non-repeating character in "${str}":`, repeatingChar);
}

function countVowelsAndConsonants(){
  const str = "Hello world!";
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for(let char of str.toLowerCase()){
    if(/[a-z]/.test(char)){
      if(vowels.includes(char)){
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}


function longestCommonPrefix(){
  const strings = ["flower", "flow", "flight"];

  if(strings.length === 0){
    console.log("String doesn't have content");
    return;
  }

  let prefix = strings[0];

  for(let i = 1; i < strings.length; i++){
    while(strings[i].indexOf(prefix) !== 0){
      prefix = prefix.slice(0, -1);
      if(prefix === "") {
        console.log("No common prefixes");
        return "";
      } 
    }
  }

  console.log(`Longest Common Prefix: "${prefix}"`);

}

function isValidPalindrome(){
  const string = "A man, a plan, a canal: Panama";

  const normalizeStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  let isValid = true;

  let left = 0;
  let right = normalizeStr.length - 1;

  while(left < right){
    if(normalizeStr[left] !== normalizeStr[right]){
      isValid = false;
      break;
    }
    left++;
    right--;
  }

  console.log(`Is "${string}" a valid palindrome?`, isValid);

}

function checkstrstr(heystack, needle){
    if(needle === "") return 0;

    const heystackLength = heystack.length;
    const needleLength = needle.length;

    for(let i = 0; i <= heystackLength - needleLength; i++){
      if(heystack.slice(i, i + needleLength) === needle) {
        return i;
      }
    }

    return -1;
}

function strstr(){
  // Example usage:
const haystack1 = "hello";
const needle1 = "ll";

const haystack2 = "aaaaa";
const needle2 = "bba";

console.log(`Index of "${needle1}" in "${haystack1}":`, checkstrstr(haystack1, needle1)); // 2
console.log(`Index of "${needle2}" in "${haystack2}":`, checkstrstr(haystack2, needle2)); // -1
}

function convertRomanToInt(roman){
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let integer = 0;
  let prevValue = 0;

  for(let i = roman.length - 1; i >= 0; i--){
    const currentValue = romanMap[roman[i]];

    if(currentValue < prevValue){
      integer -= currentValue;
    } else {
      integer += currentValue;
    }

    prevValue = currentValue;
  }

  return integer;

}

function romanToInt(){
  console.log(convertRomanToInt("III"));    // Output: 3
console.log(convertRomanToInt("IV"));     // Output: 4
console.log(convertRomanToInt("IX"));     // Output: 9
console.log(convertRomanToInt("LVIII"));  // Output: 58
console.log(convertRomanToInt("MCMXCIV"));// Output: 1994
}


function main() {
  console.log("\nSelect the items which you want to print from below list: \n");
  console.log();
  console.log("\n1. Reverse a string.\n");
  console.log("\n2. Check if a string is a palindrome\n");
  console.log("\n3. Check whether two strings are anagrams of each other.\n");
  console.log("\n4. Find the first non-repeating character in a string.\n");
  console.log("\n5. Count the number of vowels and consonants in a string.\n");
  console.log("\n6.Find the longest common prefix among a set of strings.\n");
  console.log("\n7.Check if a string is a valid palindrome.\n");
  console.log("\n8.Implement strstr (substring search).\n");
  console.log("\n9.Convert a Roman numeral to an integer.\n");
  rl.question("", function (num_of_item) {
    var selectedItem = parseInt(num_of_item);
    console.log();
    switch (selectedItem) {
      case 1:
        reverseString();
        rl.close();
        break;
      case 2:
        checkPalindrome();
        rl.close();
        break;
      case 3:
        checkIsAnagram();
        rl.close();
        break;
      case 4:
        firstNonRepeatingCharacter();
        rl.close();
        break;
      case 5:
        countVowelsAndConsonants();
        rl.close();
        break;
      case 6:
        longestCommonPrefix();
        rl.close();
        break;
      case 7:
        isValidPalindrome();
        rl.close();
        break;
      case 8:
        strstr();
        rl.close();
        break;
      case 9:
        romanToInt();
        rl.close();
        break;
      default:
        console.log(
          "\nInvalid Number, Please select a number from above given list :)\n"
        );
        rl.close();
        break;
    }
  });
}
main();
