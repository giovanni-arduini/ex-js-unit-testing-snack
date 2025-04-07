function isPalindrome(string) {
  return (
    [...string.toLowerCase()].join("") ==
    [...string.toLowerCase()].reverse().join("")
  );
}

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("hannah")).toBeTruthy();
  expect(isPalindrome("Gigi")).toBeFalsy();
  expect(isPalindrome("palindromo")).toBeFalsy();
});
