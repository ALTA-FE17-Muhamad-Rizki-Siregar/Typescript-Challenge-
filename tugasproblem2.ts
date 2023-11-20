function ubahHuruf(sentence: string): string {
    // Define the alphabet for reference
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    // Convert the sentence to uppercase for consistency
    sentence = sentence.toUpperCase();
  
    let result = "";
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence[i];
  
      // Check if the character is a letter in the alphabet
      const isLetter = alphabet.includes(currentChar);
  
      if (isLetter) {
        // Find the index of the current character in the alphabet
        const currentIndex = alphabet.indexOf(currentChar);
  
        // Perform the alphabet shifting by 10 positions
        const newIndex = (currentIndex + 10) % 26;
  
        // Append the shifted character to the result
        result += alphabet[newIndex];
      } else {
        // If the character is not a letter, append it unchanged
        result += currentChar;
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(ubahHuruf("SEPULSA OKE"));     // COZEVCK YUO
  console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
  console.log(ubahHuruf("INDONESIA"));       // SXNYXOCSK
  console.log(ubahHuruf("GOLANG"));          // QYVKXQ
  console.log(ubahHuruf("PROGRAMMER"));      // ZBYQBKWWOB
  