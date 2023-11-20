function caesarCipher(offset: number, input: string): string {
    const alphabetLength = 26;
  
    return input.split('').map(char => {
      if (char === ' ') {
        return ' ';
      }
  
      const isUpperCase = char === char.toUpperCase();
      const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const charCode = char.charCodeAt(0) - baseCode;
  
      // Apply Caesar Cipher logic with modulo to handle wrapping
      const shiftedCharCode = (charCode + offset) % alphabetLength;
      const newCharCode = (shiftedCharCode + alphabetLength) % alphabetLength;
  
      return String.fromCharCode(newCharCode + baseCode);
    }).join('');
  }
  
  // Test cases
  console.log(caesarCipher(3, "abc")); // def
  console.log(caesarCipher(2, "alta")); // cnvc
  console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
  // bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
  // mnopqrstuvwxyzabcdefghijkl
  