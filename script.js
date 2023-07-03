// complete the given function

function palindrome(str){
 const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the processed string
  const reversedStr = processedStr.split('').reverse().join('');
  
  // Compare the processed string with the reversed string
  return processedStr === reversedStr;

}
module.exports = palindrome
